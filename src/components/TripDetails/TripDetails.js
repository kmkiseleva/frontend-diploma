import { memo, useRef } from "react";
import "./tripDetails.css";
import { Collapse } from "antd";

import { ReactComponent as Plus } from "./img/plus.svg";
import { ReactComponent as Minus } from "./img/minus.svg";

import arrowTo from "../../img/arrow_to.png";
import arrowBack from "../../img/arrow_back.png";

const { Panel } = Collapse;

const TripDetails = memo(({ icon, title, date, direction }) => {
  const forward = useRef(null);

  return (
    <div className="tripDetails__container">
      <Collapse
        ghost
        expandIconPosition="right"
        expandIcon={({ isActive }) => (isActive ? <Minus /> : <Plus />)}
      >
        <Panel
          header={
            <div className="tripDetails__header">
              <div className="tripDetails__icon">
                <img src={icon} alt="arrow" />
              </div>
              <div className="tripDetails__title">{title}</div>
              <div className="tripDetails__date">{date}</div>
            </div>
          }
          key={1}
        >
          <div className="tripDetails__panel" ref={forward}>
            <div className="tripDetails__row">
              <div className="tripDetails__rowTitle">№ Поезда</div>
              <div className="tripDetails__trainValue">116С</div>
            </div>
            <div className="tripDetails__row">
              <div className="tripDetails__rowTitle">Название</div>
              <div className="tripDetails__rowValue">
                Адлер <br /> Санкт-Петербург
              </div>
            </div>
            <div className="tripDetails__timing">
              <div className="tripDetails__timingFrom">
                <div className="timing__time">00:10</div>
                <div className="timing__date">30.08.2018</div>
              </div>
              <div className="tripDetails__direction">
                <div className="tripDetails__directionTime">9:42</div>
                <div className="direction__arrow">
                  {direction && <img src={arrowTo} alt="arrow" />}
                  {!direction && <img src={arrowBack} alt="arrow" />}
                </div>
              </div>
              <div className="tripDetails__timingTo">
                <div className="timing__time">09:52</div>
                <div className="timing__date">31.08.2018</div>
              </div>
            </div>
            <div className="tripDetails__stations">
              <div className="tripDetails__stationsFrom">
                <div className="stations__city">Москва</div>
                <div className="stations__station">Курский вокзал</div>
              </div>
              <div className="tripDetails__stationsTo">
                <div className="stations__city">Санкт-Петербург</div>
                <div className="stations__station">Ладожский вокзал</div>
              </div>
            </div>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
});

export default TripDetails;
