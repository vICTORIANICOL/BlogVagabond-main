import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navigation.css";
import LogoMenu from "../assets/loogo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navigation-bar">
      {/* Logo I moved outside navlinks to stay visible */}
      <a href="/" className="logo-container">
        <img className="logo" src={LogoMenu} alt="Travel Logo" style={{transition: 'transform 0.3s'}} onMouseOver={(e) => e.target.style.transform = 'scale(0.9)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
      </a>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        {/* Left Menu */}
        <ul className="left-menu">
          
          <li>
            <Link to="/destinations">DESTINATIONS</Link>
          </li>
          <li>
            <Link to="/TravelTips">TRAVEL TIPS</Link>
          </li>
          
        </ul>

        {/* Right Menu */}
        <ul className="right-menu">
          
          <li>
            <Link to="/support">SUPPORT</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>
      </ul>

      {/* Burger Menu Button (Mobile Only) */}
      <button className="burger-menu" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  );
};

export default Navigation;
