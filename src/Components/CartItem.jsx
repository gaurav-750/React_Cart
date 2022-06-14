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

    // increase(){
    //     this.props.handleIncreaseQty("X");
    // //     //setState form:
    // //     // this.setState({
    // //     //     qty: this.state.qty + 1
    // //     // });
    // //                 /* (or) */
    // //     this.setState((prevState)=>{
    // //         return {
    // //             qty : prevState.qty+1
    // //         }
    // //     })
    // }

    // decrease = ()=>{
    //     // console.log(this.state);
    //     const qty = this.state.qty;

    //     if (qty === 0) {return;}
    //     this.setState({
    //         qty : qty - 1
    //     })
    // }

    render(){
        // console.log('this.props', this.props);
        const {title, price, qty, increase, decrease, deleteItem} = this.props;

        return (
            <div className='cart-item'>
                
                <div className='left-block'>
                    <img style={customStyles.image}  />
                </div>
                <div className='right-block'>
                    <div  style={{fontSize : 30, fontWeight: 500}}>{title}</div>
                    <div style={{color: "grey", fontSize: 20}} >Rs {price}</div>
                    <div style={{color: "grey", fontSize: 20}}>Qty: {qty}</div>

                    <div className='cart-item-actions'>

                        <AddCircleIcon onClick={()=> {increase(this.props)}} color='success' className='action-buttons' fontSize='large'/>
                        <RemoveCircleIcon onClick={()=> decrease(this.props)} color='error' className='action-buttons' fontSize='large'/>
                        <DeleteIcon onClick={()=> {deleteItem(this.props)}} color='action' className='action-buttons' fontSize='large'/>

                    </div>
                </div>

            </div>
        );

    }
}

export default CartItem;