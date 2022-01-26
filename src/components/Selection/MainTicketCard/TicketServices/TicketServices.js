import { memo } from "react";
import "./ticketServices.css";
import wifi from "../img/wifi.png";
import express from "../img/express.png";
import cup from "../img/cup.png";

const TicketServices = memo(({ services }) => {
  return (
    <div className="seats__options">
      <div className="seatsOptions__icon">
        <img src={wifi} alt="wifi" />
      </div>
      <div className="seatsOptions__icon">
        <img src={express} alt="express" />
      </div>
      <div className="seatsOptions__icon">
        <img src={cup} alt="cup" />
      </div>
    </div>
  );
});

export default TicketServices;
