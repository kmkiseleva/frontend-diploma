import { memo } from "react";
import "./payPage.css";
import "./reantd.css";

import rub from "../../img/rub.png";
import forward from "../../img/forward.svg";
import back from "../../img/back.svg";

import Header from "../../components/Header/Header";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import TripDetails from "../../components/TripDetails/TripDetails";
import PassengersDetails from "../../components/PassengersDetails/PassengersDetails";

const PayPage = memo(() => {
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
            
          </div>
          <button className="payPage__mainButton">Купить билеты</button>
        </div>
      </div>
    </div>
  );
});

export default PayPage;
