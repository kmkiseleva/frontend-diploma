import "./customDatePicker.css";
import DatePickerInput from "./DatePickerInput";

export default function CustomDatePicker() {
  return (
    <div className="date__container">
      <span className="date__title">Дата</span>
      <div className="date__input">
        <DatePickerInput className="input__header" />
        <DatePickerInput className="input__header" />
      </div>
    </div>
  );
}
