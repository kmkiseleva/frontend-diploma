import React from "react";
import "./about.css";

export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="about__title">О нас</h2>
      <div className="about__content">
        <div className="about__line"></div>
        <div className="about__text">
          <p>
            Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы
            наблюдаем, как с каждым днем все больше людей заказывают жд билеты
            через интернет.
          </p>
          <p>
            Сегодня можно заказать железнодорожные билеты онлайн всего в 2
            клика, но стоит ли это делать? {"\n"}
            Мы расскажем о преимуществах заказа через интернет.
          </p>
          <p>
            Покупать ж/д билеты дешево можно за 90 суток до отправления поезда.{" "}
            {"\n"}
            Благодаря динамическому ценообразованию цена на билеты в это время
            самая низкая.
          </p>
        </div>
      </div>
    </section>
  );
}
