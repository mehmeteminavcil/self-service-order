import "./Categories.css";
import ham_icon from "../../assets/icons/ham.png";

const Categories = () => {
  return (
    <div className="categories-container">
      <ul className="categories">
        <li className="category">
          <img src={ham_icon} alt="" />
          <span>Pizza</span>
        </li>

        <li className="category">
          <img src={ham_icon} alt="" />
          <span>Pizza</span>
        </li>
        <li className="category">
          <img src={ham_icon} alt="" />
          <span>Pizza</span>
        </li>
        <li className="category">
          <img src={ham_icon} alt="" />
          <span>Pizza</span>
        </li>
        <li className="category">
          <img src={ham_icon} alt="" />
          <span>Pizza</span>
        </li>
        <li className="category active">
          <img src={ham_icon} alt="" />
          <span>Pizza</span>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
