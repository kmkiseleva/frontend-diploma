import "./findTicketsBlock.css";
import React from "react";
import { useHistory } from "react-router-dom";
import DestinationPicker from "../../Pickers/DestinationPicker/DestinationPicker";
import CustomDatePicker from "../../Pickers/DatePicker/CustomDatePicker";

export default function FindTicketsBlock() {
  const history = useHistory();

  const findTickets = () => {
    history.push("/selectionPage");
  };

  return (
    <div className="block__container">
      <div className="block__destination">
        <DestinationPicker />
      </div>
      <div className="block__date">
        <CustomDatePicker />
      </div>
      <div className="block__button">
        <button onClick={findTickets}>Найти билеты</button>
      </div>
    </div>
  );
}
