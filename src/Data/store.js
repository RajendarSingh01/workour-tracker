import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import selectBodyPartReducer from "../features/selectBodyPartSlice";

export const store = configureStore({
  reducer: {
    selectedBodyPart: selectBodyPartReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
