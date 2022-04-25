import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import homeReducer from '../features/home/homeSlice';

const store = configureStore({
  reducer: {
    home: homeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
