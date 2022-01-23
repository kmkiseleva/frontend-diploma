import "./selectionPage.css";
import { useDispatch, useSelector } from "react-redux";
import { memo, useState } from "react";

import HeaderSelect from "./../../components/Header/HeaderSelect";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import SideSelector from "../../components/Selection/SideSelector/SideSelector";
import LastTickets from "../../components/Selection/LastTickets/LastTickets";
import MainTicketCard from "../../components/Selection/MainTicketCard/MainTicketCard";
import NoResults from "./../../components/NoResults/NoResults";
import Loader from "./../../components/Loading/Loader";
import SortFilter from "../../components/Selection/SortFilter/SortFilter";
import ResultsLimit from "../../components/Selection/ResultsLimit/ResultsLimit";
import CustomPagination from "./../../components/Selection/CustomPagination/CustomPagination";

import {
  searchParamsSortSet,
  searchParamsOffsetSet,
  searchParamsLimitSet,
} from "../../store/params";

export const sortOptions = [
  {
    value: "date",
    label: "времени",
  },
  {
    value: "price_min",
    label: "стоимости",
  },
  {
    value: "duration",
    label: "длительности",
  },
];

const SelectionPage = memo(() => {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.getRoutes.status);
  const trains = useSelector((state) => state.getRoutes.data.items);
  const params = useSelector((state) => state.params);
  const counter = useSelector((state) => state.getRoutes.data.counter);

  const { limit, sort, offset } = params;
  const [activeSort, setActiveSort] = useState([sort]);
  const [currentPage, setCurrentPage] = useState(offset / limit + 1);

  // сортировать по (времени, стоимости, длительности)
  const onChangeSort = (value) => {
    setActiveSort(value);
    dispatch(searchParamsSortSet(`${value}`));
    dispatch(searchParamsOffsetSet(0));
  };

  // показывать по 5, 10, 20
  const onClickLimit = (el) => {
    dispatch(searchParamsLimitSet(el));
    dispatch(searchParamsOffsetSet(0));
  };

  // поменять страницу
  const onChangePage = (value) => {
    setCurrentPage(value);
    dispatch(searchParamsOffsetSet(value * limit - limit));
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
                <div>найдено&nbsp;{counter}</div>
                <div>
                  сортировать по:
                  <SortFilter
                    onChange={onChangeSort}
                    active={activeSort}
                    options={sortOptions}
                  />
                </div>
                <div className="resultsLimit__container">
                  показывать по:&nbsp;
                  <ResultsLimit
                    variants={[5, 10, 20]}
                    active={limit}
                    onClick={onClickLimit}
                  />
                </div>
              </div>
              {!counter && <NoResults />}
              {counter !== 0 && (
                <>
                  <div className="mainTickets__container">
                    {trains.map((trainsPair) => {
                      // eslint-disable-next-line no-underscore-dangle
                      const key = trainsPair[0].departure.train._id;
                      return <MainTicketCard trains={trainsPair} key={key} />;
                    })}
                  </div>
                  <div className="pagination__container">
                    <CustomPagination
                      data={{
                        current: currentPage,
                        total: counter,
                        pageSize: limit,
                        onChange: onChangePage,
                      }}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
});

export default SelectionPage;
