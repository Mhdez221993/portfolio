import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import fetchMessage from "./footerAPI";

const initialState = {
  value: false,
  status: "idle",
};

export const messageAsync = createAsyncThunk(
  "message/fetchMessage",
  async (message) => {
    const response = await fetchMessage(message);
    return response.data.ok;
  },
);

export const footerSlice = createSlice({
  name: "message",
  initialState,

  reducers: {
    setValue: (state) => ({ ...state, value: false }),
  },

  extraReducers: (builder) => {
    builder
      .addCase(messageAsync.pending, (state) => ({
        ...state,
        status: "loading",
      }))

      .addCase(messageAsync.fulfilled, (state, action) => ({
        status: "idle",
        value: action.payload,
      }));
  },
});

export const { setValue } = footerSlice.actions;

export default footerSlice.reducer;
