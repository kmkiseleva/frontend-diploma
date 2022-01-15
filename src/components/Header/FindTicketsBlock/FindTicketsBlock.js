import "./findTicketsBlock.css";
import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DestinationPicker from "../../Pickers/DestinationPicker/DestinationPicker";
import CustomDatePicker from "../../Pickers/DatePicker/CustomDatePicker";

import { fetchRoutes } from "../../../store/fetchRoutes";

export default function FindTicketsBlock() {
  const history = useHistory();
  const dispatch = useDispatch();

  const params = useSelector((state) => state.params);

  const findTickets = () => {
    dispatch(fetchRoutes(params));
    history.push("/selection");
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
