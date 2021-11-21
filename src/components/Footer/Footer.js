import React from "react";
import "./footer.css";
import Contact from "./Contact/Contact";
import Social from "./Social/Social";
import btnUp from "./svg/btnUp.svg";
import call from "./svg/call.svg";
import mail from "./svg/mail.svg";
import skype from "./svg/skype.svg";
import geo from "./svg/geo.svg";
import youtube from "./svg/youtube.svg";
import linkedIn from "./svg/linkedIn.svg";
import gPlus from "./svg/gPlus.svg";
import fb from "./svg/fb.svg";
import twitter from "./svg/twitter.svg";

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
          <form className="footer__subscription">
            <input placeholder="e-mail" className="footer__mailInput" />
            <button className="footer__button" htmlType="submit">
              Отправить
            </button>
          </form>
          <div className="footer__title">Подписывайтесь на нас</div>
          <ul className="footer__socials">
            <Social socialIcon={youtube} socialAlt="youtube" />
            <Social socialIcon={linkedIn} socialAlt="linkedIn" />
            <Social socialIcon={gPlus} socialAlt="gPlus" />
            <Social socialIcon={fb} socialAlt="fb" />
            <Social socialIcon={twitter} socialAlt="twitter" />
          </ul>
        </section>
      </div>
      <div className="footer__bottom">
        <div className="footer__logo">Лого</div>
        <button
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
        </button>
        <span>2018 Web</span>
      </div>
    </footer>
  );
}
