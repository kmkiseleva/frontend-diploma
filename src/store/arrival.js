import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: {
    _id: 0,
    value: "",
  },
};

const arrival = createSlice({
  name: "arrival",
  initialState,
  reducers: {
    setArrival(state, action) {
      const { _id, value } = action.payload.city;
      state.city._id = _id;
      state.city.value = value;
    },
    clearArrival(state, action) {
      return initialState;
    },
  },
});

export const { setArrival, clearArrival } = arrival.actions;
export default arrival.reducer;
