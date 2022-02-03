import "./passengersPage.css";
import { Select, Input, Checkbox } from "antd";
import { Option } from "antd/lib/mentions";
import rub from "../../img/rub.png";
import addPlus from "../../img/add_plus.svg";
import addMinus from "../../img/add_minus.svg";
import addClose from "../../img/add_close.svg";

import Header from "../../components/Header/Header";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

import ButtonNext from "./../../components/Buttons/ButtonNext";

export default function PassengersPage() {
  return (
    <div>
      <Header headerType="select" />
      <ProgressBar />
      <div className="passengersPage__container">
        <div className="passengersPage__sidebar">
          <div className="passengersPage__sidebarTitle">Детали поездки</div>
          <div className="passengersPage__sidebarMiddle"></div>
          <div className="passengersPage__sidebarResult">
            Итог <span>7 760</span> <img src={rub} alt="rub" />
          </div>
        </div>
        <div className="passengersPage__main">
          <div className="passengersPage__passenger-full">
            <div className="passenger-full__header">
              <div className="passenger__minus">
                <button className="passenger__button">
                  <img src={addMinus} alt="add" />
                </button>
              </div>
              <div className="passenger__title">
                Пассажир <span>1</span>
              </div>
              <div className="passenger__close">
                <button className="passenger__closeButton">
                  <img src={addClose} alt="close" />
                </button>
              </div>
            </div>
            <div className="passenger-full__content">
              <div className="passenger-full__selectAge">
                <Select defaultValue="Взрослый">
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
                    required
                  />
                </div>
                <div className="passengerInitials__block">
                  <div className="passengerInput__title">Имя</div>
                  <Input
                    className="passengerInitials__input"
                    placeholder="Иван"
                    required
                  />
                </div>
                <div className="passengerInitials__block">
                  <div className="passengerInput__title">Отчество</div>
                  <Input
                    className="passengerInitials__input"
                    placeholder="Иванович"
                    required
                  />
                </div>
              </div>
              <div className="passenger__sex_bd">
                <div className="passenger__sex">
                  <div className="passengerInput__title">Пол</div>
                </div>
                <div className="passenger__bd">
                  <div className="passengerInput__title">Дата рождения</div>
                  <Input
                    placeholder="ДД/ММ/ГГ"
                    className="passengerBd__input"
                  />
                </div>
              </div>
              <div className="passengerCheckbox__block">
                <Checkbox />
                <div className="passengerCheckbox__title">
                  ограниченная подвижность
                </div>
              </div>
            </div>
            <div className="passenger__passportData"></div>
          </div>
          <div className="passengersPage__passenger">
            <div className="passenger__plus">
              <button className="passenger__button">
                <img src={addPlus} alt="add" />
              </button>
            </div>
            <div className="passenger__title">
              Пассажир <span>3</span>
            </div>
          </div>
          <div className="passengersPage__addPassenger">
            <div className="addPassenger__title">Добавить пассажира</div>
            <div className="addPassenger__plus">
              <button className="addPassenger__button">
                <img src={addPlus} alt="add" />
              </button>
            </div>
          </div>
          <ButtonNext />
        </div>
      </div>
    </div>
  );
}
