import "./Categories.css";
import categoriesData from "../../data/categories";
import Category from "../Category/Category";
import Products from "../Products/Products";
import { useState } from "react";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("Burger");

  return (
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
  );
};

export default Categories;
