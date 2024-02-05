// import React from 'react';

// function ProductList({ products, onBookmarkClick, onViewDetailsClick }) {
//     return (
//         <div>
//             <h2>Products</h2>
//             <ul>
//                 {products.map((product, index) => (
//                     <li key={index}>
//                         <div>
//                             <h3>{product.name}</h3>
//                             <p>{product.description}</p>
//                             <button onClick={() => onViewDetailsClick(product)}>View Details</button>
//                             <button onClick={() => onBookmarkClick(product)}>Bookmark</button>
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default ProductList;


import React, { useState } from 'react';

const ProductList = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [sortOrder, setSortOrder] = useState('');

    const [products, setProducts] = useState([]);

    const handleSearch = async () => {
        const url = `http://localhost:5000/api/products/search?name=${name}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&sortBy=${sortBy}&sortOrder=${sortOrder}`;
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
    };

    return (
        <div>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
            <input type="number" placeholder="Min Price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
            <input type="number" placeholder="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="">Sort By</option>
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="dateAdded">Date Added</option>
            </select>
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                <option value="">Sort Order</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
            <button onClick={handleSearch}>Search</button>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - {product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;