import { memo } from "react";

import ac_icon from "../../../../../img/service_ac.svg";
import wifi_icon from "../../../../../img/service_wifi.svg";
import firstClass from "../../../../../img/service_first-class.svg";
import cup from "../../../../../img/service_cup.svg";

const CarriageServices = memo(({ data }) => {
  const {
    have_air_conditioning: ac,
    have_wifi: wifi,
    is_linens_included: linensInc,
  } = data.coach;

  return (
    <div className="seatsInfo__block">
      <div className="seatsInfo__title">
        Обслуживание <span>ФПК</span>
      </div>
      <div className="seatsInfo__services">
        <div className="seatsInfo__icon">
          {ac && <img src={ac_icon} alt="icon" />}
        </div>
        <div className="seatsInfo__icon">
          {wifi && <img src={wifi_icon} alt="icon" />}
        </div>
        <div className="seatsInfo__icon">
          <img src={firstClass} alt="icon" />
        </div>
        <div className="seatsInfo__icon">
          <img src={cup} alt="icon" />
        </div>
      </div>
    </div>
  );
});

export default CarriageServices;
