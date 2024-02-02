import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Categories from "./Components/Categories/Categories";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";

const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div className="app-container">
      <section className="main">
        <div className="mainmain">
          <Header toggleCart={toggleCart} />
          <Hero />
          <Categories />
          <Products />
        </div>

        {isCartVisible && <Cart />}
      </section>
    </div>
  );
};

export default App;
