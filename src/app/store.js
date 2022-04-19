import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import homeReducer from '../features/home/homeSlice';

const store = configureStore({
  reducer: {
    contact: homeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
