import { useState } from "react";
import AdminSidebar from "../../Components/AdminSidebar/AdminSidebar";
import "./Admin.css";
import AdminCategories from "../../Components/AdminCategories/AdminCategories";
import AdminProducts from "../../Components/AdminProducts/AdminProducts";

const Admin = () => {
  const [selectedCategory, setSelectedCategory] = useState("products");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const renderContent = () => {
    switch (selectedCategory) {
      case "categories":
        return <AdminCategories />;
      case "products":
        return <AdminProducts />;
    }
  };

  return (
    <div className="admin-container">
      <div className="left">
        <AdminSidebar onCategoryClick={handleCategoryChange} />
      </div>
      <div className="right">{renderContent()}</div>
    </div>
  );
};

export default Admin;
