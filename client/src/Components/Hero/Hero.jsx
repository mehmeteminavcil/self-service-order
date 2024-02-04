import "./Hero.css";
import hero_bg from "../../assets/hero-bg.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <h1>Fire Fresh</h1>
        <p>Fresh & Healthy Food</p>
      </div>
      <div className="right">
        <div>
          <h1>45</h1>
          <p>Total Items</p>
        </div>
        <div>
          <h1>16</h1>
          <p>Category</p>
        </div>
      </div>
      <img src={hero_bg} alt="" />
    </div>
  );
};

export default Hero;
