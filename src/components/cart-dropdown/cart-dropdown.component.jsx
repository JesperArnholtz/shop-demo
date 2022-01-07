import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../form/button';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss'


const CartDropdown = ({cartItems}) => {

    return (
        <div className="cart-dropdown">
        {console.log(cartItems)}
            <div className="cart-items">
            {
                cartItems.map(item => 
                    <CartItem key={item.id} item={item} />
                )
            }
            </div>
             <CustomButton type="button">Go to checkout</CustomButton>
        </div>
    )
}

// const mapStateToProps = state => ({
//     cartItems: state.cartItems
// });

// with destructuring
const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
});

export default connect(mapStateToProps)(CartDropdown);