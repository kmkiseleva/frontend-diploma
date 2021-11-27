import React from "react";
import "./information.css";
import info1 from "./img/info1.png";
import info2 from "./img/info2.png";
import info3 from "./img/info3.png";

export default function Information() {
  return (
    <section className="information" id="information">
      <div className="information__container">
        <div className="information__header">
          <h2 className="information__title">Как это работает</h2>
          <button className="information__button">Узнать больше</button>
        </div>
        <ul className="information__list">
          <li className="information__item">
            <img className="item__img" src={info1} alt="1" />
            <div className="item__text">Удобный заказ на сайте</div>
          </li>
          <li className="information__item">
            <img className="item__img" src={info2} alt="2" />
            <div className="item__text">Нет необходимости ехать в офис</div>
          </li>
          <li className="information__item">
            <img className="item__img" src={info3} alt="3" />
            <div className="item__text">Огромный выбор направлений</div>
          </li>
        </ul>
      </div>
    </section>
  );
}
