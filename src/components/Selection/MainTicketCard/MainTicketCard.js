import { memo } from "react";
import "./mainTicketCard.css";

import train from "./img/train.png";
import arrowLight from "../../../../img/arrow_light.png";
import arrowDark from "../../../../img/arrow_dark.png";
import arrowTo from "../../../../img/arrow_to.png";
import arrowBack from "../../../../img/arrow_back.png";
import rub from "./img/rub.png";
import wifi from "./img/wifi.png";
import express from "./img/express.png";
import cup from "./img/cup.png";

import { capitalize } from "../../../utils/capitalize";

const MainTicketCard = memo(({ trains }) => {
  const train0 = trains[0];
  // const train1 = trains[1];
  // eslint-disable-next-line no-underscore-dangle
  const trainId = train0.departure.train._id;
  const trainName = train0.departure.train.name;
  const pointA = capitalize(train0.departure.from.city.name);
  const pointB = capitalize(train0.departure.to.city.name);

  return (
    <div className="mainCard__container">
      <div className="mainCard__side">
        <div className="side__img">
          <img src={train} alt="train" />
        </div>
        <div className="side__trainNumber">{trainId}</div>
        <div className="side__trainDirections">
          <div className="trainDirections__from">
            {pointA}&nbsp; <img src={arrowLight} alt="arrow" />
          </div>
          <div className="trainDirections__to">
            {pointB} <img src={arrowDark} alt="arrow" />
          </div>
          {trainName && (
            <div className="trainDirections__to">&laquo;{trainName}&raquo;</div>
          )}
        </div>
      </div>
      <div className="mainCard__middle">
        <div className="middle__row">
          <div className="row__point">
            <div className="row__time">00:10</div>
            <div className="row__city">Москва</div>
            <div className="row__station">Курский вокзал</div>
          </div>
          <div className="row__direction">
            <div className="direction__time">9 : 42</div>
            <div className="direction__arrow">
              <img src={arrowTo} alt="arrow" />
            </div>
          </div>
          <div className="row__point">
            <div className="row__time">09:52</div>
            <div className="row__city">Санкт-Петербург</div>
            <div className="row__station">Ладожский вокзал</div>
          </div>
        </div>
        <div className="middle__row">
          <div className="row__point">
            <div className="row__time">00:10</div>
            <div className="row__city">Москва</div>
            <div className="row__station">Курский вокзал</div>
          </div>
          <div className="row__direction">
            <div className="direction__time">9 : 42</div>
            <div className="direction__arrow">
              <img src={arrowBack} alt="arrow" />
            </div>
          </div>
          <div className="row__point">
            <div className="row__time">09:52</div>
            <div className="row__city">Санкт-Петербург</div>
            <div className="row__station">Ладожский вокзал</div>
          </div>
        </div>
      </div>
      <div className="mainCard__seats">
        <div className="seats__row">
          <div className="seats__name">Сидячий</div>
          <div className="seats__amount">88</div>
          <div className="seats__price">
            <span className="price__from">от</span>
            <span className="price__value">1920</span>
            <span className="price__rubIcon">
              <img src={rub} alt="rub" />
            </span>
          </div>
        </div>
        <div className="seats__row">
          <div className="seats__name">Плацкарт</div>
          <div className="seats__amount">88</div>
          <div className="seats__price">
            <span className="price__from">от</span>
            <span className="price__value">4500</span>
            <span className="price__rubIcon">
              <img src={rub} alt="rub" />
            </span>
          </div>
        </div>
        <div className="seats__row">
          <div className="seats__name">Купе</div>
          <div className="seats__amount">88</div>
          <div className="seats__price">
            <span className="price__from">от</span>
            <span className="price__value">1700</span>
            <span className="price__rubIcon">
              <img src={rub} alt="rub" />
            </span>
          </div>
        </div>
        <div className="seats__row">
          <div className="seats__name">Люкс</div>
          <div className="seats__amount">88</div>
          <div className="seats__price">
            <span className="price__from">от</span>
            <span className="price__value">2300</span>
            <span className="price__rubIcon">
              <img src={rub} alt="rub" />
            </span>
          </div>
        </div>
        <div className="seats__options">
          <div className="seatsOptions__icon">
            <img src={wifi} alt="wifi" />
          </div>
          <div className="seatsOptions__icon">
            <img src={express} alt="express" />
          </div>
          <div className="seatsOptions__icon">
            <img src={cup} alt="cup" />
          </div>
        </div>
        <div className="seats__button">
          <button>Выбрать места</button>
        </div>
      </div>
    </div>
  );
});

export default MainTicketCard;
