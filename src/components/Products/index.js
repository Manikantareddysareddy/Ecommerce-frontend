
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import './index.css'
import Navbar from '../Navbar';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Fetch products from the backend
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('https://ecommerce-backend-3-lurb.onrender.com/products');
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  

  return (
    <>
    <Navbar/>

    <div>
      <h1 className='main-heading'>Products List</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <Link to={`/product/${product._id}`}>
              <button className='view-btn'>View Details</button>
            </Link>
          </div>
        ))}
      </div>
      
    </div>
    </>
  );
};

export default Products;
