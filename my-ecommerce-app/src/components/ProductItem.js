import React from 'react';

const ProductItem = ({ product, onAddToCart }) => {
    return (
        <div className="product-item">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductItem;