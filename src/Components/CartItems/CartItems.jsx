import "./CartItems.css";
import burger from "../../assets/products/ham1.png";

const CartItems = ({
  img,
  title,
  price,
  quantity,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}) => {
  return (
    <div className="cart-items">
      <span className="remove-item" onClick={removeItem}>
        x
      </span>

      <img src={burger} alt="" />
      <div className="middle">
        <span className="order-title">{title}</span>
        <div className="last">
          <span className="order-price">${price}</span>
          <div className="order-count">
            <span className="circle" onClick={decreaseQuantity}>
              -
            </span>
            <span>{quantity}</span>
            <span className="circle" onClick={increaseQuantity}>
              +
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
