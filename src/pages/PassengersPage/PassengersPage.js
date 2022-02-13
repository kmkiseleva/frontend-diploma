import { memo } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./passengersPage.css";
import "./reantd.css";
import { Collapse, Select, Input, Checkbox } from "antd";
import { Option } from "antd/lib/mentions";

import rub from "../../img/rub.png";
import forward from "../../img/forward.svg";
import back from "../../img/back.svg";

import { ReactComponent as Plus } from "../../img/add_plus_bordered.svg";
import { ReactComponent as Minus } from "../../img/add_minus.svg";

import Header from "../../components/Header/Header";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import TripDetails from "../../components/TripDetails/TripDetails";
import PassengersDetails from "../../components/PassengersDetails/PassengersDetails";
import ButtonNext from "./../../components/Buttons/ButtonNext";
import PassengersInitials from "../../components/PassengersInitials/PassengersInitials";

import { appStateSetProgress } from "../../store/appState";

const { Panel } = Collapse;

const PassengersPage = memo(() => {
  const dispatch = useDispatch();
  const history = useHistory();

  const toPayPage = () => {
    dispatch(appStateSetProgress(2));
    history.push("./pay");
  };

  return (
    <div className="passengersPage__body">
      <Header headerType="select" />
      <ProgressBar />
      <div className="passengersPage__container">
        <div className="passengersPage__sidebar">
          <div className="passengersPage__sidebarTitle">Детали поездки</div>
          <div className="passengersPage__sidebarMiddle">
            <TripDetails
              icon={forward}
              title="Туда"
              date="30.08.2018"
              direction="forward"
            />
            <TripDetails icon={back} title="Обратно" date="09.09.2018" />
            <PassengersDetails />
          </div>
          <div className="passengersPage__sidebarResult">
            Итог <span>7 760</span> <img src={rub} alt="rub" />
          </div>
        </div>

        <div className="passengersPage__main">
          <div className="passengersPage__collapse">
            <Collapse
              ghost
              expandIconPosition="left"
              expandIcon={({ isActive }) => (isActive ? <Minus /> : <Plus />)}
            >
              <Panel
                header={
                  <div className="passenger-full__header">
                    <div className="passenger__title">
                      Пассажир <span>1</span>
                    </div>
                  </div>
                }
                key={1}
              >
                <div className="passengersPage__passenger-full">
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
                    <PassengersInitials />
                    <div className="passenger__sex_bd">
                      <div className="passenger__sex">
                        <div className="passengerInput__title">Пол</div>
                        <div className="passengerSex__buttons">
                          <button className="passengerSex__button male">
                            М
                          </button>
                          <button className="passengerSex__button female active">
                            Ж
                          </button>
                        </div>
                      </div>
                      <div className="passenger__bd">
                        <div className="passengerInput__title">
                          Дата рождения
                        </div>
                        <Input
                          placeholder="17.02.1985"
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
                  <div className="passenger__passportData">
                    <div className="passportData__block">
                      <div className="passengerInput__title">Тип документа</div>
                      <Select defaultValue="Паспорт РФ">
                        <Option value="passport">Паспорт РФ</Option>
                        <Option value="certificate">
                          Свидетельство о рождении
                        </Option>
                      </Select>
                    </div>
                    <div className="passportData__block">
                      <div className="passengerInput__title">Серия</div>
                      <Input
                        placeholder="__ __ __ __"
                        className="passport__input"
                      />
                    </div>
                    <div className="passportData__block">
                      <div className="passengerInput__title">Номер</div>
                      <Input
                        placeholder="__ __ __ __ __ __"
                        className="passport__input"
                      />
                    </div>
                  </div>
                  <div className="passenger__next">
                    <button className="passengerNext__button">
                      Следующий пассажир
                    </button>
                  </div>
                </div>
              </Panel>
            </Collapse>
          </div>

          <div className="passengersPage__collapse">
            <Collapse
              ghost
              expandIconPosition="left"
              expandIcon={({ isActive }) => (isActive ? <Minus /> : <Plus />)}
            >
              <Panel
                header={
                  <div className="passenger-full__header">
                    <div className="passenger__title">
                      Пассажир <span>2</span>
                    </div>
                  </div>
                }
                key={1}
              >
                <div className="passengersPage__passenger-full">
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
                    <PassengersInitials />
                    <div className="passenger__sex_bd">
                      <div className="passenger__sex">
                        <div className="passengerInput__title">Пол</div>
                        <div className="passengerSex__buttons">
                          <button className="passengerSex__button male">
                            М
                          </button>
                          <button className="passengerSex__button female active">
                            Ж
                          </button>
                        </div>
                      </div>
                      <div className="passenger__bd">
                        <div className="passengerInput__title">
                          Дата рождения
                        </div>
                        <Input
                          placeholder="17.02.1985"
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
                  <div className="passenger__passportData">
                    <div className="passportData__block">
                      <div className="passengerInput__title">Тип документа</div>
                      <Select defaultValue="Паспорт РФ">
                        <Option value="passport">Паспорт РФ</Option>
                        <Option value="certificate">
                          Свидетельство о рождении
                        </Option>
                      </Select>
                    </div>
                    <div className="passportData__block">
                      <div className="passengerInput__title">Серия</div>
                      <Input
                        placeholder="__ __ __ __"
                        className="passport__input"
                      />
                    </div>
                    <div className="passportData__block">
                      <div className="passengerInput__title">Номер</div>
                      <Input
                        placeholder="__ __ __ __ __ __"
                        className="passport__input"
                      />
                    </div>
                  </div>
                  <div className="passenger__next">
                    <button className="passengerNext__button">
                      Следующий пассажир
                    </button>
                  </div>
                </div>
              </Panel>
            </Collapse>
          </div>

          <div className="passengersPage__collapse">
            <Collapse
              ghost
              expandIconPosition="left"
              expandIcon={({ isActive }) => (isActive ? <Minus /> : <Plus />)}
            >
              <Panel
                header={
                  <div className="passenger-full__header">
                    <div className="passenger__title">
                      Пассажир <span>3</span>
                    </div>
                  </div>
                }
                key={1}
              >
                <div className="passengersPage__passenger-full">
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
                    <PassengersInitials />
                    <div className="passenger__sex_bd">
                      <div className="passenger__sex">
                        <div className="passengerInput__title">Пол</div>
                        <div className="passengerSex__buttons">
                          <button className="passengerSex__button male">
                            М
                          </button>
                          <button className="passengerSex__button female active">
                            Ж
                          </button>
                        </div>
                      </div>
                      <div className="passenger__bd">
                        <div className="passengerInput__title">
                          Дата рождения
                        </div>
                        <Input
                          placeholder="17.02.1985"
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
                  <div className="passenger__passportData">
                    <div className="passportData__block">
                      <div className="passengerInput__title">Тип документа</div>
                      <Select defaultValue="Паспорт РФ">
                        <Option value="passport">Паспорт РФ</Option>
                        <Option value="certificate">
                          Свидетельство о рождении
                        </Option>
                      </Select>
                    </div>
                    <div className="passportData__block">
                      <div className="passengerInput__title">Серия</div>
                      <Input
                        placeholder="__ __ __ __"
                        className="passport__input"
                      />
                    </div>
                    <div className="passportData__block">
                      <div className="passengerInput__title">Номер</div>
                      <Input
                        placeholder="__ __ __ __ __ __"
                        className="passport__input"
                      />
                    </div>
                  </div>
                  <div className="passenger__next">
                    <button className="passengerNext__button">
                      Следующий пассажир
                    </button>
                  </div>
                </div>
              </Panel>
            </Collapse>
          </div>

          <div className="passengersPage__collapse">
            <Collapse
              ghost
              expandIconPosition="left"
              expandIcon={({ isActive }) => (isActive ? <Minus /> : <Plus />)}
            >
              <Panel
                header={
                  <div className="passenger-full__header">
                    <div className="passenger__title">Добавить пассажира</div>
                  </div>
                }
                key={1}
              >
                <div className="passengersPage__passenger-full">
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
                    <PassengersInitials />
                    <div className="passenger__sex_bd">
                      <div className="passenger__sex">
                        <div className="passengerInput__title">Пол</div>
                        <div className="passengerSex__buttons">
                          <button className="passengerSex__button male">
                            М
                          </button>
                          <button className="passengerSex__button female active">
                            Ж
                          </button>
                        </div>
                      </div>
                      <div className="passenger__bd">
                        <div className="passengerInput__title">
                          Дата рождения
                        </div>
                        <Input
                          placeholder="17.02.1985"
                          className="passengerBd__input"
                        />
                      </div>
                    </div>
                    <div className="passengerCheckbox__block">
                      <Checkbox className="passengerCheckbox__title">
                        ограниченная подвижность
                      </Checkbox>
                    </div>
                  </div>
                  <div className="passenger__passportData">
                    <div className="passportData__block">
                      <div className="passengerInput__title">Тип документа</div>
                      <Select defaultValue="Паспорт РФ">
                        <Option value="passport">Паспорт РФ</Option>
                        <Option value="certificate">
                          Свидетельство о рождении
                        </Option>
                      </Select>
                    </div>
                    <div className="passportData__block">
                      <div className="passengerInput__title">Серия</div>
                      <Input
                        placeholder="__ __ __ __"
                        className="passport__input"
                      />
                    </div>
                    <div className="passportData__block">
                      <div className="passengerInput__title">Номер</div>
                      <Input
                        placeholder="__ __ __ __ __ __"
                        className="passport__input"
                      />
                    </div>
                  </div>
                  <div className="passenger__next">
                    <button className="passengerNext__button">
                      Следующий пассажир
                    </button>
                  </div>
                </div>
              </Panel>
            </Collapse>
          </div>
          <ButtonNext text="Далее" onClick={toPayPage} />
        </div>
      </div>
    </div>
  );
});

export default PassengersPage;
