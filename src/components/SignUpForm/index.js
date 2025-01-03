import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom'; 
import './index.css'

const SignUpForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    const handleSignup = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:3000/signup', { name, email, password });
            navigate('/login');
        } catch (err) {
            alert("User Already Exists Please Login");
        }
    };

    return (
        <div className='login-form-container'>
            <img src="https://images.deepai.org/art-image/045c51b55f464887bc19b6e971dc935b/ecommerce-website-signup-banner.jpg" alt="signup-logo" className='banner-image'/>
        <form className="signup-form-container" onSubmit={handleSignup}>
        <div>
            <img src="https://images.deepai.org/art-image/96669e00eebc426b82c3fdccc251ad1e/ecommerce-website-logo-without-background-d52fcd.jpg" alt="logo" className='logo-image'/>
        </div>
        <div className="input-container">
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
        id="username"
          type="text"
          value={name}
          className="username-input-field"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name"
        />
        </div>
        <div className="input-container">
        <label className="input-label" htmlFor="email">
          EMAIL
        </label>
        <input
          type="email"
          id="email"
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
        <button type="submit" className="signup-button">
          SignUp
        </button>
        <p className='para'>Already Registered ? <Link to="/login" className='link-El'>Login Now</Link></p>

        </form>   
        </div>
    );
};

export default SignUpForm;

