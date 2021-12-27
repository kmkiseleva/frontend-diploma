import "./carriageType.css";
import sitting from "../../img/sitting.png";
import platz from "../../img/platz.png";
import compartment from "../../img/compartment.png";
import lux from "../../img/lux.png";

export default function CarriageType() {
  return (
    <div className="informationBlock__type">
      <div className="type__title">Тип вагона</div>
      <div className="type__types">
        <div className="type__block">
          <img src={sitting} alt="seat" />
          <div className="type__name">Сидячий</div>
        </div>
        <div className="type__block">
          <img src={platz} alt="seat" />
          <div className="type__name">Плацкарт</div>
        </div>
        <div className="type__block active">
          <img src={compartment} alt="seat" />
          <div className="type__name active">Купе</div>
        </div>
        <div className="type__block">
          <img src={lux} alt="seat" />
          <div className="type__name">Люкс</div>
        </div>
      </div>
    </div>
  );
}
