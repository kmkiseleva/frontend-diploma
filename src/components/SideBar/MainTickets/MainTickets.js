import "./mainTickets.css";
import MainTicketCard from "./MainTicketCard/MainTicketCard";

export default function MainTickets() {
  return (
    <div className="main__container">
      <MainTicketCard />
      <MainTicketCard />
      <MainTicketCard />
      <MainTicketCard />
      <MainTicketCard />
    </div>
  );
}
