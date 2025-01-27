import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchComponents from "./componentsAPI";
import fetchProjects from "./projectsAPI"; // Assuming you have a similar API for projects

export const componentsAsync = createAsyncThunk(
  "home/fetchComponents",
  async () => {
    const response = await fetchComponents();
    return response;
  },
);

export const projectsAsync = createAsyncThunk(
  "home/fetchProjects",
  async () => {
    const response = await fetchProjects();
    return response;
  },
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    components: [],
    projects: [],
    selectedProject: null,
  },
  reducers: {
    setProject: (state, action) => {
      state.selectedProject = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(componentsAsync.fulfilled, (state, action) => {
        state.components = action.payload;
      })
      .addCase(projectsAsync.fulfilled, (state, action) => {
        state.projects = action.payload;
      });
  },
});

export const { setProject } = homeSlice.actions;

export default homeSlice.reducer;
