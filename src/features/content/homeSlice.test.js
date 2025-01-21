import homeReducer, { projectsAsync, setProject } from "./homeSlice";

import { configureStore } from "@reduxjs/toolkit";

describe("homeSlice", () => {
  let store;

  beforeAll(() => {
    store = configureStore({
      reducer: { home: homeReducer },
    });
  });

  it("should set the project when setProject is dispatched", () => {
    const project = { id: 1, name: "My Project" };
    store.dispatch(setProject(project));
    const state = store.getState().home;
    expect(state.project).toEqual(project);
  });

  it("should fetch and set the projects when projectsAsync is dispatched", async () => {
    await store.dispatch(projectsAsync());
    const state = store.getState().home;
    expect(state.projects.length).toBeGreaterThan(0);
  });
});
