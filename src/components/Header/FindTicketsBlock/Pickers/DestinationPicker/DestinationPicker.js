import "./destinationPicker.css";
import { Button } from "antd";
import DestinationPickerInput from "./DestinationPickerInput";
import { ReactComponent as SwapBtn } from "../img/swapBtn.svg";

export default function DestinationPicker() {
  return (
    <div className="destination__container">
      <span className="destination__title">Направление</span>
      <div className="destination__input">
        <DestinationPickerInput placeholder="Откуда" />
        <Button
          shape="circle"
          s
          className="destination__button"
          onClick={() => {}}
        >
          <SwapBtn />
        </Button>
        <DestinationPickerInput placeholder="Куда" />
      </div>
    </div>
  );
}
