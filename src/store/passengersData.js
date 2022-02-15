import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      counter: 1,
      age: "",
      surname: "",
      name: "",
      patr: "",
      sex: "",
      bd: undefined,
      dysmobility: false,
      document: "",
      passport: { seria: undefined, number: undefined },
      bdCertif: undefined,
    },
  ],
};

export const passengersData = createSlice({
  name: "passengersData",
  initialState,
  reducers: {
    addPassenger: (state, action) => {
      console.log(action.payload);
      state.items.push(action.payload);
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
  setPassengerAge,
  setPassengerSurname,
  setPassengerName,
  setPassengerPatr,
  setPassengerSex,
} = passengersData.actions;
export default passengersData.reducer;
