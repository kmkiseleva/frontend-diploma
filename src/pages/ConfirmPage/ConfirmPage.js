import "./confirmPage.css";
import HeaderSelect from "./../../components/Header/HeaderSelect";
import ProgressBar from "./../../components/ProgressBar/ProgressBar";
import MainTicketCard from "./../../components/Selection/MainTickets/MainTicketCard/MainTicketCard";
import Passengers from "../../components/Passengers/Passengers";
import Payment from "../../components/Payment/Payment";
import rub from "../../img/rub_light.png";

export default function ConfirmPage() {
  return (
    <div>
      <HeaderSelect />
      <ProgressBar />
      <div className="confirm__container">
        <div className="confirm__sidebar">
          <div className="confirm__sidebarTitle">Детали поездки</div>
          <div className="confirm__sidebarMiddle"></div>
          <div className="confirm__sidebarResult">
            Итог <span>7 760</span> <img src={rub} alt="rub" />
          </div>
        </div>
        <div className="confirm__main">
          <div className="confirm__ticket">
            <div className="ticket__title">Поезд</div>
            <MainTicketCard />
          </div>
          <Passengers />
          <div className="confirm__pay">
            <div className="pay__title">Способ оплаты</div>
            <Payment />
          </div>
          <button className="confirm__button">Подтвердить</button>
        </div>
      </div>
    </div>
  );
}
