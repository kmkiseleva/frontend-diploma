import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrainSeatsData } from "./../../../store/fetchSeats";
import SeatsCard from "./SeatsCard/SeatsCard";

const TicketSelection = memo(() => {
  const dispatch = useDispatch();
  const selectedTrainOut = useSelector((state) => state.appState.trainOutgoing);
  const selectedTrainInc = useSelector((state) => state.appState.trainIncoming);

  const trainId = selectedTrainOut ? selectedTrainOut.departure._id : 0;
  if (trainId !== 0) {
    dispatch(fetchTrainSeatsData(trainId));
  }

  return (
    <div className="selection__main">
      <div className="seatsPage__title">Выбор мест</div>
      {selectedTrainOut && (
        <SeatsCard type="outgoing" data={selectedTrainOut} />
      )}
      {selectedTrainOut && selectedTrainInc && (
        <SeatsCard type="incoming" data={selectedTrainInc} />
      )}
      <div className="seatsPage__buttonBlock">
        <button className="seatsPage__button">Далее</button>
      </div>
    </div>
  );
});

export default TicketSelection;
