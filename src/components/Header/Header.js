import React from "react";
import "./header.css";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container"><Logo /></div>
      <div className="header__container"><NavBar /></div>     
    </header>
  );
}
