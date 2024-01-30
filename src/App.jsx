import "./App.css";
import Categories from "./Components/Categories/Categories";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <Categories />
      <Products />
    </div>
  );
};

export default App;
