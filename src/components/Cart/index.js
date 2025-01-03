import React from 'react';
import { useCart } from '../CartContext';
import Navbar from '../Navbar';
import './index.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import EmptyCartView from '../EmptyCartView';


const Cart = () => {
  const { cart,clearCart } = useCart(); // Get the cart from context
  let navigate=useNavigate()
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleOrder = async () => {
    const storedUserData = localStorage.getItem('user');
    const{_id}=JSON.parse(storedUserData)
    try {
      const orderData = {
        userId:_id,
        products: cart.map((item) => ({
          name: item.name,
          image:item.image,
          quantity: item.quantity,
          price: item.price,
        })),
        totalAmount:calculateTotal(),
      };
      const response = await axios.post('https://ecommerce-backend-3-lurb.onrender.com/orders', orderData);
      navigate("/orders")
    } catch (error) {
      console.error('Error placing order', error);
    }
  };
  return (
    <>
      <Navbar />
      <div className='cart-main-container'>
        <h1 className='main-heading'>Your Cart</h1>
        {cart.length === 0 ? (
          <EmptyCartView/>
        ) : (
          <ul>
            <div className='sub-container'>
              <h3>ProductImage</h3>
              <h3>Name</h3>
              <h3>Quantity</h3>
              <h3>Price</h3>
            </div>
            {cart.map((item) => (
              <div className='sub-cart-container'>
                <img src={item.image} alt={item.name} className='cart-image'/>
                <h2 className='cart-heading'>{item.name}</h2>
                <p className='cart-para'>{item.quantity}</p>
                <p><span>$</span>{item.price*item.quantity}</p>
              </div>
            ))}
          </ul>
        )}
        <div className='totalAmount-container'>
        {cart.length > 0 && <h3>Total: ${calculateTotal()}</h3>}
        <button className='order-btn' onClick={handleOrder}>OrderNow</button>
        </div>
       
      </div>
    </>
  );
};

export default Cart;
