import { useHistory } from "react-router-dom";
import "./findTicketsBlock.css";
import DestinationPicker from "./Pickers/DestinationPicker/DestinationPicker";
import CustomDatePicker from "./Pickers/DatePicker/CustomDatePicker";

export default function FindTicketsBlock() {
  const history = useHistory();

  return (
    <div className="block__container">
      <div className="block__destination">
        <DestinationPicker />
      </div>
      <div className="block__date">
        <CustomDatePicker />
      </div>
      <div className="block__button">
        <button
          onClick={() => {
            history.push("/selectionPage");
          }}
        >
          Найти билеты
        </button>
      </div>
    </div>
  );
}
