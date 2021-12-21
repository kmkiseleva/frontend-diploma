import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dateVal: null,
};

const dateBackward = createSlice({
  name: "dateBackward",
  initialState,
  reducers: {
    setDateBackward(state, action) {
      state.dateVal = action.payload;
    },
    cleanDateBackward(state, action) {
      state.dateVal = null;
    },
  },
});

export const { setDateBackward, cleanDateBackward } = dateBackward.actions;
export default dateBackward.reducer;
