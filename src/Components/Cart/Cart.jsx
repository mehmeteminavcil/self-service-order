import { useCart } from "../../Context/CartContext";
import CartItems from "../CartItems/CartItems";
import "./Cart.css";

const Cart = () => {
  const {
    cart,
    total,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
  } = useCart();

  const subTotal = total;

  const taxRate = 0.18;

  const tax = subTotal * taxRate;

  const totalPrice = subTotal + tax;

  return (
    <div className="cart-container">
      <span className="cart-title">Your Cart</span>
      <div className="cart-items-container">
        {cart.map((item) => (
          <CartItems
            key={item.id}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            increaseQuantity={() => incrementQuantity(item)}
            decreaseQuantity={() => decrementQuantity(item)}
            removeItem={() => removeFromCart(item)}
          />
        ))}
      </div>

      <div className="bill">
        <div>
          <span className="bill-text">Subtotal</span>
          <span className="bill-number">${subTotal.toFixed(2)}</span>
        </div>
        <div>
          <span className="bill-text">Tax</span>
          <span className="bill-number tax">${tax.toFixed(2)}</span>
        </div>
        <div>
          <span className="bill-text">Total</span>
          <span className="bill-number">${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <button className="pay-btn">Pay!</button>
    </div>
  );
};

export default Cart;
