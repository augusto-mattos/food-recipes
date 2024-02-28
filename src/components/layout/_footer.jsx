import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Footer() {

  const today = new Date();

  return (
    <footer>
      <div className="footer-content">
        <div className="logo-col">
          <img
            src={logo}
            alt="food recipes"
          />
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            at diam mattis, imperdiet nunc non, dapibus diam. Vestibulum id
            sodales nulla, at suscipit lorem.{" "}
          </div>
        </div>
        <div className="footer-links">
          <h3>Quick links</h3>
          <Link to="/#">Home</Link>
          <Link to="/#">Recipes</Link>
          <Link to="/#">Blog</Link>
        </div>
        <div className="footer-links">
          <h3>Legal</h3>
          <Link to="/#">Terms of use</Link>
          <Link to="/#">Privacy & Cookies</Link>
        </div>
        <div className="newsletter-col">
          <h3>Newsletter</h3>
          
        </div>
      </div>
      <hr />
      <div className="animidia">
        <div>©{today.getFullYear()} Recipe logo. All Rights Reserved</div>
        <div>midias</div>
      </div>
    </footer>
  );
}

export default Footer;
