import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { withRouter } from 'react-router-dom';
import CustomButton from '../form/button';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss'


const CartDropdown = ({cartItems, history, dispatch}) => {
   // const hasCartItems = cartItems.length > 0;
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
            {
                //hasCartItems ?
                cartItems.length ?
                cartItems.map(item => 
                    <CartItem key={item.id} item={item} />
                ) :
                <span className="empty-message">Your cart is empty</span>
            }
            </div>
             <CustomButton onClick={() => {
                 history.push('/checkout')
                 dispatch(toggleCartHidden())
                 }} 
                 type="button">Go to checkout</CustomButton>
        </div>
    )
}

// const mapStateToProps = state => ({
//     cartItems: state.cartItems
// });

// with destructuring
// const mapStateToProps = ({cart: {cartItems}}) => ({
//     cartItems
// });

// with memoization (slice of state)
const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));