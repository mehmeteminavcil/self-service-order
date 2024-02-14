import ProductCard from "../ProductCards/ProductCard";
import "./Products.css";
import { useCart } from "../../Context/CartContext";
import { useEffect, useState } from "react";

const Products = ({ category }) => {
  const { addToCart } = useCart();

  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/products");
        const data = await res.json();
        setProductsData(data);
        console.log(productsData);
      } catch (err) {
        console.log("Error fetching data", err);
      }
    };
    fetchData();
  }, []);

  const filteredData = productsData.filter(
    (item) => item.category === category
  );

  console.log(filteredData);

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
