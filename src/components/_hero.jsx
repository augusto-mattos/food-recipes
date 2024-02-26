import { Link } from "react-router-dom";
import heroImg from "../assets/images/healthy-meal.jpeg";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Your daily dish</h1>
        <h2>
          A <span>Food</span> journey
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque est
          arcu, finibus in dapibus quis, ultrices vitae neque. Aenean pretium,
          metus non facilisis lobortis, nisl urna porttitor quam, et pulvinar
          erat est id nisl. Nullam semper nunc sit amet mattis fermentum. Nunc
          neque lectus, sagittis et elit a, euismod finibus quam. Sed viverra
          orci eu magna accumsan maximus. Aliquam nec magna euismod, tristique
          sem a, laoreet metus.
        </p>
        <button className="signup-btn">Sign up</button>
        <p>
          Do you have an account? <Link to="/#">Log in</Link>
        </p>
      </div>
      <div className="hero-img">
        <img src={heroImg} alt="" />
        <div className="overlay"></div>
      </div>
    </div>
  );
}

export default Hero;
