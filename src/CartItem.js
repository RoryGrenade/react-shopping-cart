import React from 'react';

import './CartItem.scss';

function CartItem({id, name, price, qty, updateQty}) {

    const subtractOne = () => {
        updateQty(id, qty - 1)
    }
    const addOne = () => {
        updateQty(id, qty + 1)
    }
    return (
        <div className="cart-item">
            <p>{name}</p>
            <p>£{price}</p>
            <div className="cart-item__qty-wrapper">
                <button className="cart-item__button" onClick={subtractOne} disabled={qty <= 1}>-</button>
                <span>{qty}</span>
                <button className="cart-item__button" onClick={addOne}>+</button>
            </div>
            <p><strong>Total: £{price * qty}</strong></p>
        </div>
    )
}

export default CartItem;