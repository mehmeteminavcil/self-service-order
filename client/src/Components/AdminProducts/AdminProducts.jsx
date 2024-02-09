import "./AdminProducts.css";
import productsData from "../../data/products";

const AdminProducts = () => {
  const groupProductsByName = (products) => {
    const groupedProducts = {};
    products.forEach((product) => {
      if (!groupedProducts[product.name]) {
        groupedProducts[product.name] = [];
      }
      groupedProducts[product.name].push(product);
    });
    return groupedProducts;
  };

  const groupedProducts = groupProductsByName(productsData);

  return (
    <div className="admin_products">
      <h1>Products</h1>
      {Object.keys(groupedProducts).map((name) => (
        <div key={name}>
          <h1 className="product_title">{name}</h1>
          {groupedProducts[name].map((product) => (
            <div className="admin_products-container" key={product.id}>
              <h2>{product.title}</h2>
              <img src={product.img} alt={product.title} />
              <p>{product.desc}</p>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rate}</p>
              <p>Edit</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AdminProducts;
