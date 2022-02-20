import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  progress: 0,
  trainOutbound: undefined,
  trainReturn: undefined,
  totalPrice: 0,
};

export const appState = createSlice({
  name: "appState",
  initialState,
  reducers: {
    appStateSetProgress: (state, action) => {
      state.progress = action.payload;
    },
    appStateSetTrainOutbound: (state, action) => {
      state.trainOutbound = action.payload;
    },
    appStateResetTrainOutbound: (state) => {
      state.trainOutbound = undefined;
    },
    appStateSetTrainReturn: (state, action) => {
      state.trainReturn = action.payload;
    },
    appStateResetTrainReturn: (state) => {
      state.trainReturn = undefined;
    },

    appStateSetTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
  },
});

export const {
  appStateSetProgress,
  appStateSetTrainOutbound,
  appStateResetTrainOutbound,
  appStateSetTrainReturn,
  appStateResetTrainReturn,
  appStateSetTotalPrice,
} = appState.actions;
export default appState.reducer;
