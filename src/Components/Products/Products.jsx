import ProductCard from "../ProductCards/ProductCard";
import "./Products.css";
const Products = () => {
  return (
    <div className="products-container">
      <h2>Burger</h2>
      <div className="products">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
