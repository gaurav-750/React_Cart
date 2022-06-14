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
                img : 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
            },{
                id : 2,
                title : "Mobile",
                price : 17000,
                qty : 0,
                img : 'https://media.istockphoto.com/photos/closeup-of-a-businessman-hand-holding-a-smartphone-white-screen-is-picture-id1322157897?b=1&k=20&m=1322157897&s=170667a&w=0&h=SxgkGs8V4W2_kVgNs1V_gM8OW6fw4lROt1I_zlLIht4='
            },{
                id : 3,
                title : "Laptop",
                price : 53000,
                qty : 0,
                img : 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
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

  getTotalBill = () => {
    const {products} = this.state;

    let totalBill = 0;
    products.map((product) => {
      totalBill += (product.qty*product.price);
    })
    console.log('tb', totalBill)

    return totalBill;
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

        <h1 style={{padding: 15}}>
          Total: {this.getTotalBill()}
        </h1>
      </div>
      
    );
  }
}

export default App;
