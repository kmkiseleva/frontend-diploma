import "./destinationPicker.css";
import { AutoComplete, Input } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import React, { memo, useMemo, useState } from "react";
import { BehaviorSubject, of } from "rxjs";
import { ReactComponent as GeoIcon } from "../../../img/geoIcon.svg";
import { autocomplete, fetch$ } from "../../../utils/streaming";

const DestinationPickerInput = memo(({ point, defaultValue, onSelect }) => {
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState(defaultValue);

  // стрим (rxjs) с оптимизацией при рендеринге (useMemo)
  const stream$ = useMemo(
    () => new BehaviorSubject(defaultValue),
    [defaultValue]
  );

  const cities$ = useMemo(
    () => stream$.pipe(autocomplete(1000, (val) => fetch$(val))),
    [stream$]
  );

  // подписка на загрузку состояния
  React.useEffect(() => {
    const loadingSub = stream$.subscribe({
      next: (val) => {
        if (val !== defaultValue) {
          setLoading(true);
        }
        setValue(val);
      },
    });
    return () => loadingSub.unsubscribe();
  }, [stream$, defaultValue]);

  // Обновление значения инпута
  React.useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  // подписка на стрим инпута
  React.useEffect(() => {
    const sub = cities$.subscribe({
      next: (val) => {
        setLoading(false);
        setOptions(val);
      },
      error: (e) => of(e),
    });
    return () => sub.unsubscribe();
  }, [cities$]);

  const returnSelectedCity = (payload, arrayOfCities, point) => {
    const selectedCity = arrayOfCities.find((el) => el.value === payload);
    if (selectedCity) {
      onSelect(selectedCity, point);
    }
  };

  return (
    <AutoComplete
      backfill
      notFoundContent="введите название города..."
      dropdownClassName="destinationDropdown"
      dropdownMatchSelectWidth
      defaultOpen={false}
      value={value}
      options={options}
      filterOption={(inputValue, option) =>
        option?.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
      onChange={(payload) => {
        stream$.next(payload);
      }}
      onSelect={(payload) => returnSelectedCity(payload, options, point)}
    >
      <Input
        className="destination__autocomplete"
        placeholder={point === "departure" ? "Откуда" : "Куда"}
        suffix={
          <div className="destination__geoIcon">
            {loading ? <LoadingOutlined /> : <GeoIcon />}
          </div>
        }
      />
    </AutoComplete>
  );
});

export default DestinationPickerInput;
