import {Link, useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Navbar = props => {
  const onClickLogout = () => {
    Cookies.remove('authToken')
    navigate("/login")
  }
  const navigate=useNavigate()
  return (
    <nav className="nav-header">
        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://images.deepai.org/art-image/96669e00eebc426b82c3fdccc251ad1e/ecommerce-website-logo-without-background-d52fcd.jpg"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/orders" className="nav-link">
                Orders
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/cart" className="nav-link">
                Cart
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
    </nav>
  )
}

export default Navbar