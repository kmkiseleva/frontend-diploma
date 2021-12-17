import "./header.css";
import NavBar from "./NavBar/NavBar";
import Logo from "./Logo/Logo";

export default function HeaderSelect() {
  return (
    <div className="wrapper__select">
      <header className="header">
        <div className="header__top">
          <Logo />
          <NavBar />
        </div>
        <div className="header__content">
        </div>
      </header>
    </div>
  );
}
