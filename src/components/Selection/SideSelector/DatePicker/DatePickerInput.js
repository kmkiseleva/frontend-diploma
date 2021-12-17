import { ConfigProvider, DatePicker } from "antd";
import ru_RU from "antd/lib/locale/ru_RU";
import moment from "moment";
import "moment/locale/ru";
import "./datePickerInput.css";

moment.locale("ru");

const dateFormat = "DD/MM/YY";
const placeholder = "ДД/ММ/ГГ";

export default function DatePickerInput({ defaultValue, getDate }) {
  return (
    <ConfigProvider locale={ru_RU}>
      <DatePicker
        className="input__sideItem"
        onChange={getDate}
        defaultValue={defaultValue}
        format={dateFormat}
        placeholder={placeholder}
        allowClear
      />
    </ConfigProvider>
  );
}
