import "./selectionPage.css";
import { useDispatch, useSelector } from "react-redux";
import { memo, useMemo } from "react";
// import moment from "moment";

import HeaderSelect from "./../../components/Header/HeaderSelect";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import SideSelector from "../../components/Selection/SideSelector/SideSelector";
import LastTickets from "../../components/Selection/LastTickets/LastTickets";
// import MainTickets from "../../components/Selection/MainTickets/MainTickets";
import NoResults from "./../../components/NoResults/NoResults";
import Loader from "./../../components/Loading/Loader";

import { searchParamsFiltersSet } from "../../store/params";

const SelectionPage = memo(() => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.getRoutes.status);
  const trains = useSelector((state) => state.getRoutes.data.items);
  const filters = useSelector((state) => state.params.filters);

  console.log(status);

  return (
    <div className="selectionPage__body">
      <HeaderSelect />
      {status === "pending" && <Loader />}
      {status === "success" && (
        <>
          <ProgressBar />
          <div className="selection__container">
            <div className="selection__sidebar">
              <SideSelector />
              <LastTickets />
            </div>
            <div className="selection__main">
              <NoResults />
              {/* <MainTickets /> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
});

export default SelectionPage;
