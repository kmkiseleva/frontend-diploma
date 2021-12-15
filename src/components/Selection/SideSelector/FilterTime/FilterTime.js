import { useState, useRef } from "react";
import "./filterTime.css";
import { Collapse, Slider } from "antd";

import { ReactComponent as Plus } from "./img/plus.svg";
import { ReactComponent as Minus } from "./img/minus.svg";

const { Panel } = Collapse;

export default function FilterTime({ icon, title }) {
  const [range, setRange] = useState([0, 1440]);
  const min = 0;
  const max = 1440;
  const forward = useRef(null);

  const onChangeRange = (value) => {
    if (typeof value === "number") {
      const minVal = 0;
      const maxVal = max > value ? value : max;
      const setValue = [minVal, maxVal];
      setRange(setValue);
    } else {
      const minVal = min < value[0] ? value[0] : min;
      const maxVal = max > value[1] ? value[1] : max;
      const setValue = [minVal, maxVal];
      setRange(setValue);
    }
  };

  const formatter = (value) => {
    if (typeof value === "undefined") {
      return "";
    }
    const hour = Math.floor(value / 60);
    const minutes = value - hour * 60;

    return `${`0${hour}`.slice(-2)}:${`0${minutes}`.slice(-2)}`;
  };

  return (
    <div className="time__container">
      <Collapse
        ghost
        expandIconPosition="right"
        expandIcon={({ isActive }) => (isActive ? <Minus /> : <Plus />)}
      >
        <Panel
          header={
            <div className="time__header">
              <div className="header__icon">
                <img src={icon} alt="arrow" />
              </div>
              <div className="header__title">{title}</div>
            </div>
          }
          key={1}
        >
          <div className="time__panel" ref={forward}>
            <div className="time__subtitle timeTo">Время отбытия</div>
            <Slider
              max={max}
              min={min}
              range={{ draggableTrack: true }}
              step={30}
              defaultValue={range}
              tooltipVisible
              tooltipPlacement="bottom"
              tipFormatter={(value) => formatter(value)}
              onChange={(value) => onChangeRange(value)}
              getTooltipPopupContainer={() => forward.current}
            />
            <div className="time__subtitle timeBack">Время прибытия</div>
            <Slider
              max={max}
              min={min}
              range={{ draggableTrack: true }}
              step={30}
              defaultValue={range}
              tooltipVisible
              tooltipPlacement="bottom"
              tipFormatter={(value) => formatter(value)}
              onChange={(value) => onChangeRange(value)}
              getTooltipPopupContainer={() => forward.current}
            />
          </div>
        </Panel>
      </Collapse>
    </div>
  );
}
