import React from 'react';
import Cart from './Cart';
import NavBar from './NavBar';

import firebase from '../firebase';

import { v4 as uuidv4 } from 'uuid';
 

class App extends React.Component{

  constructor(){
    super();

    this.state = {
        products : [],
        loading : true
    }

}

  componentDidMount(){
    firebase
    .firestore()
    .collection('products')
    .onSnapshot((snapshot) => {
      //snapshot.docs - is an Array of our documents

      //Getting the products from snapshot.docs => which is an array of products:
      const products = snapshot.docs.map((doc) => {
        const data = doc.data();
        data['id'] = doc.id;

        // console.log('Updated doc.data()', data);
        return data; //data inside the document 
      })

      this.setState({
        products : products,
        loading : false //so the 'Loading Items..' disappears
      })
    });
  }



  handleIncreaseQty = (product) => {

      //Get the products array which is present in this.state
      const {products : productsArr} = this.state;

      //find the index of the product:
      const index = productsArr.findIndex((p) => {
          return p.id === product.id
      });

                      //Updating in firebase:
      const docRef = firebase.firestore().collection('products').doc(productsArr[index].id);
      console.log("docref", docRef);

      docRef.update({
        qty : productsArr[index].qty + 1
      })
      .then(() => {
        console.log("Quantity increased succesfully!");
      })
      .catch((err) => {
        console.log("error", err);
      })

  }

  handleDecreaseQty = (product) => {

      const {products : productsArr} = this.state;
      const index = productsArr.findIndex((p) => {return p.id === product.id});

      console.log(productsArr[index]);
      //updating in FireBase:
      const docRef = firebase.firestore().collection('products').doc(productsArr[index].id);
      console.log('docref', docRef);
    

      docRef.update({
        qty : productsArr[index].qty - 1
      })
      .then(() => {
        console.log('Quantity decreased succesfully!');
      })
      .catch((err) => {
        console.log('Error', err);
      })

      // if (productsArr[index].qty === 0) {return;}
      // productsArr[index].qty -= 1; //decrease the quantity of the product
      // this.setState({
      //     products: productsArr
      // })
  }

  deleteItem = (product) => {

      const {products : productsArr} = this.state;

      //remove the product from products Array:
      const newArr = productsArr.filter((p) => {
          return p.id !== product.id
      })

      //SetState:
      this.setState({
          products : newArr
      })
  }

  getCartCount = () =>{
    const {products} = this.state;

    let count = 0;
    products.forEach((product) => {
      count += product.qty
    })

    return count;
  }

  getTotalBill = () => {
    const {products} = this.state;

    let totalBill = 0;
    products.map((product) => {
      totalBill += (product.qty*product.price);
    })

    return totalBill;
  }

  addProduct = ()=> {
    firebase
      .firestore()
      .collection('products')
      .add({
        title : 'Watch',
        price : 1800,
        qty : 1,
        img : 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
      })
      .then((docRef) => {
        console.log('Product added', docRef);
      })
      .catch((err) => {
        console.log('error', err)
      })

  }

  render(){

    const {products} = this.state;

    return (
      <div className='App'>
        <NavBar
          count={this.getCartCount}
        />

        <button onClick={this.addProduct}>Add Product</button>

        <Cart
          products={products}
          handleIncreaseQty={this.handleIncreaseQty}
          handleDecreaseQty={this.handleDecreaseQty}
          deleteItem={this.deleteItem}
        />

      {this.state.loading ? <h1>Loading Products..</h1> : null}

        <h1 style={{padding: 15}}>
          Total: {this.getTotalBill()}
        </h1>
      </div>
      
    );
  }
}

export default App;
