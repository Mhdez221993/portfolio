import { configureStore } from "@reduxjs/toolkit";
import footerReducer from "../features/footer/footerSlice";
import homeReducer from "../features/content/homeSlice";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    home: homeReducer,
    form: footerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
