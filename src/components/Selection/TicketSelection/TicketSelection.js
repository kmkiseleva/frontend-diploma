import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchTrainSeatsData } from "./../../../store/fetchSeats";
import { appStateSetProgress } from "../../../store/appState";
import SeatsCard from "./SeatsCard/SeatsCard";

import trains from "../test";

const TicketSelection = memo(() => {
  const dispatch = useDispatch();
  const history = useHistory();
  const selectedTrainOut = trains[0][0];
  // const selectedTrainOut = useSelector((state) => state.appState.trainOutgoing);
  const selectedTrainInc = useSelector((state) => state.appState.trainIncoming);

  const trainId = selectedTrainOut ? selectedTrainOut.departure._id : 0;
  if (trainId !== 0) {
    dispatch(fetchTrainSeatsData(trainId));
  }

  const onPassengersPage = () => {
    dispatch(appStateSetProgress(1));
    history.push("/passengers");
  };

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
        <button className="seatsPage__button" onClick={onPassengersPage}>
          Далее
        </button>
      </div>
    </div>
  );
});

export default TicketSelection;
