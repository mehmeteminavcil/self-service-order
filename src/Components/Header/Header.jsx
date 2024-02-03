import "./Header.css";
import hamburger_icon from "../../assets/icons/Hamburger.png";
import search_icon from "../../assets/icons/Search.png";
import home_icon from "../../assets/icons/Home.png";
import cart_icon from "../../assets/icons/Cart.png";

const Header = ({ toggleCart, isCartVisible }) => {
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
          <img src={home_icon} alt="" />
        </div>
        <div className={isCartVisible ? "btn cart active" : "btn cart"}>
          <img src={cart_icon} alt="" onClick={toggleCart} />
          <span>4</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
