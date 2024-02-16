import { useState } from "react";
import Categories from "../../Components/Categories/Categories";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import "./Home.css";
import Cart from "../../Components/Cart/Cart";
import Payment from "../../Components/Payment/Payment";

const Home = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [checkout, setCheckout] = useState(false);

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
        </div>

        {isCartVisible && !checkout && (
          <Cart handlePayButtonClick={() => setCheckout(!checkout)} />
        )}
        {isCartVisible && checkout && <Payment />}
      </section>
    </div>
  );
};

export default Home;
