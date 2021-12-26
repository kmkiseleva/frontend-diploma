import "./popups.css";
import PopupError from "./PopupError";
import PopupInfo from "./PopupInfo";

export default function Popups() {
  return (
    <div className="popups__container">
      <PopupError />
      <PopupInfo />
    </div>
  );
}
