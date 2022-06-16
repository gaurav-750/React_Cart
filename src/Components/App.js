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
        return doc.data(); //data inside the document 
      })
      // console.log('products', products);

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

      productsArr[index].qty += 1; //increase the quantity of the product
      this.setState({ //re-render the cart component
          products: productsArr
      })

  }

  handleDecreaseQty = (product) => {

      const {products : productsArr} = this.state;
      const index = productsArr.findIndex((p) => {return p.id === product.id});

      if (productsArr[index].qty === 0) {return;}
      productsArr[index].qty -= 1; //decrease the quantity of the product
      this.setState({
          products: productsArr
      })
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
        title : 'Washing machine',
        price : 25000,
        qty : 1,
        img : 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
        id : uuidv4()
      })
      .then((docRef) => {
        console.log('Product added', docRef);
      })
      .catch((err) => {
        console.log('error', err)
      })

  }

  render(){
    {console.log('render')}

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
