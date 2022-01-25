import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  progress: 0,
  trainOutgoing: undefined,
  trainIncoming: undefined,
};

export const appState = createSlice({
  name: "appState",
  initialState,
  reducers: {
    appStateSetProgress: (state, action) => {
      state.progress = action.payload;
    },
    appStateSetTrainOutgoing: (state, action) => {
      state.trainOutgoing = action.payload;
    },
    appStateResetTrainOutgoing: (state) => {
      state.trainOutgoing = undefined;
    },
    appStateSetTrainIncoming: (state, action) => {
      state.trainIncoming = action.payload;
    },
    appStateResetTrainIncoming: (state) => {
      state.trainIncoming = undefined;
    },
  },
});

export const {
  appStateSetProgress,
  appStateSetTrainOutgoing,
  appStateResetTrainOutgoing,
  appStateSetTrainIncoming,
  appStateResetTrainIncoming,
} = appState.actions;
export default appState.reducer;
