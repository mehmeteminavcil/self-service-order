import ProductCard from "../ProductCards/ProductCard";
import "./Products.css";
import { useCart } from "../../Context/CartContext";
import productsData from "../../data/products";

const Products = ({ category }) => {
  const { addToCart } = useCart();

  const filteredData = productsData.filter((item) => item.name === category);

  return (
    <div className="products-container">
      <h2>{category}</h2>
      <div className="products">
        {filteredData.map((product) => (
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
