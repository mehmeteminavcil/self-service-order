import { useCart } from "../../Context/CartContext";
import config from "../../configuration/config";
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

  const stripe_sec_key =
    "pk_test_51Mz7ggHlxNfkUvkRIMWgEeqsGwXXAt1iDwfv8CtEqDYYA4I5sduZnJqDxf8FpcpLgqVRwh0nti0rvdBIqLiH7EZ700Qtl4XFxu";

  const handlePayment = async () => {
    console.log(cart);
    console.log(`${config.API_URL}stripe/create-checkout-session`);

    // try {
    //   const res = await fetch("http://localhost:8080/api/stripe/checkout", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: stripe_sec_key,
    //     },
    //     body: JSON.stringify(cart),
    //   });
    //   if (res) {
    //     return res.json();
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <div className="cart-container">
      <span className="cart-title">Your Cart</span>
      <div className="cart-items-container">
        {cart.map((item) => (
          <CartItems
            key={item._id}
            img={`${config.API_URL}${item.image}`}
            title={item.name}
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

      <button onClick={handlePayment} className="pay-btn">
        Pay!
      </button>
    </div>
  );
};

export default Cart;
