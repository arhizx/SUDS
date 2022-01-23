import "./Header.scss";
import logo from "../assets/navbarLogo.png";
const Header = () => {
  return (
    <header>
      <nav id="navbar">
        <img src={logo} alt="logo" />
        <ul id="navbar__nav">
          <li className="navbar__link">
            <a href="#Pickup/Delivery">Pickup/Delivery</a>
          </li>
          <li className="navbar__link">
            <a href="#About">About</a>
          </li>
          <li className="navbar__link">
            <a href="#Features">Features</a>
          </li>
          <li className="navbar__link">
            <a href="#FAQ">FAQ</a>
          </li>
          <li className="navbar__link">
            <a href="#Contacts">Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
