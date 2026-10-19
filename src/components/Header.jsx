import './Header.css';
import { Link } from 'react-router-dom';

function Header({ cartCount }) {
  return (
    <header className="app-header">
      <h1 className="logo">ComponentCorner</h1>
      <nav className="nav-menu">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/products" className="nav-link">
          Products
        </Link>
        <Link to="/cart" className="nav-link">
          Cart
        </Link>
      </nav>
      <div className="cart-container">
        <Link to="/cart">
        <img
          className="cart-icon"
          src="https://preview.redd.it/a-sinister-idea-for-a-character-related-to-save-points-v0-eow6sknm708h1.jpeg?width=640&crop=smart&auto=webp&s=0c0e094f43ce03374a270fa380b4b28a942e89bb"
          alt="Cart"
        />
        </Link>
        <span className="cart-count">{cartCount}</span>
      </div>
    </header>
  );
}

export default Header;