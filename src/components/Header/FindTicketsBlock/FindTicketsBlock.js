import "./findTicketsBlock.css";

export default function FindTicketsBlock() {
  return (
    <div className="block__container">
      <div className="block__destination">Направление</div>
      <div className="block__date">Дата</div>
      <div className="block__button">
        <button>Найти билеты</button>
      </div>
    </div>
  );
}
