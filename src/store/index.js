import { configureStore } from "@reduxjs/toolkit";
import { params } from "./params";
import getRoutes from "./fetchRoutes";
import lastTickets from "./fetchLastTickets";
import dateForward from "./dateForward";
import dateBackward from "./dateBackward";
import arrival from "./arrival";
import departure from "./departure";
import subscription from "./fetchSubscribe";

const store = configureStore({
  reducer: {
    params,
    getRoutes,
    lastTickets,
    dateForward,
    dateBackward,
    arrival,
    departure,
    subscription,
  },
});

export default store;
