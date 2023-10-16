import React from 'react';
import './Cart.css';    

const Cart = ({cart}) => {

    console.log(cart)
    let total = 0;
    let totalShipping = 0;
    for( const product of cart){
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = total*7/100;
    const grandTotal = total + totalShipping + tax;
    return (
        <div>
            <h3>order summary{cart.length}</h3>
           
            <p>total price:{total}</p>
            <p>total shipping : {totalShipping}</p>
            <p>tax:{tax.toFixed(2)}</p>
            <p> grand total:{grandTotal.toFixed(2)}</p>

        </div>
    );
};

export default Cart;