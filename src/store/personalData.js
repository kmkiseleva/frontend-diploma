import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  surname: "",
  name: "",
  patr: "",
  phone: "",
  email: "",
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
  appStateResetInitials,
} = personalData.actions;
export default personalData.reducer;
