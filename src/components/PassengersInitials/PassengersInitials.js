import { memo } from "react";
import { Input } from "antd";

const PassengersInitials = memo(({ surname, name, patr }) => {
  return (
    <>
      <div className="passenger__initials">
        <div className="passengerInitials__block">
          <div className="passengerInput__title">Фамилия</div>
          <Input
            className="passengerInitials__input"
            placeholder="Иванов"
            defaultValue={surname}
            required
          />
        </div>
        <div className="passengerInitials__block">
          <div className="passengerInput__title">Имя</div>
          <Input
            className="passengerInitials__input"
            placeholder="Иван"
            defaultValue={name}
            required
          />
        </div>
        <div className="passengerInitials__block">
          <div className="passengerInput__title">Отчество</div>
          <Input
            className="passengerInitials__input"
            placeholder="Иванович"
            defaultValue={patr}
            required
          />
        </div>
      </div>
    </>
  );
});

export default PassengersInitials;
