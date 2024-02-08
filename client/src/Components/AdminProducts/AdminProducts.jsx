import "./AdminProducts.css";
import productsData from "../../data/products";
import categoriesData from "../../data/categories";
import ProductCard from "../ProductCards/ProductCard";
import Category from "../Category/Category";
import { useState } from "react";
import Products from "../Products/Products";
const AdminProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("Burger");

  return (
    <div>
      <div className="categories-container">
        <ul className="categories">
          {categoriesData.map((category) => (
            <Category
              key={category.id}
              img={category.img}
              name={category.name}
              color={category.color}
              active={selectedCategory === category.name}
              handleOnClick={() => setSelectedCategory(category.name)}
            />
          ))}
        </ul>
        <Products category={selectedCategory} />
      </div>
    </div>
  );
};

export default AdminProducts;
