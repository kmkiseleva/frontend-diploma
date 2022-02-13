import "./payment.css";
import { useSelector } from "react-redux";

export default function Payment() {
  const payOnline = useSelector((state) => state.personalData.payOnline);
  const payCash = useSelector((state) => state.personalData.payCash);

  return (
    <div className="pay__way">
      <p>
        {payOnline && "Онлайн"} {payCash && "Наличными"}
      </p>
      <div>
        <button>Изменить</button>
      </div>
    </div>
  );
}
