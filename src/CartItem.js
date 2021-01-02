import React from 'react';
import { IoAddCircleOutline, IoRemoveCircleOutline  } from "react-icons/io5";

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
                <button className="cart-item__button" onClick={subtractOne} disabled={qty <= 1}><IoRemoveCircleOutline className="cart-item__icon" /></button>
                <span>{qty}</span>
                <button className="cart-item__button" onClick={addOne}><IoAddCircleOutline className="cart-item__icon" /></button>
            </div>
            <p><strong>Total: £{price * qty}</strong></p>
        </div>
    )
}

export default CartItem;