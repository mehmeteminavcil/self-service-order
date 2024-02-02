import CartItems from "../CartItems/CartItems";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart-container">
      <span className="cart-title">Your Cart</span>
      <div className="cart-items-container">
        <CartItems />
        <CartItems />
        <CartItems />
      </div>

      <div className="bill">
        <div>
          <span className="bill-text">Subtotal</span>
          <span className="bill-number">$119.99</span>
        </div>
        <div>
          <span className="bill-text">Tax</span>
          <span className="bill-number tax">$19.99</span>
        </div>
        <div>
          <span className="bill-text">Total</span>
          <span className="bill-number">$148.99</span>
        </div>
      </div>

      <button className="pay-btn">Pay!</button>
    </div>
  );
};

export default Cart;
