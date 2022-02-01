import { memo } from "react";

const CarriageNumber = memo(
  ({ toggleCarriage, activeCarriage, buttonNumber }) => {
    <button
      onClick={() => toggleCarriage(buttonNumber)}
      disabled={activeCarriage === buttonNumber}
    >
      {buttonNumber}
    </button>;
  }
);

export default CarriageNumber;
