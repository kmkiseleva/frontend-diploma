import "./lastTicketsCard.css";
import wifi from "./img/wifi.png";
import express from "./img/express.png";
import cup from "./img/cup.png";
import rub from "./img/rub.png";

export default function LastTicketsCard() {
  return (
    <div className="lastCard__container">
      <div className="lastCard__direction">
        <div className="direction__from">Санкт-Петербург</div>
        <div className="direction__to">Самара</div>
      </div>
      <div className="lastCard__stations">
        <div className="stations__from">Курский вокзал</div>
        <div className="stations__to">Московский вокзал</div>
      </div>
      <div className="lastCard__footer">
        <div className="footer__options">
          <div className="option__img">
            <img src={wifi} alt="wifi" />
          </div>
          <div className="option__img">
            <img src={express} alt="express" />
          </div>
          <div className="option__img">
            <img src={cup} alt="cup" />
          </div>
        </div>
        <div className="footer__price">
          <span className="price__from">от</span>
          <span className="price">
            2 500 <img className="price__img" src={rub} alt="rub" />
          </span>
        </div>
      </div>
    </div>
  );
}
