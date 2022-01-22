import "./selectionPage.css";
import { useDispatch, useSelector } from "react-redux";
import { memo, useMemo, useState } from "react";
// import moment from "moment";

import HeaderSelect from "./../../components/Header/HeaderSelect";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import SideSelector from "../../components/Selection/SideSelector/SideSelector";
import LastTickets from "../../components/Selection/LastTickets/LastTickets";
// import MainTickets from "../../components/Selection/MainTickets/MainTickets";
import NoResults from "./../../components/NoResults/NoResults";
import Loader from "./../../components/Loading/Loader";

import {
  searchParamsFiltersSet,
  searchParamsSortSet,
  searchParamsOffsetSet,
} from "../../store/params";

const SelectionPage = memo(() => {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.getRoutes.status);
  const trains = useSelector((state) => state.getRoutes.data.items);
  const filters = useSelector((state) => state.params.filters);
  const params = useSelector((state) => state.params);

  const totalCount = useSelector((state) => state.getRoutes.data.totalCount);
  const { limit, sort, offset } = params;
  const [activeSort, setActiveSort] = useState([sort]);

  const onChangeSort = (value) => {
    setActiveSort(value);
    dispatch(searchParamsSortSet(`${value}`));
    dispatch(searchParamsOffsetSet(0));
  };

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
              <div className="selectionMain__sortFilters">
                <div>найдено&nbsp;{totalCount}</div>
                <div>
                  сортировать по:
                  <SortFilter
                    onChange={onChangeSort}
                    active={activeSort}
                    options={sortOptions}
                  />
                </div>
                <div>
                  показывать по:&nbsp;
                  <ResultsLimit
                    variants={[5, 10, 20]}
                    active={limit}
                    onClick={onClickLimit}
                  />
                </div>
              </div>
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
