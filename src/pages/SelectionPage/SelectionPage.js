import "./selectionPage.css";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import SideSelector from "../../components/SideBar/SideSelector/SideSelector";
import LastTickets from "../../components/SideBar/LastTickets/LastTickets";
import MainTickets from "../../components/SideBar/MainTickets/MainTickets";

export default function SelectionPage() {
  return (
    <div>
      <ProgressBar />
      <div className="selection__container">
        <div className="selection__sidebar">
          <SideSelector />
          <LastTickets />
        </div>
        <div className="selection__main">
          <MainTickets />
        </div>
      </div>
    </div>
  );
}
