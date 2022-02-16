import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./passengers.css";
import rub from "../../img/rub.png";
import PassengerCard from "./../PassengerCard/PassengerCard";

import { appStateSetProgress } from "../../store/appState";

export default function Passengers() {
  const history = useHistory();
  const dispatch = useDispatch();

  const items = useSelector((state) => state.passengersData.items);

  const changePassengersData = () => {
    dispatch(appStateSetProgress(1));
    history.push("./passengers");
  };

  return (
    <div className="confirm__passengers">
      <div className="passengers__title">Пассажиры</div>
      <div className="passengers__info">
        <div className="passengers__names">
          {items.map((el) => (
            <PassengerCard
              key={el.counter}
              age={el.age}
              surname={el.surname}
              name={el.name}
              patr={el.patr}
              sex={el.sex}
              bd={el.bd}
              dysmobility={el.dysmobility}
              document={el.document}
              passportSeria={el.passport.seria}
              passportNumber={el.passport.number}
              bdCertif={el.bdCertif}
            />
          ))}

          {/* <div className="names__card">
            <div className="card__img">
              <div>
                <img src={ava} alt="avatar" />
              </div>
              <span>Взрослый</span>
            </div>
            <div className="card__details">
              <div className="details__initials">Мартынюк Ирина Эдуардовна</div>
              <div className="details__sex">женский</div>
              <div className="details__birthday">Дата рождения 17.02.1985</div>
              <div className="details__passport">Паспорт РФ 4204 380694</div>
            </div>
          </div>
          <div className="names__card">
            <div className="card__img">
              <div>
                <img src={ava} alt="avatar" />
              </div>
              <span>Детский</span>
            </div>
            <div className="card__details">
              <div className="details__initials">Мартынюк Кирилл Сергеевич</div>
              <div className="details__sex">мужской</div>
              <div className="details__birthday">Дата рождения 17.02.1985</div>
              <div className="details__passport">Паспорт РФ 4204 380694</div>
            </div>
          </div>
          <div className="names__card">
            <div className="card__img">
              <div>
                <img src={ava} alt="avatar" />
              </div>
              <span>Взрослый</span>
            </div>
            <div className="card__details">
              <div className="details__initials">Мартынюк Сергей Петрович</div>
              <div className="details__sex">мужской</div>
              <div className="details__birthday">Дата рождения 17.02.1985</div>
              <div className="details__passport">Паспорт РФ 4204 380694</div>
            </div>
          </div> */}
        </div>
        <div className="passengers__price">
          <div>
            Всего <span>7 760</span> <img src={rub} alt="rub"></img>
          </div>
          <button onClick={changePassengersData}>Изменить</button>
        </div>
      </div>
    </div>
  );
}
