import "./carriage.css";
import rub from "../../img/rub.png";
import ac from "../../img/service_ac.svg";
import wifi from "../../img/service_wifi.svg";
import firstClass from "../../img/service_first-class.svg";
import cup from "../../img/service_cup.svg";

import imgInside from "../../img/imageInside.png";

export default function Carriage() {
  return (
    <div className="informationBlock__carriageBlock">
      <div className="carriageBlock__header">
        <div className="carriageBlock__carriages">
          Вагоны <span className="active-carriage">07</span> <span>09</span>
        </div>
        <div className="carriageBlock__subtitle">
          Нумерация вагонов начинается с головы поезда
        </div>
      </div>
      <div className="carriageBlock__details">
        <div className="carriage__number">
          <span>07</span> <br /> вагон
        </div>
        <div className="carriage__seatsInfo">
          <div className="seatsInfo__block">
            <div className="seatsInfo__title">
              Места <span>11</span>
            </div>
            <div className="seatsInfo__seats">
              Верхние <span>3</span>
            </div>
            <div className="seatsInfo__seats">
              Нижние <span>8</span>
            </div>
          </div>
          <div className="seatsInfo__block">
            <div className="seatsInfo__title">Стоимость</div>
            <div className="seatsInfo__price">
              2920 <img src={rub} alt="rub" />
            </div>
            <div className="seatsInfo__price">
              3530 <img src={rub} alt="rub" />
            </div>
          </div>
          <div className="seatsInfo__block">
            <div className="seatsInfo__title">
              Обслуживание <span>ФПК</span>
            </div>
            <div className="seatsInfo__services">
              <div className="seatsInfo__icon">
                <img src={ac} alt="icon" />
              </div>
              <div className="seatsInfo__icon">
                <img src={wifi} alt="icon" />
              </div>
              <div className="seatsInfo__icon">
                <img src={firstClass} alt="icon" />
              </div>
              <div className="seatsInfo__icon">
                <img src={cup} alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carriage__popup">
        <span>11</span> человек выбирают места в этом поезде
      </div>
      <div className="carriageBlock__insideImg">
        <img src={imgInside} alt="inside" />
      </div>
    </div>
  );
}
