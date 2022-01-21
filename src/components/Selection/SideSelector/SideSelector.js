import "./sideSelector.css";
import coupe from "./FilterSeats/img/coupe.svg";
import platz from "./FilterSeats/img/platz.svg";
import seat from "./FilterSeats/img/seat.svg";
import lux from "./FilterSeats/img/lux.svg";
import wifi from "./FilterSeats/img/wifi.svg";
import express from "./FilterSeats/img/express.svg";
import forward from "./FilterTime/img/forward.svg";
import back from "./FilterTime/img/back.svg";

import CustomDatePicker from "../../Pickers/DatePicker/CustomDatePicker";
import FilterSeats from "./FilterSeats/FilterSeats";
import FilterPrice from "./FilterPrice/FilterPrice";
import FilterTime from "./FilterTime/FilterTime";

export default function SideSelector() {
  return (
    <div className="sideSelector__container">
      <CustomDatePicker pickerPlace="sidePicker" />
      <div className="selector__seatsFilter">
        <ul className="seatsFilter__list">
          <FilterSeats icon={coupe} text="Купе" />
          <FilterSeats icon={platz} text="Плацкарт" />
          <FilterSeats icon={seat} text="Сидячий" />
          <FilterSeats icon={lux} text="Люкс" />
          <FilterSeats icon={wifi} text="Wi-Fi" />
          <FilterSeats icon={express} text="Экспресс" />
        </ul>
      </div>
      <div className="selector__price">
        <FilterPrice minPrice={1500} maxPrice={7000} />
      </div>
      <div className="selector__timeTo">
        <FilterTime icon={forward} title="Туда" />
      </div>
      <div className="selector__timeBack">
        <FilterTime icon={back} title="Обратно" />
      </div>
    </div>
  );
}
