import { memo } from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./passengersData.css";
import { Select, Input, Checkbox } from "antd";
import { Option } from "antd/lib/mentions";

import {
  setPassengerSurname,
  setPassengerName,
  setPassengerPatr,
  setPassengerSex,
} from "../../store/passengersData";

const PassengersData = memo(() => {
  const dispatch = useDispatch();

  const [age, setUserAge] = useState("");
  const [surname, setUserSurname] = useState("");
  const [name, setUserName] = useState("");
  const [patr, setUserPatr] = useState("");
  const [sex, setUserSex] = useState("");
  const [bd, setUserBd] = useState("");
  const [dysmobility, setUserDysmobility] = useState(false);
  const [document, setUserDocument] = useState("");

  useEffect(() => {
    dispatch(setPassengerSurname(surname));
    dispatch(setPassengerName(name));
    dispatch(setPassengerPatr(patr));
    dispatch(setPassengerSex(sex));
  }, [dispatch, age, surname, name, patr, sex, bd, dysmobility, document]);

  return (
    <>
      <div className="passenger-full__content">
        <div className="passenger-full__selectAge">
          <Select
            className="selectAge__container"
            dropdownClassName={("selectAge__dropdown", "selectAge")}
            defaultValue="Взрослый"
            allowClear={false}
          >
            <Option value="adult">Взрослый</Option>
            <Option value="child">Детский</Option>
          </Select>
        </div>
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
        <div className="passenger__sex_bd">
          <div className="passenger__sex">
            <div className="passengerInput__title">Пол</div>
            <div className="passengerSex__buttons">
              <button
                className="passengerSex__button male"
                onClick={setUserSex("male")}
              >
                М
              </button>
              <button
                className="passengerSex__button female active"
                onClick={setUserSex("female")}
              >
                Ж
              </button>
            </div>
          </div>
          <div className="passenger__bd">
            <div className="passengerInput__title">Дата рождения</div>
            <Input
              placeholder="17.02.1985"
              className="passengerBd__input"
              value={bd}
              required
              onChange={(e) => setUserBd(e.target.value)}
            />
          </div>
        </div>
        <div className="passengerCheckbox__block">
          <Checkbox
            className="passengerCheckbox__title"
            onChange={() => setUserDysmobility(!dysmobility)}
            checked={dysmobility}
          >
            ограниченная подвижность
          </Checkbox>
        </div>
      </div>
      <div className="passenger__passportData">
        <div className="passportData__block">
          <div className="passengerInput__title">Тип документа</div>
          <Select defaultValue="Паспорт РФ">
            <Option value="passport">Паспорт РФ</Option>
            <Option value="certificate">Свидетельство о рождении</Option>
          </Select>
        </div>
        <div className="passportData__block">
          <div className="passengerInput__title">Серия</div>
          <Input placeholder="__ __ __ __" className="passport__input" />
        </div>
        <div className="passportData__block">
          <div className="passengerInput__title">Номер</div>
          <Input placeholder="__ __ __ __ __ __" className="passport__input" />
        </div>
      </div>
    </>
  );
});

export default PassengersData;
