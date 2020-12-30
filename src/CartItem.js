import React from 'react';

function CartItem({id, name, price, qty, updateQty}) {

    const subtractOne = () => {
        updateQty(id, qty - 1)
    }
    const addOne = () => {
        updateQty(id, qty + 1)
    }
    return (
        <div className="cart__item">
            <div>{name}</div>
            <div>£{price}</div>
            <div>
                <button onClick={subtractOne} disabled={qty <= 1}>-</button>
                {qty}
                <button onClick={addOne}>+</button></div>
            <div>Total: £{price * qty}</div>
        </div>
    )
}

export default CartItem;