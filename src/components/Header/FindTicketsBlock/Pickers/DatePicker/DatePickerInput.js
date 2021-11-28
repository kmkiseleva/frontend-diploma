import { ConfigProvider, DatePicker } from "antd";
import ru_RU from "antd/lib/locale/ru_RU";
import moment, { Moment } from "moment";
import "moment/locale/ru";
import "./customDatePicker.css";

moment.locale("ru");

// function disabledDate(current: Moment) {
//   // Restricts select days before today
//   return current && current < moment().startOf("day");
// }

const dateFormat = "DD/MM/YY";
const placeholder = "ДД/ММ/ГГ";

export default function DatePickerInput({ defaultValue, getDate }) {
  return (
    <ConfigProvider locale={ru_RU}>
      <DatePicker
        className="input__item"
        // dropdownClassName={s.dropDown}
        onChange={getDate}
        defaultValue={defaultValue}
        format={dateFormat}
        placeholder={placeholder}
        allowClear
        // disabledDate={disabledDate}
      />
    </ConfigProvider>
  );
}
