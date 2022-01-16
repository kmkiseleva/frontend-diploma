import React, { memo } from "react";
import { ConfigProvider, DatePicker } from "antd";
import ru_RU from "antd/lib/locale/ru_RU";
import moment from "moment";
import "moment/locale/ru";
import "./customDatePicker.css";

moment.locale("ru");

const dateFormat = { headerPicker: "DD/MM/YY", asidePicker: "DD.MM.YY" };
const placeholder = { headerPicker: "ДД/ММ/ГГ", asidePicker: "ДД.ММ.ГГ" };

const DatePickerInput = memo(({ defaultValue, getDate, dateType }) => {
  return (
    <ConfigProvider locale={ru_RU}>
      <DatePicker
        className="input__item"
        dropdownClassName="input__dropDown"
        onChange={(value) => getDate(value, dateType)}
        value={defaultValue}
        format={dateFormat}
        placeholder="ДД/ММ/ГГ"
        allowClear
      />
    </ConfigProvider>
  );
});

export default DatePickerInput;
