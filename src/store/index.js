import { configureStore } from "@reduxjs/toolkit";
import params from "./params";
import getRoutes from "./fetchRoutes";
import lastTickets from "./fetchLastTickets";
import dateForward from "./dateForward";
import dateBackward from "./dateBackward";
import subscription from "./fetchSubscribe";

const store = configureStore({
  reducer: {
    params,
    getRoutes,
    lastTickets,
    dateForward,
    dateBackward,
    subscription,
  },
});

export default store;
