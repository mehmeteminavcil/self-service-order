import "./ProductCard.css";
import ham_1 from "../../assets/products/ham1.png";
import star_icon from "../../assets/products/star.png";

const ProductCard = () => {
  return (
    <div className="card-container">
      <img src={ham_1} alt="" />
      <h3>The Jalapeno Popper Show</h3>
      <p>
        The Jalapeno Popper Show is a Mexican Chicken Burger topped with
        jalapeno-infused cream cheese.
      </p>
      <div className="bottom">
        <div className="rating">
          <img src={star_icon} alt="star icon" />
          <span>4.4</span>
        </div>
        <span className="price">$14.99</span>
        <span className="add-to-cart">+</span>
      </div>
    </div>
  );
};

export default ProductCard;
