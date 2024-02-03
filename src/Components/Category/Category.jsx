import "./Category.css";

const Category = ({ img, name, color, handleOnClick, active }) => {
  return (
    <li
      className={`category ${active ? "active" : ""}`}
      onClick={handleOnClick}
      style={{ borderColor: color }}
    >
      <img src={img} alt="" />
      <span>{name}</span>
      <div
        className="background-circle"
        style={{ backgroundColor: color }}
      ></div>
    </li>
  );
};

export default Category;
