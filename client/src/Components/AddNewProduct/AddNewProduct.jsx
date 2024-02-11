import "./AddNewProduct.css";
const AddNewProduct = () => {
  return (
    <div className="add_new-product">
      <h1>AddNewProduct</h1>

      <form action="">
        <input type="text" placeholder="name of product" />
        <input type="text" placeholder="description" />
        <input type="text" placeholder="color" />
        <input type="number" placeholder="price" />
      </form>
    </div>
  );
};

export default AddNewProduct;
