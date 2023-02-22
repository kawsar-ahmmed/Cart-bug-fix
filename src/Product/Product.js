import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'
//
//

const Product = (props) => {
    const { name, img, price, ratings, seller } = props.product;


    return (
        <div className='product'>
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h2>Name: {name}</h2>
                <p>Price: $ {price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating {ratings} Stars</small></p>
            </div>
            <div className="btn">
                <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                    <p>Add To Cart</p>
                    <FontAwesomeIcon> icon={faShoppingCart}</FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};


export default Product;