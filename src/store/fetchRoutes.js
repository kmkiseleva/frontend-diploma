import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  data: {
    counter: 0,
    items: [],
  },
  loading: false,
  error: null,
};

export const fetchRoutes = (options) => async (dispatch, getState) => {
  const {
    departureId,
    arrivalId,
    dateForward,
    dateBackward,
    limit = 5,
    sort = "price_min",
  } = options;

  // let reqURL = `process.env.REACT_APP_ROUTES_URL?from_city_id=${departureId}&to_city_id=${arrivalId}&limit=${limit}&sort=${sort}`;

  // if (dateForward) {
  //   reqURL += `&date_start=${dateForward}`;
  //   if (dateBackward) {
  //     reqURL += `&date_end=${dateBackward}`;
  //   }
  // }

  dispatch(fetchStart());
  // try {
  //   const response = await fetch(reqURL);

  //   if (!response.ok) {
  //     throw new Error(response.statusText);
  //   }

  //   const data = await response.json();
  //   dispatch(getRouteSet(data));
  //   dispatch(fetchSuccess());
  // } catch (e) {
  //   dispatch(fetchError(e.message));
  // }
};

const getRoute = createSlice({
  name: "getRoute",
  initialState,
  reducers: {
    getRouteSet(state, action) {
      state.data.items = action.payload;
    },
    cleanRouteSet(state, action) {
      return initialState;
    },
    fetchStart(state, action) {
      state.status = "loading";
      state.loading = true;
    },
    fetchError(state, action) {
      const { error } = action.payload;
      return { ...state, items: [], loading: false, error, status: "error" };
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
} = getRoute.actions;
export default getRoute.reducer;
