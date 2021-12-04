import "./progressBar.css";
import { Link } from 'react-router-dom';

export default function ProgressBar() {
    return (
        <div className="progressBar__container">
            <div className="progressBar__item item-active">
            <Link to="/">
              <div className="progressBar__content">
                <div className="progressBar__circle">1</div>
                <span className="progressBar__title">Билеты</span>
              </div>
            </Link>
            </div>

            <div className="progressBar__item">
            <Link to="/">
              <div className="progressBar__content">
                <div className="progressBar__circle">2</div>
                <span className="progressBar__title">Пассажиры</span>
              </div>
            </Link>
            </div>

            <div className="progressBar__item">
            <Link to="/">
              <div className="progressBar__content">
                <div className="progressBar__circle">3</div>
                <span className="progressBar__title">Оплата</span>
              </div>
            </Link>
            </div>

            <div className="progressBar__item">
            <Link to="/">
              <div className="progressBar__content">
                <div className="progressBar__circle">4</div>
                <span className="progressBar__title">Проверка</span>
              </div>
            </Link>
            </div>
        </div>
    )
}