import "./destinationPicker.css";
import { AutoComplete, Input } from "antd";

export default function PickerInput({ placeholder }) {
  return (
    <AutoComplete dropdownMatchSelectWidth defaultOpen={false} backfill>
      <Input className="destination__autocomplete" placeholder={placeholder} />
    </AutoComplete>
  );
}
