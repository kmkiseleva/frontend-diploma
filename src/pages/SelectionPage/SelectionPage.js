import "./selectionPage.css";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import SideSelector from "../../components/Selection/SideSelector/SideSelector";
import LastTickets from "../../components/Selection/LastTickets/LastTickets";
import MainTickets from "../../components/Selection/MainTickets/MainTickets";

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
