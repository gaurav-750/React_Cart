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



class CartItem extends React.Component{

    // Define state:
    constructor(){
        super()
        this.state = {
            price : 999,
            title : "Mobile",
            qty : 0,
            img : ''
        }
    }


    increase = () =>{
        
        //setState form:
        // this.setState({
        //     qty: this.state.qty + 1
        // });

        this.setState((prevState)=>{
            return {
                qty : prevState.qty+1
            }
        })
    }

    decrease = ()=>{
        this.setState({
            qty : this.state.qty - 1
        })
    }

    render(){
        const {title, price, qty} = this.state;

        return (
            <div className='cart-item'>
                
                <div className='left-block'>
                    <img style={customStyles.image}  />
                </div>
                <div className='right-block'>
                    <div style={{fontSize : 25}}>{title}</div>
                    <div style={{fontSize : 25}}>Rs {price}</div>
                    <div style={{fontSize : 25}}>Qty: {qty}</div>

                    <div className='cart-item-actions'>

                        <AddCircleIcon onClick={this.increase} color='success' className='action-buttons' fontSize='large'/>
                        <RemoveCircleIcon onClick={this.decrease} color='error' className='action-buttons' fontSize='large'/>
                        <DeleteIcon color='action' className='action-buttons' fontSize='large'/>

                    </div>
                </div>

            </div>
        );

    }
}

export default CartItem;