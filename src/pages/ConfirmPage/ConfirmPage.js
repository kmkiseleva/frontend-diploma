import { memo } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./confirmPage.css";
import Header from "../../components/Header/Header";
import ProgressBar from "./../../components/ProgressBar/ProgressBar";
import MainTicketCard from "./../../components/Selection/MainTicketCard/MainTicketCard";
import Passengers from "../../components/Passengers/Passengers";
import Payment from "../../components/Payment/Payment";
import TripDetails from "../../components/TripDetails/TripDetails";
import PassengersDetails from "../../components/PassengersDetails/PassengersDetails";

import forward from "../../img/forward.svg";
import back from "../../img/back.svg";
import rub from "../../img/rub_light.png";

const ConfirmPage = memo(() => {
  const history = useHistory();

  const selectedTrainOut = useSelector((state) => state.appState.trainOutbound);
  const selectedTrainRet = useSelector((state) => state.appState.trainReturn);
  const totalPrice = useSelector((state) => state.appState.totalPrice);
  const trainsPair = [selectedTrainOut, selectedTrainRet];

  const toSuccessPage = () => {
    history.push("./success");
  };

  return (
    <div>
      <Header headerType="select" />
      <ProgressBar />
      <div className="confirm__container">
        <div className="confirm__sidebar">
          <div className="confirm__sidebarTitle">Детали поездки</div>
          <div className="confirm__sidebarMiddle">
            <TripDetails
              icon={forward}
              title="Туда"
              data={selectedTrainOut}
              direction="forward"
            />
            {selectedTrainRet && (
              <TripDetails
                icon={back}
                title="Обратно"
                data={selectedTrainRet}
              />
            )}
            <PassengersDetails />
          </div>
          <div className="confirm__sidebarResult">
            Итог <span>{totalPrice}</span> <img src={rub} alt="rub" />
          </div>
        </div>
        <div className="confirm__main">
          <div className="confirm__ticket">
            <div className="ticket__title">Поезд</div>
            <MainTicketCard trains={trainsPair} />
          </div>
          <Passengers />
          <div className="confirm__pay">
            <div className="pay__title">Способ оплаты</div>
            <Payment />
          </div>
          <button className="confirm__button" onClick={toSuccessPage}>
            Подтвердить
          </button>
        </div>
      </div>
    </div>
  );
});

export default ConfirmPage;
