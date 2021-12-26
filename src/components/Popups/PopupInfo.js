import "./popupInfo.css";
import img from "../../img/exclamation_point_grey.png";

export default function PopupInfor() {
  return (
    <div className="popupInfo__container">
      <div className="popupInfo__header">
        <img src={img} alt="exclamation" />
      </div>
      <div className="popupInfo__message">Information for you...</div>
      <div className="popupInfo__footer">
        <button className="popupError__button">Понятно</button>
      </div>
    </div>
  );
}
