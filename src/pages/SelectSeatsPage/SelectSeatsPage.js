import "./selectSeatsPage.css";

import HeaderSelect from "./../../components/Header/HeaderSelect";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import SideSelector from "../../components/Selection/SideSelector/SideSelector";
import LastTickets from "../../components/Selection/LastTickets/LastTickets";
import TrainInfo from "../../components/TrainInfo/TrainInfo";
import TicketsCount from "../../components/TicketsCount/TicketsCount";
import CarriageType from "../../components/CarriageType/CarriageType";

import arrowRight from "../../img/arrowRight.png";
import arrowLeft from "../../img/arrowLeft.png";
import imgInside from "../../img/imageInside.png";

export default function SelectSeatsPage() {
  return (
    <div>
      <HeaderSelect />
      <ProgressBar />
      <div className="selection__container">
        <div className="selection__sidebar">
          <SideSelector />
          <LastTickets />
        </div>
        <div className="selection__main">
          <div className="seatsPage__title">Выбор мест</div>
          <div className="seatsPage__informationBlock">
            <div className="informationBlock__header">
              <div className="informationBlock__arrowImg">
                <img src={arrowRight} alt="arrowRight" />
              </div>
              <div className="informationBlock__button">
                <button className="button__chooseTrain">
                  Выбрать другой поезд
                </button>
              </div>
            </div>
            <TrainInfo />
            <TicketsCount />
            <CarriageType />
            <div className="informationBlock__carriageBlock">
              <div className="carriageBlock__header">
                <div className="carriageBlock__carriages">
                  Вагоны <span className="active-carriage">07</span>{" "}
                  <span>09</span>
                </div>
                <div className="carriageBlock__subtitle">
                  Нумерация вагонов начинается с головы поезда
                </div>
              </div>
              <div className="carriageBlock__details">
                <div className="carriage__number">
                  <span>07</span> <br /> вагон
                </div>
              </div>
              <div className="carriageBlock__insideImg">
                <img src={imgInside} alt="inside" />
              </div>
            </div>
          </div>
          <div className="seatsPage__informationTypeBlock">
            <div className="informationBlock__header back">
              <div className="informationBlock__arrowImg">
                <img src={arrowLeft} alt="arrowRight" />
              </div>
              <div className="informationBlock__button">
                <button className="button__chooseTrain">
                  Выбрать другой поезд
                </button>
              </div>
            </div>
            <TrainInfo />
            <TicketsCount />
            <CarriageType />
          </div>
          <div className="seatsPage__buttonBlock">
            <button className="seatsPage__button">Далее</button>
          </div>
        </div>
      </div>
    </div>
  );
}
