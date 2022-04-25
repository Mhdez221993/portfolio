import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from './homeAPI';

const initialState = {
  value: false,
  status: 'idle',
  project: {},
  projects: [],
};

export const messageAsync = createAsyncThunk(
  'message/fetchMessage',
  async (message) => {
    const response = await API.fetchMessage(message);
    return response.data.ok;
  },
);

export const projectsAsync = createAsyncThunk(
  'message/fetchProjects',
  async () => {
    const response = await API.fetchProjects();
    return response;
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
      }))

      .addCase(projectsAsync.fulfilled, (state, action) => ({
        status: 'idle',
        projects: action.payload,
      }));
  },
});

export const { setValue, setProject, setProjects } = homeSlice.actions;

export default homeSlice.reducer;
