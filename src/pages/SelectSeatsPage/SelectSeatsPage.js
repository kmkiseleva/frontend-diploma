import "./selectSeatsPage.css";

import HeaderSelect from "./../../components/Header/HeaderSelect";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import SideSelector from "../../components/Selection/SideSelector/SideSelector";
import LastTickets from "../../components/Selection/LastTickets/LastTickets";

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
            <div className="informationBlock__header"></div>
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
            </div>
            <div className="informationBlock__carriageBlock">
              <div className="carriageBlock__header"></div>
              <div className="carriageBlock__details"></div>
              <div className="carriageBlock__insideImg"></div>
            </div>
          </div>
          <div className="seatsPage__informationTypeBlock"></div>
          <div className="seatsPage__buttonBlock">
            <button className="seatsPage__button">Далее</button>
          </div>
        </div>
      </div>
    </div>
  );
}
