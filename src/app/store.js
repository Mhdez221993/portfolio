import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import homeReducer from '../features/home/homeSlice';

export const store = configureStore({
  reducer: {
    contact: homeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
