import "./filterPrice.css";
import { Slider } from "antd";

export default function FilterPrice({ minPrice, maxPrice }) {
  const min = minPrice;
  const max = maxPrice;

  return (
    <div className="filterPrice__container">
      <div className="filterPrice__title">Стоимость</div>
      <div className="filterPrice__limits">
        <span>от</span>
        <span>до</span>
      </div>
      <div className="filterPrice__slider">
        <Slider
          max={max}
          min={min}
          range={{ draggableTrack: true }}
          step={10}
          // defaultValue={range}
          tooltipVisible
          tooltipPlacement="bottom"
          // onChange={(value: number | Range) => onChangeRange(value)}
        />
      </div>
    </div>
  );
}
