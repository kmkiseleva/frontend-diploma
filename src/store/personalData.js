import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  surname: "",
  name: "",
  patr: "",
  phone: "",
  email: "",
  payOnline: false,
  payCash: false,
};

export const personalData = createSlice({
  name: "personalData",
  initialState,
  reducers: {
    appStateSetSurname: (state, action) => {
      state.surname = action.payload;
    },
    appStateSetName: (state, action) => {
      state.name = action.payload;
    },
    appStateSetPatr: (state, action) => {
      state.patr = action.payload;
    },
    appStateSetPhone: (state, action) => {
      state.phone = action.payload;
    },
    appStateSetEmail: (state, action) => {
      state.email = action.payload;
    },
    appStateSetPayOnline: (state, action) => {
      state.payOnline = action.payload;
    },
    appStateSetPayCash: (state, action) => {
      state.payCash = action.payload;
    },
    appStateResetInitials: (state) => {
      return initialState;
    },
  },
});

export const {
  appStateSetSurname,
  appStateSetName,
  appStateSetPatr,
  appStateSetPhone,
  appStateSetEmail,
  appStateSetPayOnline,
  appStateSetPayCash,
  appStateResetInitials,
} = personalData.actions;
export default personalData.reducer;
