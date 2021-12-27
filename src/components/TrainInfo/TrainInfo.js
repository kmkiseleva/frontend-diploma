import "./trainInfo.css";
import arrowLight from "../../img/arrow_light.png";
import arrowDark from "../../img/arrow_dark.png";
import arrowTo from "../../img/arrow_to.png";
import clock from "../../img/clock.png";
import trainAva from "../../img/little-train.png";

export default function TrainInfo() {
  return (
    <div className="informationBlock__train">
      <div className="train__exactInfo">
        <div className="exactInfo__trainAva">
          <img src={trainAva} alt="train" />
        </div>
        <div className="exactInfo__trainDetails">
          <div className="exactInfo__trainNumber">116C</div>
          <div className="exactInfo__trainDirections">
            <div className="trainDirections__from">
              Адлер <img src={arrowLight} alt="arrow" />
            </div>
            <div className="trainDirections__to">
              Москва <img src={arrowDark} alt="arrow" />
            </div>
            <div className="trainDirections__to">Санкт-Петербург</div>
          </div>
        </div>
      </div>
      <div className="train__destinationsInfo">
        <div className="mainCard__middle">
          <div className="middle__row">
            <div className="row__point">
              <div className="row__time">00:10</div>
              <div className="row__city">Москва</div>
              <div className="row__station">Курский вокзал</div>
            </div>
            <div className="row__direction destinationsInfo">
              <div className="direction__arrow">
                <img src={arrowTo} alt="arrow" />
              </div>
            </div>
            <div className="row__point">
              <div className="row__time">09:52</div>
              <div className="row__city">Санкт-Петербург</div>
              <div className="row__station">Ладожский вокзал</div>
            </div>
          </div>
        </div>
      </div>
      <div className="train__travelTimeInfo">
        <div className="travelTimeInfo__img">
          <img src={clock} alt="clock" />
        </div>
        <div className="travelTimeInfo__time">
          <span>9</span> часов <br />
          <span>42</span> минуты
        </div>
      </div>
    </div>
  );
}
