import "./successfulPage.css";
import HeaderSuccess from "./../../components/Header/HeaderSuccess";
import rub from "./img/rub.png";

export default function SuccessfulPage() {
  return (
    <div className="success__container">
      <HeaderSuccess />
      <div className="success__content">
        <div className="success__header">
          <div className="success__order">
            №Заказа <span>285АА</span>
          </div>
          <div className="success__sum">
            сумма <span>7 760</span> <img src={rub} alt="rub" />
          </div>
        </div>
        <div className="success__progress"></div>
        <div className="success__message">
          <p className="message__name">Ирина Эдуардовна!</p>
          <p className="message__text">
            Ваш заказ успешно оформлен. <br /> В ближайшее время с вами свяжется
            наш оператор для подтверждения.
          </p>
          <p className="message__thanks">
            Благодарим Вас за оказанное доверие и желаем приятного путешествия!
          </p>
        </div>
        <div className="success__footer"></div>
      </div>
    </div>
  );
}
