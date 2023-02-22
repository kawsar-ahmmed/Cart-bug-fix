import React from 'react';

const Cart = (props) => {
    const cardInfo = props.cart;
    console.log(cardInfo);
    return (
        <div>
            <p>Products: {cardInfo.price} </p>
            <p>Total Price: {cardInfo.price} </p>
            <p>Total Shipping Charg: {cardInfo.shipping} </p>

        </div>
    );
};

export default Cart;