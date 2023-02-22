import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [newCart, SetCart] = useState([]);

    const handleAddToCart = (products) => {
        const newAdd = [...newCart, products];
        SetCart(newAdd);
    }

  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, []);

    return (
        <div className='shop'>
            <div className="proder-container">
                {
                    products.map(products => <Product 
                        key={products.id} 
                        product={products}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="order-container">
                {
                    newCart.map (cart=> <Cart 
                    key={cart.id}
                    cart = {cart}
                    ></Cart>)
                }
                pl : {newCart.length}
            </div>
        </div>
    );
};



export default Shop;