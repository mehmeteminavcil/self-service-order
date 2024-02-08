import "./AdminCategories.css";
import categoriesData from "../../data/categories";
const AdminCategories = () => {
  return (
    <div className="admin_categories">
      <h1>AdminCategories</h1>

      <ul>
        {categoriesData.map((category) => (
          <li key={category.id}>
            <div>
              <img src={category.img} alt="" />
            </div>
            <span>{category.name}</span>
            <span style={{ color: category.color }}>
              IIIIIIII color IIIIIIII {category.color}
            </span>
            <span className="edit_category">Edit</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminCategories;
