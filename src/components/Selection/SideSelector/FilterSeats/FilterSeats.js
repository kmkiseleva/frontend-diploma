import "./filterSeats.css";
import { Switch } from "antd";

export default function FilterSeats({ icon, text }) {
  return (
    <li className="seat__container">
      <div className="seat__icon">
        <img src={icon} alt="icon" />
      </div>
      <div className="seat__text">{text}</div>
      <div className="seat__switch">
        <Switch defaultChecked />
      </div>
    </li>
  );
}
