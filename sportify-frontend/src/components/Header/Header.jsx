import React from "react";
import "./Header.css";
import logo from "../../icons/png-Icons/logo (1).png";


/**
 *	Header
 * 	@returns {JSX.Element} Header element
 */
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>

        <ul className="split">
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/">Profile</a>
          </li>
          <li>
            <a href="/">Reglage</a>
          </li>
          <li>
            <a href="/">Communuate</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
