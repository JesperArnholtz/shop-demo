import React from 'react';
import { connect } from 'react-redux';
import { clearItem, removeItem, addItem } from '../../redux/cart/cart.actions'
import './checkout-item.styles.scss';



const CheckoutItem = ({item, clearItem, addItem, removeItem}) => {
    const { name, imageUrl, price, quantity } = item;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(item)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(item)}>&#10095;</div>

            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearItem(item)}>&#10005;</div>
        </div>
    )
}

// const mapStateToProps = (state) => ({
//    removeItem: selectCartItemsCount(state)
// })

const mapDispatchToProps = dispatch => ({
    clearItem: item  => dispatch (clearItem(item)),
    removeItem: item  => dispatch (removeItem(item)),
    addItem: item  => dispatch (addItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem);