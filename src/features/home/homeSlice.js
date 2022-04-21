import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchMessage from './homeAPI';

const initialState = {
  value: false,
  status: 'idle',
  project: {},
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
    setValue: (state) => ({ ...state, value: false }),
    setProject: (state, action) => ({ ...state, project: action.payload }),
  },

  extraReducers: (builder) => {
    builder
      .addCase(messageAsync.pending, (state) => ({
        ...state, status: 'loading',
      }))

      .addCase(messageAsync.fulfilled, (state, action) => ({
        status: 'idle',
        value: action.payload,
      }));
  },
});

export const { setValue, setProject } = homeSlice.actions;

export default homeSlice.reducer;
