import "./ticketsCount.css";

export default function TicketsCount() {
  return (
    <div className="informationBlock__seatsCount">
      <div className="seatsCount__title">Количество билетов</div>
      <div className="seatsCount__blocks">
        <div className="seatsCount__block more-seats">
          <div className="countBlock__field">Взрослых - 2</div>
          <div className="countBlock__info">
            Можно добавить еще 3 пассажиров
          </div>
        </div>
        <div className="seatsCount__block one-seat">
          <div className="countBlock__field">Детских - 1</div>
          <div className="countBlock__info one-seat">
            Можно добавить еще 3 детей до 10 лет. Свое место в вагоне, как у
            взрослых, но дешевле в среднем на 50-65%
          </div>
        </div>
        <div className="seatsCount__block no-seats">
          <div className="countBlock__field">Детских "без места" - 0</div>
        </div>
      </div>
    </div>
  );
}
