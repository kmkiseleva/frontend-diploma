import { memo } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./passengersPage.css";
import "./reantd.css";

import rub from "../../img/rub.png";
import forward from "../../img/forward.svg";
import back from "../../img/back.svg";

import Header from "../../components/Header/Header";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import TripDetails from "../../components/TripDetails/TripDetails";
import PassengersDetails from "../../components/PassengersDetails/PassengersDetails";
import PassengerCollapse from "./../../components/PassengerCollapse/PassengerCollapse";
import ButtonNext from "./../../components/Buttons/ButtonNext";

import appState, { appStateSetProgress } from "../../store/appState";

const PassengersPage = memo(() => {
  const dispatch = useDispatch();
  const history = useHistory();

  const counter = useSelector((state) => state.passengersData.counter);
  const passengers = useSelector((state) => state.passengersData.items);
  const totalPrice = useSelector((state) => state.appState.totalPrice);

  const toPayPage = () => {
    dispatch(appStateSetProgress(2));
    history.push("./pay");
  };

  return (
    <div className="passengersPage__body">
      <Header headerType="select" />
      <ProgressBar />
      <div className="passengersPage__container">
        <div className="passengersPage__sidebar">
          <div className="passengersPage__sidebarTitle">Детали поездки</div>
          <div className="passengersPage__sidebarMiddle">
            <TripDetails
              icon={forward}
              title="Туда"
              date="30.08.2018"
              direction="forward"
            />
            <TripDetails icon={back} title="Обратно" date="09.09.2018" />
            <PassengersDetails />
          </div>
          <div className="passengersPage__sidebarResult">
            Итог <span>{totalPrice}</span> <img src={rub} alt="rub" />
          </div>
        </div>

        <div className="passengersPage__main">
          {counter.map((el) => (
            <PassengerCollapse
              key={el}
              passengerNumber={el}
              passenger={passengers[el - 1]}
            />
          ))}
          <ButtonNext text="Далее" onClick={toPayPage} />
        </div>
      </div>
    </div>
  );
});

export default PassengersPage;
