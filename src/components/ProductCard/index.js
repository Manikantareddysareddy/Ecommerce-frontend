import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './index.css';
import Navbar from '../Navbar';
import { useCart } from '../CartContext'; 

const ProductCard = () => {
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const { addToCart } = useCart(); // Get the addToCart function from context
  const { productId } = useParams(); // Get the productId from the URL

  useEffect(() => {
    // Fetching product details from the backend
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`https://ecommerce-backend-3-lurb.onrender.com/product/${productId}`);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
    fetchProduct();
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  const decrementCount = () => setCount(Math.max(count - 1, 1));
  const incrementCount = () => setCount(count + 1);

  const handleAddToCart = () => {
    addToCart(product, count); // Add the product to the cart with the current count
  };

  return (
    <>
      <Navbar />
      <div className="product-detail">
        <img src={product.image} alt={product.name} className="product-image" />
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating} / 5</p>
          <p>Category: {product.category}</p>
          <p>Stocks: {product.stocks}</p>
          <div className="quantity-container">
            <button className="plus-btn" onClick={decrementCount}>
              -
            </button>
            <p className="count-para">{count}</p>
            <button className="plus-btn" onClick={incrementCount}>
              +
            </button>
          </div>
          <button className="cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
