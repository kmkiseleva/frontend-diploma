import "./customDatePicker.css";
import DatePickerInput from "./DatePickerInput";
import { useEffect, useMemo, useState } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { setDateForward } from "../../../store/dateForward";
import { setDateBackward } from "../../../store/dateBackward";

export default function CustomDatePicker({ pickerPlace }) {
  const dispatch = useDispatch();
  const [forwardMoment, setForwardMoment] = useState(undefined);
  const [backwardMoment, setBackwardMoment] = useState(undefined);
  const forwardState = useSelector((state) => state.dateForward);
  const backwardState = useSelector((state) => state.dateBackward);

  const onChange = (value, dateType) => {
    const date = value ? value.format("YYYY-MM-DD") : null;
    if (dateType === "forward") {
      dispatch(setDateForward(date));
    } else if (dateType === "backward") {
      dispatch(setDateBackward(date));
    }
  };

  useEffect(() => {
    if (backwardState && forwardState && backwardState < forwardState) {
      dispatch(setDateBackward(null));
    }
  }, [backwardState, forwardState, dispatch]);

  useMemo(() => {
    if (forwardState) {
      setForwardMoment(moment(forwardState, "YYYY-MM-DD"));
    } else {
      setForwardMoment(undefined);
    }
  }, [forwardState]);

  useMemo(() => {
    if (backwardState) {
      setBackwardMoment(moment(backwardState, "YYYY-MM-DD"));
    } else {
      setBackwardMoment(undefined);
    }
  }, [backwardState]);

  const forwardPicker = () => (
    <DatePickerInput
      className="input__header"
      dateType="forward"
      defaultValue={forwardMoment}
      disableDate={moment()}
      getDate={onChange}
    />
  );

  const backwardPicker = () => (
    <DatePickerInput
      className="input__header"
      dateType="backward"
      defaultValue={forwardMoment || moment()}
      disableDate={moment()}
      getDate={onChange}
    />
  );

  return (
    <div className="date__container">
      <span className="date__title">Дата</span>
      <div className="date__input">
        {forwardPicker}
        {backwardPicker}
        <DatePickerInput className="input__header" />
        <DatePickerInput className="input__header" />
      </div>
    </div>
  );
}
