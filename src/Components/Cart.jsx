import React from 'react';
import CartItem from './CartItem';

function Cart(props){

    const {products} = props;
    return (
        <div className='cart'>
            {products.map((item) => {
                return (
                    <CartItem 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        qty={item.qty}
                        img={item.img}
                        increase={props.handleIncreaseQty}
                        decrease={props.handleDecreaseQty}
                        deleteItem={props.deleteItem}
                    />
                )
            })}
        </div>
    )

}

export default Cart;