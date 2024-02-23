import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <div className="navbar">
        <img
          src={logo}
          alt="Food Recipes"
        />
      </div>
      <nav>
        <NavLink to="/#">Home</NavLink>
        <NavLink to="/#">Recipe</NavLink>
        <NavLink to="/#">Add recipe</NavLink>
        <NavLink to="/#">About</NavLink>
      </nav>
      <div className="nav-buttons">
        <button>Login</button>
        <button>Sign up</button>
      </div>
    </header>
  );
}

export default NavBar;
