import React from "react";
import "./header.css";
import NavBar from "./NavBar/NavBar";
import Logo from "./Logo/Logo";

export default function Header() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__top">
          <Logo />
          <NavBar />
        </div>
        <div className="header__maintitle">
          <span>Вся жизнь - </span>
          <span className="maintitle_bold">путешествие! </span>
        </div>
      </header>
    </div>
  );
}
