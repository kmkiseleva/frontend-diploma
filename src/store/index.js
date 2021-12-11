import { configureStore } from "@reduxjs/toolkit";
import lastTickets from "./fetchLastTickets";

const store = configureStore({
  reducer: {
    lastTickets
  },
});

export default store;