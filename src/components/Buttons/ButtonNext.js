import "./buttonNext.css";

export default function ButtonNext({ text }) {
  return (
    <div className="button__next-block">
      <button className="button__next-button">{text}</button>
    </div>
  );
}
