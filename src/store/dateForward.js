import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dateVal: null,
};

const dateForward = createSlice({
  name: "dateForward",
  initialState,
  reducers: {
    setDateForward(state, action) {
      state.dateVal = action.payload;
    },
    cleanDateForward(state, action) {
      state.dateVal = null;
    },
  },
});

export const { setDateForward, cleanDateForward } = dateForward.actions;
export default dateForward.reducer;
