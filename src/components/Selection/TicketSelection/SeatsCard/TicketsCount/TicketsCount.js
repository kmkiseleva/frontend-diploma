import { memo, useEffect, useState } from "react";
import "./ticketsCount.css";

const TicketsCount = memo(({ getTicketsCount }) => {
  const maxAdultTicketsCount = 5;
  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [childrenMax, setChildrenMax] = useState(0);
  const [toddlerCount, setToddlerCount] = useState(0);
  const [toddlerMax, setToddlerMax] = useState(0);

  useEffect(() => {
    const rest = adultCount * 2 - childrenCount - toddlerCount;
    if (rest < 0 && toddlerCount > 0) {
      setToddlerCount(toddlerCount - 1);
    }
    if (rest < 0 && toddlerCount === 0) {
      setChildrenCount(childrenCount - 1);
    }
    setChildrenMax(rest);
    setToddlerMax(rest);
    getTicketsCount(adultCount, childrenCount, toddlerCount);
  }, [adultCount, childrenCount, getTicketsCount, toddlerCount]);

  return (
    <div className="informationBlock__seatsCount">
      <div className="seatsCount__title">Количество билетов</div>
      <div className="seatsCount__blocks">
        <div className="seatsCount__block more-seats">
          <div className="countBlock__field">Взрослых - {adultCount}</div>
          <div className="countBlock__info">
            Можно добавить еще {maxAdultTicketsCount - adultCount} пассажиров
          </div>
        </div>
        <div className="seatsCount__block one-seat">
          <div className="countBlock__field">Детских - {childrenCount}</div>
          <div className="countBlock__info one-seat">
            Можно добавить еще {childrenMax} билетов для детей до 10 лет. Свое
            место в вагоне, как у взрослых, но дешевле в среднем на 50-65%
          </div>
        </div>
        <div className="seatsCount__block no-seats">
          <div className="countBlock__field">
            Детских "без места" - {toddlerCount}
          </div>
        </div>
      </div>
    </div>
  );
});

export default TicketsCount;
