import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteIcon from '@mui/icons-material/Delete';

const customStyles = {
    image : {
        marginLeft : 5,
        height : 150,
        width : 150,
        borderRadius : 4,
        backgroundColor : "lightGrey"
    }
}



function CartItem(props){

        // console.log('this.props', this.props);
        const {title, img, price, qty, increase, decrease, deleteItem} = props;

        return (
            <div className='cart-item'>
                
                <div className='left-block'>
                    <img src={img} style={customStyles.image}  />
                </div>
                <div className='right-block'>
                    <div style={{fontSize : 30, fontWeight: 500}}>{title}</div>
                    <div style={{color: "grey", fontSize: 20}} >Rs {price}</div>
                    <div style={{color: "grey", fontSize: 20}}>Qty: {qty}</div>

                    <div className='cart-item-actions'>

                        <AddCircleIcon onClick={()=> {increase(props)}} color='success' className='action-buttons' fontSize='large'/>
                        <RemoveCircleIcon onClick={()=> decrease(props)} color='error' className='action-buttons' fontSize='large'/>
                        <DeleteIcon onClick={()=> {deleteItem(props)}} color='action' className='action-buttons' fontSize='large'/>

                    </div>
                </div>

            </div>
        );

}

export default CartItem;