import { configureStore } from "@reduxjs/toolkit";
import getRoute from "./fetchRoutes";
import lastTickets from "./fetchLastTickets";

const store = configureStore({
  reducer: {
    getRoute,
    lastTickets,
  },
});

export default store;
