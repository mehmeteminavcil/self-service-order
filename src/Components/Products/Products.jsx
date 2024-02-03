import ProductCard from "../ProductCards/ProductCard";
import "./Products.css";
import data from "../../data/products";
import { useCart } from "../../Context/CartContext";

const Products = () => {
  const { addToCart } = useCart();
  return (
    <div className="products-container">
      <h2>Burger</h2>
      <div className="products">
        {data.map((product) => (
          <ProductCard
            key={product.id}
            img={product.img}
            title={product.title}
            desc={product.desc}
            price={product.price}
            rate={product.rate}
            handleAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
