import React from 'react';
import Cart from './Cart';
import NavBar from './NavBar';

import firebase from '../firebase';

class App extends React.Component{

  constructor(){
    super();

    this.state = {
        products : [],
        loading : true //loader
    }

    this.db = firebase.firestore();

}

  componentDidMount(){

    firebase
      .firestore()
      .collection('products')
      .orderBy('price')
      .onSnapshot((snapshot) => {

        const products = snapshot.docs.map((doc) => {
          const data = doc.data();

          //adding the id to doc:
          data['id'] = doc.id;
          return data;
        })
        // console.log('products:', products);

        this.setState({
          products : products,
          loading : false
        })
      })
      
  }


  handleIncreaseQty = (product) => {

    //get the reference of the particular document which is clicked:
    const docRef = this.db.collection('products').doc(product.id);

    docRef.update({
      qty : product.qty +1
    })
    .then(() => {
      console.log('Qty inc. succesfully!');
    })
    .catch((err) => {
      console.log('Error', err);
    })
      
  }

  handleDecreaseQty = (product) => {

      // const {products : productsArr} = this.state;
      // const index = productsArr.findIndex((p) => {return p.id === product.id});

      const docRef = this.db.collection('products').doc(product.id);

      if (product.qty === 0) {
        return;
      }

      docRef.update({
        qty : product.qty - 1
      })
      .then(() => {
        console.log('Qty dec. succesfully!');
      })
      .catch((err) => {
        console.log('Error', err);
      })
      
  }

  deleteItem = (product) => {
      // console.log('product', product);

      const docRef = this.db.collection('products').doc(product.id);

      docRef
        .delete()
        .then(() => {
          console.log('Item Deleted succesfully!');
        })
        .catch((err) => {
          console.log('Error', err);
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
    
    this.db
      .collection('products')
      .add({
        title : 'Watch',
        price : 1799,
        qty : 1,
        img : 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
      })
      .then((docref) => {
        console.log('Product has been added!');
        // console.log('docref:', docref);
      })
      .catch((err) => {
        console.log('Error in adding product:', err);
      })


  }

  render(){

    const {products} = this.state;

    return (
      <div className='App'>
        <NavBar
          count={this.getCartCount}
        />

        {/* <button onClick={this.addProduct} style={{padding : '10px', fontSize : '16px'}}>
          Add Product
        </button> */}

        <Cart
          products={products}
          handleIncreaseQty={this.handleIncreaseQty}
          handleDecreaseQty={this.handleDecreaseQty}
          deleteItem={this.deleteItem}
        />

      {this.state.loading == true ? <h1>Loading Products..</h1> : null}

        <h1 style={{padding: 15}}>
          Total: {this.getTotalBill()}
        </h1>
      </div>
      
    );
  }
}

export default App;
