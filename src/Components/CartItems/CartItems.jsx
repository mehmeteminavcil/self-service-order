import "./CartItems.css";
import burger from "../../assets/products/ham1.png";

const CartItems = () => {
  return (
    <div className="cart-items">
      <img src={burger} alt="" />
      <div className="middle">
        <span className="order-title">The Brooklyn</span>
        <div className="last">
          <span className="order-price">$19.99</span>
          <div className="order-count">
            <span className="circle">-</span>
            <span>2</span>
            <span className="circle">+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
