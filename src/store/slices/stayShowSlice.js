import { configureStore } from "@reduxjs/toolkit";
import festivalReducer from "../slices/festivalSlice.ts";
import festivalShowReducer from "./festivalShowSlice.ts";
import stayReducer from "./staySlice.js";
import stayShowReducer from "./stayShowSlice.js";

export const store = configureStore({
  reducer: {
    festival: festivalReducer,
    festivalShow: festivalShowReducer,
    stay: stayReducer,
    stayShow: stayShowReducer,
  },
});