import React, { useState } from 'react';
import Cart from './Cart';
import NavBar from './NavBar';

class App extends React.Component{

  constructor(){
    super();

    this.state = {
        products : [{
                id : 1,
                title : "Watch",
                price : 1800,
                qty : 0,
                img : ''
            },{
                id : 2,
                title : "Mobile",
                price : 17000,
                qty : 0,
                img : ''
            },{
                id : 3,
                title : "Laptop",
                price : 53000,
                qty : 0,
                img : ''
        }],
        
        
    }
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

      if (productsArr[index].qty == 0) {return;}
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

  render(){

    const {products} = this.state;

    return (
      <div className='App'>
        <NavBar
          count={this.getCartCount}
        />
        <Cart
          products={products}
          handleIncreaseQty={this.handleIncreaseQty}
          handleDecreaseQty={this.handleDecreaseQty}
          deleteItem={this.deleteItem}
        />
      </div>
      
    );
  }
}

export default App;
