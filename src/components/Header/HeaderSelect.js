import "./header.css";
import NavBar from "./NavBar/NavBar";
import Logo from "./Logo/Logo";
import DestinationPicker from "../Pickers/DestinationPicker/DestinationPicker";
import CustomDatePicker from "../Pickers/DatePicker/CustomDatePicker";

export default function HeaderSelect() {
  return (
    <div className="wrapper__select">
      <header className="header">
        <div className="header__top">
          <Logo />
          <NavBar />
        </div>
        <div className="headerSelect__content">
          <div className="headerSelect__pickersBlock">
            <div className="headerSelect__pickers">
              <DestinationPicker />
              <CustomDatePicker pickerPlace="headerPicker" />
            </div>
            <div className="headerSelect__button">
              <button>Найти билеты</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
