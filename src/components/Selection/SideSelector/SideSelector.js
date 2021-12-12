import "./sideSelector.css";
import coupe from "./FilterSeats/img/coupe.svg";
import platz from "./FilterSeats/img/platz.svg";
import seat from "./FilterSeats/img/seat.svg";
import lux from "./FilterSeats/img/lux.svg";
import wifi from "./FilterSeats/img/wifi.svg";
import express from "./FilterSeats/img/express.svg";

import DatePickerInput from "./DatePicker/DatePickerInput";
import FilterSeats from "./FilterSeats/FilterSeats";
import FilterPrice from "./FilterPrice/FilterPrice";

export default function SideSelector() {
  return (
    <div className="sideSelector__container">
      <div className="selector__datePickers">
        <div className="datePickers__title">Дата поездки</div>
        <DatePickerInput />
        <div className="datePickers__title">Дата возвращения</div>
        <DatePickerInput />
      </div>
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
      <div className="selector__timeTo"></div>
      <div className="selector__timeBack"></div>
    </div>
  );
}
