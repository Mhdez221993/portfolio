import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import homeReducer from '../features/content/homeSlice';
import footerReducer from '../features/footer/footerSlice';

const store = configureStore({
  reducer: {
    home: homeReducer,
    form: footerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
