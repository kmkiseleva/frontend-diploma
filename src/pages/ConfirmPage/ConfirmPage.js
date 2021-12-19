import "./confirmPage.css";
import HeaderSelect from "./../../components/Header/HeaderSelect";
import ProgressBar from "./../../components/ProgressBar/ProgressBar";
import MainTicketCard from "./../../components/Selection/MainTickets/MainTicketCard/MainTicketCard";
import rub from "./img/rub.png";
import ava from "./img/avatar.png";

export default function ConfirmPage() {
  return (
    <div>
      <HeaderSelect />
      <ProgressBar />
      <div className="confirm__container">
        <div className="confirm__sidebar"></div>
        <div className="confirm__main">
          <div className="confirm__ticket">
            <div className="ticket__title">Поезд</div>
            <MainTicketCard />
          </div>
          <div className="confirm__passengers">
            <div className="passengers__title">Пассажиры</div>
            <div className="passengers__info">
              <div className="passengers__names">
                <div className="names__card">
                  <div className="card__img">
                    <div>
                      <img src={ava} alt="avatar" />
                    </div>
                    <span>Взрослый</span>
                  </div>
                  <div className="card__details">
                    <div className="details__initials">
                      Мартынюк Ирина Эдуардовна
                    </div>
                    <div className="details__sex">женский</div>
                    <div className="details__birthday">
                      Дата рождения 17.02.1985
                    </div>
                    <div className="details__passport">
                      Паспорт РФ 4204 380694
                    </div>
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
                    <div className="details__initials">
                      Мартынюк Кирилл Сергеевич
                    </div>
                    <div className="details__sex">мужской</div>
                    <div className="details__birthday">
                      Дата рождения 17.02.1985
                    </div>
                    <div className="details__passport">
                      Паспорт РФ 4204 380694
                    </div>
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
                    <div className="details__initials">
                      Мартынюк Сергей Петрович
                    </div>
                    <div className="details__sex">мужской</div>
                    <div className="details__birthday">
                      Дата рождения 17.02.1985
                    </div>
                    <div className="details__passport">
                      Паспорт РФ 4204 380694
                    </div>
                  </div>
                </div>
              </div>
              <div className="passengers__price">
                <div>
                  Всего <span>7 760</span> <img src={rub} alt="rub"></img>
                </div>
                <button>Изменить</button>
              </div>
            </div>
          </div>
          <div className="confirm__pay">
            <div className="pay__title">Способ оплаты</div>
            <div className="pay__way">
              <p>Наличными</p>
              <div>
                <button>Изменить</button>
              </div>
            </div>
          </div>
          <button className="confirm__button">Подтвердить</button>
        </div>
      </div>
    </div>
  );
}
