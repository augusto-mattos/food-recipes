import { useContext } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import logo from "../../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";

function NavBar() {
  const { signed, signOut } = useContext(AuthGoogleContext);
  const navigate = useNavigate();

  const userData = JSON.parse(sessionStorage.getItem("@AuthFirebase:user"));
  const signedUserName = userData ? userData.displayName || userData.email : "";

  function handleClick() {
    if (signed) {
      signOut();
      window.location.reload();
    } else {
      navigate("/login");
    }
  }

  return (
    <header>
      <NavLink to="/">
        <img
          src={logo}
          alt="Food Recipes"
        />
      </NavLink>
      <nav>
        <NavLink to="/#">Home</NavLink>
        <NavLink to="/recipes-list">Recipes</NavLink>
        <NavLink to="/#">Favoritos</NavLink>
        {/* <NavLink to="/#">About</NavLink> */}
      </nav>
      <div className="nav-buttons">
        {signed ? (
          <div className="signed-user">
            <p>{`Olá, ${signedUserName}!`}</p>
            <button
              className="logout-btn"
              onClick={handleClick}
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            className="login-btn"
            onClick={handleClick}
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
}

export default NavBar;
