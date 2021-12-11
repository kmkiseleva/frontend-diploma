import "./lastTicketsCard.css";
import wifi from "./img/wifi.png";
import express from "./img/express.png";
import cup from "./img/cup.png";
import rub from "./img/rub.png";
import { capitalize } from './../../../../utils/capitalize';

export default function LastTicketsCard(
  {haveWifi, isExpress, airCond, minPrice, departureFromCity, departureFromStation,
    departureToCity, departureToStation}) {
      const cityA = departureFromCity;
      const cityB = departureToCity;
  return (
    <div className="lastCard__container">
      <div className="lastCard__direction">
        <div className="direction__from">{capitalize(cityA)}</div>
        <div className="direction__to">{capitalize(cityB)}</div>
      </div>
      <div className="lastCard__stations">
        <div className="stations__from">{departureFromStation}</div>
        <div className="stations__to">{departureToStation}</div>
      </div>
      <div className="lastCard__footer">
        <div className="footer__options">
          <div className="option__img">
            {haveWifi && <img src={wifi} alt="wifi" />}
          </div>
          <div className="option__img">
            {isExpress && <img src={express} alt="express" />}            
          </div>
          <div className="option__img">
            <img src={cup} alt="cup" />
          </div>
        </div>
        <div className="footer__price">
          <span className="price__from">от</span>
          <span className="price">
            {minPrice} <img className="price__img" src={rub} alt="rub" />
          </span>
        </div>
      </div>
    </div>
  );
}
