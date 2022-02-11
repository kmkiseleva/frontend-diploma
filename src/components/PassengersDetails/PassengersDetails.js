import { memo, useRef } from "react";
import "./passengersDetails.css";
import { Collapse } from "antd";

import { ReactComponent as Plus } from "./img/plus.svg";
import { ReactComponent as Minus } from "./img/minus.svg";
import passeng_av from "../../img/passeng_av.svg";
import rub from "../../img/rub.png";

const { Panel } = Collapse;

const PassengersDetails = memo(() => {
  const forward = useRef(null);

  return (
    <div className="passengDetails__container">
      <Collapse
        ghost
        expandIconPosition="right"
        expandIcon={({ isActive }) => (isActive ? <Minus /> : <Plus />)}
      >
        <Panel
          header={
            <div className="passengDetails__header">
              <div className="passengDetails__icon">
                <img src={passeng_av} alt="arrow" />
              </div>
              <div className="passengDetails__title">Пассажиры</div>
            </div>
          }
          key={1}
        >
          <div className="passengDetails__panel" ref={forward}>
            <div className="passengDetails__row">
              <div className="passengDetails__age">
                <span>2</span> Взрослых{" "}
              </div>
              <div className="passengDetails__price">
                <span>5 840</span> <img src={rub} alt="rub" />
              </div>
            </div>
            <div className="passengDetails__row">
              <div className="passengDetails__age">
                <span>1</span> Ребенок{" "}
              </div>
              <div className="passengDetails__price">
                <span>1 920</span> <img src={rub} alt="rub" />
              </div>
            </div>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
});

export default PassengersDetails;