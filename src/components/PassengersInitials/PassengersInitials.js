import { memo } from "react";
import { Input } from "antd";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  appStateSetSurname,
  appStateSetName,
  appStateSetPatr,
} from "../../store/personalData";

const PassengersInitials = memo(() => {
  const dispatch = useDispatch();

  const [surname, setUserSurname] = useState("");
  const [name, setUserName] = useState("");
  const [patr, setUserPatr] = useState("");

  useEffect(() => {
    dispatch(appStateSetSurname(surname));
    dispatch(appStateSetName(name));
    dispatch(appStateSetPatr(patr));
  }, [dispatch, surname, name, patr]);

  return (
    <>
      <div className="passenger__initials">
        <div className="passengerInitials__block">
          <div className="passengerInput__title">Фамилия</div>
          <Input
            className="passengerInitials__input"
            placeholder="Иванов"
            value={surname}
            required
            onChange={(e) => setUserSurname(e.target.value)}
          />
        </div>
        <div className="passengerInitials__block">
          <div className="passengerInput__title">Имя</div>
          <Input
            className="passengerInitials__input"
            placeholder="Иван"
            value={name}
            required
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="passengerInitials__block">
          <div className="passengerInput__title">Отчество</div>
          <Input
            className="passengerInitials__input"
            placeholder="Иванович"
            value={patr}
            required
            onChange={(e) => setUserPatr(e.target.value)}
          />
        </div>
      </div>
    </>
  );
});

export default PassengersInitials;
