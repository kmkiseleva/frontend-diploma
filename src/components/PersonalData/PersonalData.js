import { memo } from "react";
import { Input } from "antd";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./personalData.css";

import {
  setPersonalSurname,
  setPersonalName,
  setPersonalPatr,
  setPersonalPhone,
  setPersonalEmail,
} from "../../store/personalData";

const PersonalData = memo(() => {
  const dispatch = useDispatch();

  const surnameFromState = useSelector((state) => state.personalData.surname);
  const nameFromState = useSelector((state) => state.personalData.name);
  const patrFromState = useSelector((state) => state.personalData.patr);
  const phoneFromState = useSelector((state) => state.personalData.phone);
  const emailFromState = useSelector((state) => state.personalData.email);

  const [surname, setUserSurname] = useState(surnameFromState);
  const [name, setUserName] = useState(nameFromState);
  const [patr, setUserPatr] = useState(patrFromState);
  const [phone, setUserPhone] = useState(phoneFromState);
  const [email, setUserEmail] = useState(emailFromState);

  useEffect(() => {
    dispatch(setPersonalSurname(surname));
    dispatch(setPersonalName(name));
    dispatch(setPersonalPatr(patr));
    dispatch(setPersonalPhone(phone));
    dispatch(setPersonalEmail(email));
  }, [dispatch, surname, name, patr, phone, email]);

  return (
    <>
      <div>
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
      </div>
      <div className="mainInfoBody__phone">
        <div className="mainInfoBody__title">Контактный телефон</div>
        <Input
          className="payPage__input"
          placeholder="+79533221818"
          value={phone}
          required
          onChange={(e) => setUserPhone(e.target.value)}
        />
      </div>
      <div className="mainInfoBody__mail">
        <div className="mainInfoBody__title">E-mail</div>
        <Input
          className="payPage__input"
          placeholder="inbox@gmail.ru"
          value={email}
          required
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </div>
    </>
  );
});

export default PersonalData;
