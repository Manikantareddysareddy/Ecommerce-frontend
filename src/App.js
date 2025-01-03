import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Products from './components/Products';
import  Cart  from './components/Cart';
import ProductCard  from './components/ProductCard';
import Orders from './components/Orders';

function App() {
  return (
    <Router>
            <Routes>
              <Route path="/" element={<Home/>}/>
                <Route path="/signup" element={<SignUpForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/products" element={<Products/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/product/:productId" element={<ProductCard/>}/>
                <Route path="/orders" element={<Orders/>}/>
            </Routes>
        </Router>
  );
}

export default App;
