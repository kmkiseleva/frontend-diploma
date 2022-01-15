import "./destinationPicker.css";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import DestinationPickerInput from "./DestinationPickerInput";
import { ReactComponent as SwapBtn } from "../../../img/swapBtn.svg";

import { setArrival } from "../../../store/arrival";
import { setDeparture } from "../../../store/departure";

export default function DestinationPicker({ className }) {
  const dispatch = useDispatch();
  const departureState = useSelector((state) => state.departure);
  const arrivalState = useSelector((state) => state.arrival);

  // выбрать и установить пункт назначения или отправки
  const selectPoint = (value, point) => {
    if (point === "departure") {
      dispatch(setDeparture(value));
    } else {
      dispatch(setArrival(value));
    }
  };

  // поменять местами пункты назначения в инпутах
  const swapPoints = () => {
    dispatch(setArrival(departureState));
    dispatch(setDeparture(arrivalState));
  };

  // отправление (откуда)
  const departurePicker = (
    <DestinationPickerInput
      point="departure"
      defaultValue={departureState.value}
      onSelect={selectPoint}
    />
  );

  // прибытие (куда)
  const arrivalPicker = (
    <DestinationPickerInput
      point="arrival"
      defaultValue={arrivalState.value}
      onSelect={selectPoint}
    />
  );

  return (
    <div className="destination__container">
      <span className="destination__title">Направление</span>
      <div className="destination__input">
        <div className="departure__picker">{departurePicker}</div>
        <div className="swap__button">
          <Button
            shape="circle"
            className="destination__button"
            onClick={swapPoints}
          >
            <SwapBtn />
          </Button>
        </div>
        <div>{arrivalPicker}</div>
      </div>
    </div>
  );
}
