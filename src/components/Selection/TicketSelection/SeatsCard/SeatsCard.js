import { memo, useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./seatsCard.css";

import { capitalize } from "./../../../../utils/capitalize";
import { sec2hhmm, secToDateTime } from "./../../../../utils/timing";
import {
  appStateResetTrainOutgoing,
  appStateResetTrainIncoming,
} from "../../../../store/appState";
import { trainSeatsReset } from "../../../../store/fetchSeats";

import TrainInfo from "./TrainInfo/TrainInfo";
import TicketsCount from "./TicketsCount/TicketsCount";
import CarriageTypeSection from "./CarriageType/CarriageTypesSection";
import CarriageNumber from "./CarriageNumber/CarriageNumber";
import CarriageServices from "./CarriageServices/CarriageServices";
import CarriageImg from "./CarriageImg/CarriageImg";

import arrowRight from "../../../../img/arrowRight.png";
import arrowLeft from "../../../../img/arrowLeft.png";
import rub from "../../../../img/rub.png";

const clearCarriage = {
  coach: {
    _id: 0,
    name: "",
    class_type: "first",
    have_wifi: false,
    have_air_conditioning: false,
    price: 0,
    top_price: 0,
    bottom_price: 0,
    side_price: 0,
    linens_price: 0,
    wifi_price: 0,
    is_linens_included: false,
    available_seats: 0,
    train: 0,
  },
  seats: [
    {
      index: 1,
      available: false,
    },
  ],
};

const testCarriage = {
  coach: {
    _id: 5,
    name: "",
    class_type: "second",
    have_wifi: false,
    have_air_conditioning: false,
    price: 0,
    top_price: 0,
    bottom_price: 0,
    side_price: 0,
    linens_price: 0,
    wifi_price: 0,
    is_linens_included: false,
    available_seats: 1,
    train: 0,
  },
  seats: [
    {
      index: 1,
      available: true,
    },
    {
      index: 2,
      available: false,
    },
    {
      index: 3,
      available: false,
    },
    {
      index: 4,
      available: false,
    },
    {
      index: 5,
      available: true,
    },
    {
      index: 6,
      available: true,
    },
  ],
};

const SeatsCard = memo(({ type, data }) => {
  const dispatch = useDispatch();
  const trainSeats = useSelector((state) => state.trainSeats.items);

  const trainId = data.departure.train._id;
  const pointA = capitalize(data.departure.from.city.name);
  const pointB = capitalize(data.departure.to.city.name);
  const stationA = capitalize(data.departure.from.railway_station_name);
  const stationB = capitalize(data.departure.to.railway_station_name);
  const timeA = secToDateTime(data.departure.from.datetime);
  const timeB = secToDateTime(data.departure.to.datetime);
  const duration = sec2hhmm(data.departure.duration);

  const [carriageType, setCarriageType] = useState("first");
  const [totalPrice, setTotalPrice] = useState(8080);
  const [activeCarriage, setActiveCarriage] = useState(testCarriage);
  const [ticketsCount, setTicketsCount] = useState({
    adultCount: 0,
    childrenCount: 0,
    toddlerCount: 0,
  });

  const anotherTrain = (arg) => {
    if ((arg = "outgoing")) {
      dispatch(appStateResetTrainOutgoing());
    } else if (arg === "incoming") {
      dispatch(appStateResetTrainIncoming);
    }
    dispatch(trainSeatsReset());
  };

  const chooseCarriageType = (val) => {
    setCarriageType(val);
  };

  const selectSeats = (arg) => {
    console.log("SELECT SEATS", arg, ticketsCount);
  };

  const toggleCarriage = (number) => {
    const newCarriage = trainSeats.find((coach) => coach.coach._id === number);
    if (newCarriage) {
      setActiveCarriage(newCarriage);
    }
  };

  useEffect(() => {
    const firstCoach = trainSeats
      .filter((coach) => coach.coach.class_type === carriageType)
      .find((coach) => coach.coach._id);
    if (firstCoach) {
      setActiveCarriage(firstCoach);
    }
  }, [carriageType, trainSeats]);

  const getTicketsCount = useCallback(
    (adultCount, childrenCount, toddlerCount) => {
      setTicketsCount({ adultCount, childrenCount, toddlerCount });
    },
    []
  );

  return (
    <div className="seatsPage__informationBlock">
      <div className="informationBlock__header">
        <div className="informationBlock__arrowImg">
          {type === "outgoing" && <img src={arrowRight} alt="arrowRight" />}
          {type === "incoming" && <img src={arrowLeft} alt="arrowLeft" />}
        </div>
        <div className="informationBlock__button">
          <button
            className="button__chooseTrain"
            onClick={() => anotherTrain(type)}
          >
            Выбрать другой поезд
          </button>
        </div>
      </div>
      <TrainInfo
        info={{
          type,
          trainId,
          pointA,
          stationA,
          timeA,
          pointB,
          stationB,
          timeB,
          duration,
        }}
      />
      <TicketsCount getTicketsCount={getTicketsCount} />
      <CarriageTypeSection
        data={{
          have_first_class: data.departure.have_first_class,
          have_second_class: data.departure.have_second_class,
          have_third_class: data.departure.have_third_class,
          have_fourth_class: data.departure.have_fourth_class,
        }}
        chooseCarriageType={chooseCarriageType}
        activeType={carriageType}
      />

      {carriageType !== undefined && (
        <div className="informationBlock__carriageBlock">
          <div className="carriageBlock__header">
            <div className="carriageBlock__carriages">
              Вагоны <span className="active-carriage">07</span> <span>09</span>
            </div>
            <div className="carriageBlock__subtitle">
              Нумерация вагонов начинается с головы поезда
            </div>
          </div>
          <div className="carriageBlock__details">
            <div className="carriage__number">
              <span>07</span> <br /> вагон
            </div>
            <div className="carriage__seatsInfo">
              <div className="seatsInfo__block">
                <div className="seatsInfo__title">
                  Места <span>11</span>
                </div>
                <div className="seatsInfo__seats">
                  Верхние <span>3</span>
                </div>
                <div className="seatsInfo__seats">
                  Нижние <span>8</span>
                </div>
              </div>
              <div className="seatsInfo__block">
                <div className="seatsInfo__title">Стоимость</div>
                <div className="seatsInfo__price">
                  2920 <img src={rub} alt="rub" />
                </div>
                <div className="seatsInfo__price">
                  3530 <img src={rub} alt="rub" />
                </div>
              </div>
              <CarriageServices data={activeCarriage} />
            </div>
          </div>
          <div className="carriage__popup">
            <span>11</span> человек выбирают места в этом поезде
          </div>
        </div>
      )}

      <CarriageImg activeCarriage={activeCarriage} selectSeats={selectSeats} />

      {totalPrice !== 0 && (
        <>
          <div className="totalPrice__container">
            <div className="totalPrice__number">{totalPrice}</div>
            <div className="totalPrice__rub">
              <img src={rub} alt="rub" />
            </div>
          </div>
        </>
      )}
    </div>
  );
});

export default SeatsCard;
