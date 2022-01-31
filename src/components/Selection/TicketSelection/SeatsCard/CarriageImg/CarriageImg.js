import { memo } from "react";
import "./carriageImg.css";

import first from "./img/1.png";
import second from "./img/2.png";
import third from "./img/3.png";
import fourth from "./img/4.png";

const scheme = {
  first,
  second,
  third,
  fourth,
};

const CarriageImg = memo((activeCarriage, selectSeats) => {
  // const {
  //   seats,
  //   coach: { class_type: carriageType, _id: coachId },
  // } = activeCarriage;

  // const onSeatSelect = (idx) => {
  //   selectSeats({ coachId, seatId: idx });
  // };

  return (
    <div className="carriageBlock__insideImg">
      <img src={first} alt="inside" />
    </div>
  );
});

export default CarriageImg;
