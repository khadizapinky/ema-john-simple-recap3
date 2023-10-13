import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img, name , seller, ratings, price} = props.product;
   const handleAddToCart = props.handleAddToCart;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            
            <div className="product-info">
                <h4 className='product-name'>{name}</h4>
                <p>price: ${price}</p>
                <p>manufacturer: {seller}</p>
                <p>ratings: {ratings}</p>
            </div>

            <button onClick={() => handleAddToCart(props.product)}
             className='btn-cart'> Add to cart</button>
        </div>
    );
};

export default Product;