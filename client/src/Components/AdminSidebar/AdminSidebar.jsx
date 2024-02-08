import "./AdminSidebar.css";
const AdminSidebar = ({ onCategoryClick }) => {
  return (
    <div className="admin-sidebar_container">
      <h1>Admin Sidebar</h1>
      <ul>
        <li>Dashboard</li>
        <li onClick={() => onCategoryClick("users")}>Users</li>
        <li onClick={() => onCategoryClick("categories")}>Categories</li>
        <li onClick={() => onCategoryClick("products")}>Products</li>
        <li onClick={() => onCategoryClick("orders")}>Orders</li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
