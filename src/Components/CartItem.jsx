import React from 'react';


const customStyles = {
    image : {
        marginLeft : 5,
        height : 200,
        width : 200,
        borderRadius : 4,
        backgroundColor : "lightGrey"
    }
}



class CartItem extends React.Component{
    render(){

        return (
            <div className='cart-item'>
                
                <div className='left-block'>
                    <img style={customStyles.image}  />
                </div>
                <div className='right-block'>
                    <div style={{fontSize : 25}}>Title</div>
                    <div style={{fontSize : 25}}>Price</div>
                    <div style={{fontSize : 25}}>Quantity</div>

                    <div className='cart-item-actions'>
                        {/* buttons */}
                    </div>
                </div>

            </div>
        );

    }
}

export default CartItem;