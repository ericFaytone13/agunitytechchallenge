import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./feature/weatherSlice";

const store = configureStore({
  reducer: {
    location: weatherReducer,
  },
});

export default store;
