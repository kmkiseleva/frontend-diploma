import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  status: "idle",
  error: "",
  data: {
    counter: 0,
    items: [],
  },
};

const subtractYY = (str) =>
  moment(str, "YYYY-MM-DD").subtract(1, "years").format("YYYY-MM-DD");

export const fetchRoutes = createAsyncThunk(
  "getRoutes",
  async (dispatch, params) => {
    const {
      cityDeparture: { _id: departureId },
      cityArrival: { _id: arrivalId },
      dateOutbound,
      dateReturn,
      limit = 5,
      sort = "price_min",
      offset,
      filters: {
        have_first_class = false,
        have_second_class = false,
        have_third_class = false,
        have_fourth_class = false,
        have_wifi = false,
        is_express = false,
        price_from,
        price_to,
        start_departure_hour_from = 0,
        start_departure_hour_to = 0,
        start_arrival_hour_from = 0,
        start_arrival_hour_to = 0,
        end_departure_hour_from = 0,
        end_departure_hour_to = 0,
        end_arrival_hour_from = 0,
        end_arrival_hour_to = 0,
      },
    } = params;

    let reqURL = `${process.env.REACT_APP_BASE_URL}routes?from_city_id=${departureId}&to_city_id=${arrivalId}&limit=${limit}&sort=${sort}`;

    if (dateOutbound) {
      // temporary reduce YY by one
      reqURL += `&date_start=${subtractYY(dateOutbound)}`;
      if (start_departure_hour_from) {
        reqURL += `&start_departure_hour_from=${start_departure_hour_from}`;
      }
      if (start_departure_hour_to) {
        reqURL += `&start_departure_hour_to=${start_departure_hour_to}`;
      }
      if (start_arrival_hour_from) {
        reqURL += `&start_arrival_hour_from=${start_arrival_hour_from}`;
      }
      if (start_arrival_hour_to) {
        reqURL += `&start_arrival_hour_to=${start_arrival_hour_to}`;
      }
      if (dateReturn) {
        // temporary reduce YY by one
        reqURL += `&date_end=${subtractYY(dateReturn)}`;
        if (end_departure_hour_from) {
          reqURL += `&end_departure_hour_from=${end_departure_hour_from}`;
        }
        if (end_departure_hour_to) {
          reqURL += `&end_departure_hour_to=${end_departure_hour_to}`;
        }
        if (end_arrival_hour_from) {
          reqURL += `&end_arrival_hour_from=${end_arrival_hour_from}`;
        }
        if (end_arrival_hour_to) {
          reqURL += `&end_arrival_hour_to=${end_arrival_hour_to}`;
        }
      }
    }

    if (offset) {
      reqURL += `&offset=${offset}`;
    }

    // FILTERS
    reqURL += `&have_first_class=${have_first_class}`;
    reqURL += `&have_second_class=${have_second_class}`;
    reqURL += `&have_third_class=${have_third_class}`;
    reqURL += `&have_fourth_class=${have_fourth_class}`;
    reqURL += `&have_wifi=${have_wifi}`;
    reqURL += `&is_express=${is_express}`;

    if (price_from) {
      reqURL += `&price_from=${price_from}`;
    }
    if (price_to) {
      reqURL += `&price_to=${price_to}`;
    }

    console.log(reqURL);

    dispatch(fetchStart());
    try {
      const response = await fetch(reqURL);
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      dispatch(getRouteSet(data));
      dispatch(fetchSuccess());
    } catch (e) {
      dispatch(fetchError(e.message));
    }
  }
);

const getRoutes = createSlice({
  name: "getRoutes",
  initialState,
  reducers: {
    getRouteSet(state, action) {
      state.data.items = action.payload;
    },
    cleanRouteSet(state, action) {
      return initialState;
    },
    fetchStart(state, action) {
      state.status = "pending";
    },
    fetchError(state, action) {
      state.status = "error";
      state.error = String(action.payload.error.message);
    },
    fetchSuccess(state, action) {
      state.data.totalCount = action.payload.total_count;
      state.data.items = [...action.payload.items].map((el) => [el, el]);
      state.status = "success";
    },
  },
});

export const {
  getRouteSet,
  cleanRouteSet,
  fetchStart,
  fetchError,
  fetchSuccess,
} = getRoutes.actions;
export default getRoutes.reducer;
