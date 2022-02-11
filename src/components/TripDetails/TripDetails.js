import { memo, useRef } from "react";
import "./tripDetails.css";
import { Collapse } from "antd";

import { ReactComponent as Plus } from "./img/plus.svg";
import { ReactComponent as Minus } from "./img/minus.svg";

const { Panel } = Collapse;

const TripDetails = memo(({ icon, title, date }) => {
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
          <div className="tripDetails__panel" ref={forward}></div>
        </Panel>
      </Collapse>
    </div>
  );
});

export default TripDetails;
