import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  counter: 1,
};

export const passengersData = createSlice({
  name: "passengersData",
  initialState,
  reducers: {
    addPassenger: (state, action) => {
      state.items.push(action.payload);
    },
    incCounter: (state, action) => {
      state.counter = action.payload + 1;
    },

    setPassengerAge: (state, action) => {
      state.age = action.payload;
    },
    setPassengerSurname: (state, action) => {
      state.surname = action.payload;
      console.log(state.surname);
    },
    setPassengerName: (state, action) => {
      state.name = action.payload;
    },
    setPassengerPatr: (state, action) => {
      state.patr = action.payload;
    },
    setPassengerSex: (state, action) => {
      state.sex = action.payload;
    },
    deletePassenger: (state, action) => {},
    resetPassengerData: (state) => {
      return initialState;
    },
  },
});

export const {
  addPassenger,
  incCounter,
  setPassengerAge,
  setPassengerSurname,
  setPassengerName,
  setPassengerPatr,
  setPassengerSex,
} = passengersData.actions;
export default passengersData.reducer;
