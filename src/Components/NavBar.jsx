import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20,
      color: '#1B2430',
    },
    nav: {
      height: 50,
      background: '#EF9F9F',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: 5
    },
    cartIconContainer: {
      position: 'relative',
      
      marginRight: 12
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9,
    }
};

function NavBar(props){

    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <ShoppingCartIcon style={styles.cartIcon} fontSize='large'/>
                <span style={styles.cartCount}> {props.count()} </span>
            </div>
        </div>
    )   
}

export default NavBar;