import { memo } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./payPage.css";
import "./reantd.css";

import rub from "../../img/rub.png";
import forward from "../../img/forward.svg";
import back from "../../img/back.svg";

import Header from "../../components/Header/Header";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import TripDetails from "../../components/TripDetails/TripDetails";
import PassengersDetails from "../../components/PassengersDetails/PassengersDetails";
import PassengersInitials from "../../components/PassengersInitials/PassengersInitials";

import { appStateSetProgress } from "../../store/appState";

const PayPage = memo(() => {
  const dispatch = useDispatch();
  const history = useHistory();

  const buyTickets = () => {
    dispatch(appStateSetProgress(3));
    history.push("./check");
  };

  return (
    <div className="payPage__body">
      <Header headerType="select" />
      <ProgressBar />
      <div className="payPage__container">
        <div className="payPage__sidebar">
          <div className="payPage__sidebarTitle">Детали поездки</div>
          <div className="payPage__sidebarMiddle">
            <TripDetails
              icon={forward}
              title="Туда"
              date="30.08.2018"
              direction="forward"
            />
            <TripDetails icon={back} title="Обратно" date="09.09.2018" />
            <PassengersDetails />
          </div>
          <div className="payPage__sidebarResult">
            Итог <span>7 760</span> <img src={rub} alt="rub" />
          </div>
        </div>

        <div className="payPage__main">
          <div className="payPage__mainInfo">
            <div className="payPage__mainInfoHeader">Персональные данные</div>
            <div className="payPage__mainInfoBody">
              <div>
                <PassengersInitials />
              </div>
              <div className="mainInfoBody__phone">
                <div className="mainInfoBody__title">Контактный телефон</div>
              </div>

              <div className="mainInfoBody__mail">
                <div className="mainInfoBody__title">E-mail</div>
              </div>
            </div>
            <div className="payPage__payInfoHeader">Способ оплаты</div>
            <div className="payPage__payInfoBody">
              <div className="payInfoBody__checkbox">Онлайн</div>
              <div className="payInfoBody__options">
                <div className="payInfoBody__option">Банковской картой</div>
                <div className="payInfoBody__option">PayPal</div>
                <div className="payInfoBody__option">Visa QIWI Wallet</div>
              </div>
            </div>
            <div className="payPage__payInfoCheckbox">Наличными</div>
          </div>
          <button className="payPage__mainButton" onClick={buyTickets}>
            Купить билеты
          </button>
        </div>
      </div>
    </div>
  );
});

export default PayPage;
