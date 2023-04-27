import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <Link to={"/"}>
          <div className="header-logo">
            Zaid <span>Travels</span>
          </div>
        </Link>
        <Link to={"/Topics"}>Topics</Link>
        <Link to={"/Contact"}>Contact</Link>
      </div>
    </div>
  );
}

export default Header;
