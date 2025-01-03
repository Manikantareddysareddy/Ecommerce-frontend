import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom'; 
import Cookies from 'js-cookie';
import axios from 'axios';
import './index.css'

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 
    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:3000/login', { email, password });
            
            if (response.data.token !== undefined) {
                Cookies.set('authToken', response.data.token, { expires: 4 }); // Store token for 1 day
                const { _id, name, email } = response.data.message; 
                localStorage.setItem('user', JSON.stringify({ _id, name, email }));
                navigate('/');
            }
        } catch (err) {
            alert("User Details Not Exists");
        }
        
    };

    return (
        <div className='login-form-container'>
        <div>
            <img src="https://images.deepai.org/art-image/afd13de494ef4207a01c8f0f7bfc7aa9/ecommerce-website-image-without-text-and-with_y9HmqyC.jpg" alt="logo-image" className='banner-image'/>
        </div>
        <form className="form-container" onSubmit={handleLogin}>
        <div>
            <img src="https://images.deepai.org/art-image/96669e00eebc426b82c3fdccc251ad1e/ecommerce-website-logo-without-background-d52fcd.jpg" alt="logo" className='logo-image'/>
        </div>
        <div className="input-container">
        <label className="input-label" htmlFor="username">
          EMAIL
        </label>
        <input
          type="email"
          value={email}
          className="username-input-field"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
        />
        </div>
        <div className="input-container">
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          value={password}
          className="password-input-field"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Your Password"
        />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        </form>
         <p className='para'>Don't have account? <Link to="/signup" className='link-El'>SignUp Now</Link></p>
        </div>
    );
};

export default LoginForm;
