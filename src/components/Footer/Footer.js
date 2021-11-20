import React from "react";
import "./footer.css";
import { Button, Form, Input } from "antd";
import Contact from "./Contact/Contact";
import btnUp from "./svg/btnUp.svg";
import call from "./svg/call.svg";
import mail from "./svg/mail.svg";
import skype from "./svg/skype.svg";
import geo from "./svg/geo.svg";

export default function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="footer__top">
        <section>
          <div className="footer__title">Свяжитесь с нами</div>
          <ul className="footer__contacts">
            <Contact
              contactIcon={call}
              contactAlt="call"
              contactText="8 (800) 000 00 00"
            />
            <Contact
              contactIcon={mail}
              contactAlt="iconMail"
              contactText="inbox@mail.ru"
            />
            <Contact
              contactIcon={skype}
              contactAlt="iconSkype"
              contactText="tu.train.tickets"
            />
            <Contact
              contactIcon={geo}
              contactAlt="iconGeo"
              contactText="г. Москва, ул. Московская 27-35, 555 555"
            />
          </ul>
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
