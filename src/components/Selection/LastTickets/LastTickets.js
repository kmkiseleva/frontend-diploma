import "./lastTickets.css";
import LastTicketsCard from "./LastTicketsCard/LastTicketsCard";

export default function LastTickets() {
    return (
        <div className="lastTickets__container">
            <h3 className="lastTickets__title">Последние билеты</h3>
            <div className="lastTickets__block">
                <LastTicketsCard />
                <LastTicketsCard />
                <LastTicketsCard />
            </div>
        </div>
    )

}