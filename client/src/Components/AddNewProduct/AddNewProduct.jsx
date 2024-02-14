import { useState } from "react";
import "./AddNewProduct.css";
const AddNewProduct = () => {
  const [newProductData, setNewProductData] = useState({
    name: "",
    desc: "",
    category: "",
    price: 0,
    rating: 0,
    image: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setNewProductData((prevstate) => ({
        ...prevstate,
        image: e.target.files[0],
      }));
    } else {
      setNewProductData((prevstate) => ({
        ...prevstate,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", newProductData.name);
    formData.append("desc", newProductData.desc);
    formData.append("category", newProductData.category);
    formData.append("price", newProductData.price);
    formData.append("rating", newProductData.rating);
    if (newProductData.image) {
      formData.append("image", newProductData.image);
    }
    try {
      const res = await fetch("http://localhost:8080/api/products/addproduct", {
        method: "POST",
        headers: {
          // "Content-Type": "multipart/form-data",
        },
        body: formData,
      });
      if (res.ok) {
        console.log("Product added succesfully");
      } else {
        console.error("failed to add product", res.statusText);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add_new-product">
      <h1>AddNewProduct</h1>
      <form
        onSubmit={handleSubmit}
        className="new_product-form"
        encType="multipart/form-data"
      >
        <label htmlFor="name">
          Name:
          <input
            onChange={handleChange}
            type="text"
            id="name"
            name="name"
            value={newProductData.name}
            required
          />
        </label>
        <label htmlFor="desc">
          Description:
          <input
            onChange={handleChange}
            type="text"
            id="desc"
            name="desc"
            value={newProductData.desc}
            required
          />
        </label>
        <label htmlFor="category">
          Category:
          <select
            onChange={handleChange}
            id="category"
            name="category"
            value={newProductData.category}
            required
          >
            <option value="">Select...</option>
            <option value="Burger">Burger</option>
            <option value="Drink">Drink</option>
            <option value="Sausage">Sausage</option>
            <option value="Samosa">Samosa</option>
            <option value="Dessert">Dessert</option>
            <option value="Pizza">Pizza</option>
          </select>
        </label>
        <label htmlFor="rating">
          Rating:
          <input
            onChange={handleChange}
            type="number"
            id="desc"
            name="rating"
            value={newProductData.rating}
          />
        </label>
        <label htmlFor="price">
          Price:
          <input
            onChange={handleChange}
            type="number"
            id="desc"
            name="price"
            value={newProductData.price}
          />
        </label>
        <label htmlFor="image">
          Image:
          <input onChange={handleChange} type="file" id="image" name="image" />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddNewProduct;
