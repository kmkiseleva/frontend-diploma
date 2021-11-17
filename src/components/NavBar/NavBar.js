import { NavLink } from "react-router-dom";
import "./navBar.css";

export default function NavBar() {
  return (
    <nav className="header__navbar">
      <ul>
        <li>
          <NavLink
            to="/#about"
            className="navbar__link"
            activeClassName="navbar_active"
          >
            О нас
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/#learnMore"
            className="navbar__link"
            activeClassName="navbar_active"
          >
            Как это работает
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/#reviews"
            className="navbar__link"
            activeClassName="navbar_active"
          >
            Отзывы
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/#contacts"
            className="navbar__link"
            activeClassName="navbar_active"
          >
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
