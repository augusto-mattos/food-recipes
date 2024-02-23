import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header>
        <img
          src={logo}
          alt="Food Recipes"
        />
      <nav>
        <NavLink to="/#">Home</NavLink>
        <NavLink to="/#">Recipe</NavLink>
        <NavLink to="/#">Add recipe</NavLink>
        <NavLink to="/#">About</NavLink>
      </nav>
      <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign up</button>
      </div>
    </header>
  );
}

export default NavBar;
