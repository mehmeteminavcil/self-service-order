import "./Header.css";
import hamburger_icon from "../../assets/icons/Hamburger.png";
import search_icon from "../../assets/icons/Search.png";
import home_icon from "../../assets/icons/Home.png";
import cart_icon from "../../assets/icons/Cart.png";
import { useCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const Header = ({ toggleCart, isCartVisible }) => {
  const { cart } = useCart();

  return (
    <header className="header">
      <nav>
        <div className="btn  hamburger-btn">
          <img src={hamburger_icon} alt="" />
        </div>
        <div className="search-container">
          <img src={search_icon} alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="btn home">
          <Link to="/admin">
            <img src={home_icon} alt="" />
          </Link>
        </div>
        <div className={isCartVisible ? "btn cart active" : "btn cart"}>
          <img src={cart_icon} alt="" onClick={toggleCart} />
          <span>{cart.length}</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
