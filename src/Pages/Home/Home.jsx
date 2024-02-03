import { useState } from "react";
import Categories from "../../Components/Categories/Categories";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import Products from "../../Components/Products/Products";
import "./Home.css";
import Cart from "../../Components/Cart/Cart";
const Home = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div>
      <section className="main">
        <div className="mainmain">
          <Header toggleCart={toggleCart} isCartVisible={isCartVisible} />
          <Hero />
          <Categories />
          <Products />
        </div>

        {isCartVisible && <Cart />}
      </section>
    </div>
  );
};

export default Home;
