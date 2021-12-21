import { configureStore } from "@reduxjs/toolkit";
import getRoute from "./fetchRoutes";
import lastTickets from "./fetchLastTickets";
import dateForward from "./dateForward";
import dateBackward from "./dateBackward";
import arrival from "./arrival";
import departure from "./departure";

const store = configureStore({
  reducer: {
    getRoute,
    lastTickets,
    dateForward,
    dateBackward,
    arrival,
    departure,
  },
});

export default store;
