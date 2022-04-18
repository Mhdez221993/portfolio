import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchMessage from './homeAPI';

const initialState = {
  value: false,
  status: 'idle',
};

export const messageAsync = createAsyncThunk(
  'message/fetchMessage',
  async (message) => {
    const response = await fetchMessage(message);
    return response.data.ok;
  },
);

export const homeSlice = createSlice({
  name: 'message',
  initialState,

  reducers: {
    setValue: (state) => {
      state.value = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(messageAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(messageAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      });
  },
});

export const { setValue } = homeSlice.actions;

export default homeSlice.reducer;
