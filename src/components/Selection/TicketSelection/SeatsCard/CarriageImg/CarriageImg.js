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
  const { seats, coach } = activeCarriage.activeCarriage;
  const coachId = coach._id;
  const carriageType = coach.class_type;

  const onSeatSelect = (idx) => {
    selectSeats({ coachId, seatId: idx });
  };

  return (
    <div className="carriageBlock__root">
      <img src={second} alt="inside" />
      <div className="schemeLayout">
        <div className="carriageNumber">{coachId}</div>
        <div className="scheme">
          <div className={carriageType}>
            {seats.map((seat) => (
              <button
                type="button"
                key={seat.index}
                className={("seat", `seat${seat.index}`, "selected")}
                disabled={!seat.available}
                onClick={() => onSeatSelect(seat.index)}
              >
                {seat.index}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default CarriageImg;
