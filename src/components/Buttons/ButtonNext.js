import "./buttonNext.css";

export default function ButtonNext({ text, onClick }) {
  return (
    <div className="button__next-block">
      <button className="button__next-button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
