import "./selectSeatsPage.css";

import HeaderSelect from "./../../components/Header/HeaderSelect";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import SideSelector from "../../components/Selection/SideSelector/SideSelector";
import LastTickets from "../../components/Selection/LastTickets/LastTickets";

import arrowRight from "../../img/arrowRight.png";
import arrowLeft from "../../img/arrowLeft.png";
import sitting from "../../img/sitting.png";
import platz from "../../img/platz.png";
import compartment from "../../img/compartment.png";
import lux from "../../img/lux.png";
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
            <div className="informationBlock__train"></div>
            <div className="informationBlock__seatsCount">
              <div className="seatsCount__title">Количество билетов</div>
              <div className="seatsCount__blocks">
                <div className="seatsCount__block more-seats">
                  <div className="countBlock__field">Взрослых - 2</div>
                  <div className="countBlock__info">
                    Можно добавить еще 3 пассажиров
                  </div>
                </div>
                <div className="seatsCount__block one-seat">
                  <div className="countBlock__field">Детских - 1</div>
                  <div className="countBlock__info one-seat">
                    Можно добавить еще 3 детей до 10 лет. Свое место в вагоне,
                    как у взрослых, но дешевле в среднем на 50-65%
                  </div>
                </div>
                <div className="seatsCount__block no-seats">
                  <div className="countBlock__field">
                    Детских "без места" - 0
                  </div>
                </div>
              </div>
            </div>
            <div className="informationBlock__type">
              <div className="type__title">Тип вагона</div>
              <div className="type__types">
                <div className="type__block">
                  <img src={sitting} alt="seat" />
                  <div className="type__name">Сидячий</div>
                </div>
                <div className="type__block">
                  <img src={platz} alt="seat" />
                  <div className="type__name">Плацкарт</div>
                </div>
                <div className="type__block active">
                  <img src={compartment} alt="seat" />
                  <div className="type__name active">Купе</div>
                </div>
                <div className="type__block">
                  <img src={lux} alt="seat" />
                  <div className="type__name">Люкс</div>
                </div>
              </div>
            </div>
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
            <div className="informationBlock__train"></div>
            <div className="informationBlock__seatsCount">
              <div className="seatsCount__title">Количество билетов</div>
              <div className="seatsCount__blocks">
                <div className="seatsCount__block more-seats">
                  <div className="countBlock__field">Взрослых - 2</div>
                  <div className="countBlock__info">
                    Можно добавить еще 3 пассажиров
                  </div>
                </div>
                <div className="seatsCount__block no-seats">
                  <div className="countBlock__field">Детских - 0</div>
                </div>
                <div className="seatsCount__block no-seats">
                  <div className="countBlock__field">
                    Детских "без места" - 0
                  </div>
                </div>
              </div>
            </div>
            <div className="informationBlock__type">
              <div className="type__title">Тип вагона</div>
              <div className="type__types">
                <div className="type__block">
                  <img src={sitting} alt="seat" />
                  <div className="type__name">Сидячий</div>
                </div>
                <div className="type__block">
                  <img src={platz} alt="seat" />
                  <div className="type__name">Плацкарт</div>
                </div>
                <div className="type__block">
                  <img src={compartment} alt="seat" />
                  <div className="type__name">Купе</div>
                </div>
                <div className="type__block">
                  <img src={lux} alt="seat" />
                  <div className="type__name">Люкс</div>
                </div>
              </div>
            </div>
          </div>
          <div className="seatsPage__buttonBlock">
            <button className="seatsPage__button">Далее</button>
          </div>
        </div>
      </div>
    </div>
  );
}
