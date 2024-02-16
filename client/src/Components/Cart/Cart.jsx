import { useState } from "react";
import { useCart } from "../../Context/CartContext";
import config from "../../configuration/config";
import CartItems from "../CartItems/CartItems";
import "./Cart.css";

const Cart = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    cart,
    total,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    deleteAllProducts,
  } = useCart();

  const subTotal = total;

  const taxRate = 0.18;

  const tax = subTotal * taxRate;

  const totalPrice = subTotal + tax;
  const handlePayButton = () => {
    // deleteAllProducts();
    setIsLoading(!isLoading);
    console.log(cart);
  };

  return (
    <div className="cart-container">
      <span className="cart-title">Your Cart</span>

      <div className="cart-items-container">
        {!isLoading && (
          <>
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
          </>
        )}
        {isLoading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              style={{ width: "100%" }}
              src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDJ0dGhlem4xcnA0NHFwN29oZTBla2hucThlaGRrczc0aXlidzV4YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gJ3mEToTDJn3LT6kCT/giphy.gif"
              alt=""
            />
            <p>Loading...</p>
          </div>
        )}
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

      <button
        style={{ opacity: isLoading ? 0.2 : 1 }}
        onClick={handlePayButton}
        className="pay-btn"
        disabled={isLoading}
      >
        Pay!
      </button>
    </div>
  );
};

export default Cart;
