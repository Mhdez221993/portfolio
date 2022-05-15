import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchProjects from './homeAPI';

const initialState = {
  status: 'idle',
  project: {},
  projects: [],
};

export const projectsAsync = createAsyncThunk(
  'message/fetchProjects',
  async () => {
    const response = await fetchProjects();
    return response;
  },
);

export const homeSlice = createSlice({
  name: 'message',
  initialState,

  reducers: {
    setProject: (state, action) => ({ ...state, project: action.payload }),
  },

  extraReducers: (builder) => {
    builder
      .addCase(projectsAsync.fulfilled, (state, action) => ({
        status: 'idle',
        projects: action.payload,
      }));
  },
});

export const { setProject, setProjects } = homeSlice.actions;

export default homeSlice.reducer;
