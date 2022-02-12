import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  surname: "",
  name: "Имя",
  patr: "Отчество",
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
    appStateResetInitials: (state) => {
      return initialState;
    },
  },
});

export const {
  appStateSetSurname,
  appStateSetName,
  appStateSetPatr,
  appStateResetInitials,
} = personalData.actions;
export default personalData.reducer;
