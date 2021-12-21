import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: {
    _id: 0,
    value: "",
  },
};

const departure = createSlice({
  name: "departure",
  initialState,
  reducers: {
    setDeparture(state, action) {
      const { _id, value } = action.payload.city;
      state.city._id = _id;
      state.city.value = value;
    },
    clearDeparture(state, action) {
      return initialState;
    },
  },
});

export const { setDeparture, clearDeparture } = departure.actions;
export default departure.reducer;
