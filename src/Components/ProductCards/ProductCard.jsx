import "./ProductCard.css";
import star_icon from "../../assets/products/star.png";

const ProductCard = ({ img, title, desc, price, rate, handleAddToCart }) => {
  return (
    <div className="card-container">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="bottom">
        <div className="rating">
          <img src={star_icon} alt="star icon" />
          <span>{rate}</span>
        </div>
        <span className="price">${price}</span>
        <span className="add-to-cart" onClick={handleAddToCart}>
          +
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
