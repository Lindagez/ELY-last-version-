import React from 'react';

function ProductDetail({ product }) {
    return (
        <div>
            <h2>Product Details</h2>
            <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <p>{product.contactInfo}</p>
                <p>{product.location}</p>
            </div>
        </div>
    );
}

export default ProductDetail;
