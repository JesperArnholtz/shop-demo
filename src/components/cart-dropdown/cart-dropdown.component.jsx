import React from 'react';
import CustomButton from '../form/button';
import './cart-dropdown.styles.scss'


const CartDropdown = ({id, name, price, imageUrl}) => {

    return (
        <div className="cart-dropdown">
            <div className="cart-items"></div>
             <CustomButton type="button">Go to checkout</CustomButton>
        </div>
    )
}

export default CartDropdown;