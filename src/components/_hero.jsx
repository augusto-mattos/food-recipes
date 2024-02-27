import { Link } from "react-router-dom";
import heroImg from "../assets/images/carotte.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Your daily dish</h1>
        <h2>
          A <span>Food</span> journey
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque est
          arcu, finibus in dapibus quis, ultrices vitae neque. Aenean pretium,
          metus non facilisis lobortis, nisl urna porttitor quam, et pulvinar
          erat est id nisl. 
        </p>
        <button className="btn-terracota">Sign up</button>
        <p>
          Do you have an account? <Link to="/#">Log in</Link>
        </p>
      </div>
      <img src={heroImg} alt="" />
    </section>
  );
}

export default Hero;
