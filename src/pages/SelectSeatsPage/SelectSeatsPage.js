import "./selectSeatsPage.css";

import HeaderSelect from "./../../components/Header/HeaderSelect";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import SideSelector from "../../components/Selection/SideSelector/SideSelector";
import LastTickets from "../../components/Selection/LastTickets/LastTickets";
import TrainInfo from "../../components/TrainInfo/TrainInfo";
import TicketsCount from "../../components/TicketsCount/TicketsCount";
import CarriageType from "../../components/CarriageType/CarriageType";
import Carriage from "./../../components/Carriage/Carriage";

import arrowRight from "../../img/arrowRight.png";
import arrowLeft from "../../img/arrowLeft.png";

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
            <Carriage />
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
