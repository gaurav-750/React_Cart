import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{

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
            }]  
        }
    }



    render(){
        const products = this.state.products;

        return (
            <div className='cart'>
                {products.map((item) => {
                    return (
                        <CartItem 
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            qty={item.qty}
                            img={item.img}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Cart;