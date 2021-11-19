import React from "react";
import "./footer.css";
import { Button, Form, Input } from "antd";
import btnUp from "./svg/btnUp.svg";

export default function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="footer__top">
        <section>
          <div className="footer__title">Свяжитесь с нами</div>
          <ul className="footer__connect"></ul>
        </section>
        <section>
          <div className="footer__title">Подписка</div>
          <div className="footer__subtitle">Будьте в курсе событий</div>
          <Form className="footer__subscription">
            <Input placeholder="e-mail" className="footer__mailInput" />
            <Button className="footer__button" htmlType="submit">
              Отправить
            </Button>
          </Form>
          <div className="footer__title">Подписывайтесь на нас</div>
        </section>
      </div>
      <div className="footer__bottom">
        <div className="footer__logo">Лого</div>
        <Button
          shape="circle"
          className="footer__btnUp"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <img src={btnUp} alt={btnUp} />
        </Button>
        <span>2018 Web</span>
      </div>
    </footer>
  );
}
