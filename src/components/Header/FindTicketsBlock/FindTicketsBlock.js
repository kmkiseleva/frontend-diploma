import "./findTicketsBlock.css";
import React, { useMemo } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoutes } from "../../../store/fetchRoutes";
import DestinationPicker from "../../Pickers/DestinationPicker/DestinationPicker";
import CustomDatePicker from "../../Pickers/DatePicker/CustomDatePicker";

export default function FindTicketsBlock() {
  const history = useHistory();
  const dispatch = useDispatch();
  // eslint-disable-next-line no-underscore-dangle
  const departureId = useSelector((state) => state.departure.city._id);
  // eslint-disable-next-line no-underscore-dangle
  const arrivalId = useSelector((state) => state.arrival.city._id);
  const dateForward = useSelector((state) => state.dateForward);
  const dateBackward = useSelector((state) => state.dateBackward);

  const params = useMemo(
    () => ({
      departureId,
      arrivalId,
      dateForward,
      dateBackward,
    }),
    [departureId, arrivalId, dateForward, dateBackward]
  );

  const findTickets = () => {
    dispatch(fetchRoutes(params));
    history.push("/select");
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
