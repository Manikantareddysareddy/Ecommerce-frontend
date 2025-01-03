import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import './index.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
        const storedUserData = localStorage.getItem('user');
    const{_id}=JSON.parse(storedUserData)
      try {
        const userId = _id; 
        const response  = await axios.get(`https://ecommerce-backend-3-lurb.onrender.com/orders/${userId}`);
        setOrders(response.data.orders);
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      <Navbar />
      <div className="order-details-container">
        <h1>Order History</h1>
        {orders.length === 0 ? (
          <p>You have no orders yet.</p>
          
        ) : (
          <ul>
            {orders.map((order) => (
              <div key={order._id} className="order-item">
                <h3>Order placed on: {new Date(order.date).toLocaleDateString()}</h3>
                <h3>Status: {order.status}</h3>
                <ul>
                  {order.products.map((product) => (
                     <div className='sub-cart-container'>
                     <img src={product.image} alt={product.name} className='cart-image'/>
                     <h2 className='cart-heading'>{product.name}</h2>
                     <p className='cart-para'>{product.quantity}</p>
                     <p><span>$</span>{product.price*product.quantity}</p>
                   </div>
                  ))}
                </ul>
                <h4>Total Amount: ${order.totalAmount}</h4>
              </div>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Orders;
