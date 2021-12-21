import "./destinationPicker.css";
import { AutoComplete, Input } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import React, { memo, useMemo, useState } from "react";
import { BehaviorSubject, Observable, of } from "rxjs";
// import {
//   autocomplete,
//   fetch$,
//   ResponseOptions,
// } from "../../../utils/throttling";
import { ReactComponent as GeoIcon } from "../../../../../img/geoIcon.svg";

export default function DestinationPickerInput({
  defaultValue,
  onSelect,
  point,
}) {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const term$ = useMemo(
    () => new BehaviorSubject(defaultValue),
    [defaultValue]
  );
  // const results$ = useMemo(
  //   () => term$.pipe(autocomplete(1000, (term): Observable => fetch$(term))),
  //   [term$]
  // );

  // Обновление значения инпута
  React.useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <AutoComplete
      backfill
      dropdownMatchSelectWidth
      defaultOpen={false}
      value={value}
      // options={options}
      filterOption={(inputValue, option) =>
        option?.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
      // onSelect={(payload) => returnSelectedCity(payload, options, point)}
      onChange={(payload) => {
        term$.next(payload);
      }}
      notFoundContent="введите название города"
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
}
