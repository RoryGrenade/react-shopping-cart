import React, {useState} from 'react';
import CartItem from './CartItem';

import './Cart.scss'

function Cart({ initialItems }) {

    const [items, setItems] = useState(initialItems)

    const updateQty = (id, qty) => {
        const newItems = items.map(item => {
            if (item.id === id) {
                return {...item, qty: qty }
            }
            return item;
        })
        setItems(newItems)
    }

    const grandTotal = items.reduce((total, item) => (total + item.qty * item.price), 0).toFixed(2)
    return (
        <div className="cart">
            <div className="cart__title-border-wrapper">
                <h1 className="cart__title">Shopping Cart</h1>
            </div>
            <div className="cart__items-wrapper">
                {items.map(item => (
                    <CartItem key={item.id} updateQty={updateQty} {...item} />
                ))}
            </div>
            <h2 className="cart__total">Grand total: £{grandTotal}</h2>
        </div>
    )
}

export default Cart;