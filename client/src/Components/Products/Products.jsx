import ProductCard from "../ProductCards/ProductCard";
import "./Products.css";
import { useCart } from "../../Context/CartContext";
import { useEffect, useState } from "react";
import config from "../../configuration/config.js";

const Products = ({ category }) => {
  const { addToCart } = useCart();

  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(config.API_URL + "api/products");
        const data = await res.json();
        setProductsData(data);
      } catch (err) {
        console.log("Error fetching data", err);
      }
    };
    fetchData();
  }, []);

  const filteredData = productsData.filter(
    (item) => item.category === category
  );

  return (
    <div className="products-container">
      <h2>{category}</h2>
      <div className="products">
        {filteredData.map((product) => (
          <ProductCard
            key={product._id}
            img={`http://localhost:8080/${product.image}`}
            title={product.name}
            desc={product.desc}
            price={product.price}
            rate={product.rating}
            handleAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
