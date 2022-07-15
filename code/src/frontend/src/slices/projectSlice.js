import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProject: (state, { payload }) => {
      state.data = payload;
    },
    moveActivity: (state, { payload }) => {
      //Find index of specific object using findIndex method.
      const objIndex = state.data.findIndex((obj) => payload.id === obj.id);
      state.data[objIndex] = {
        ...state.data[objIndex],
        currentPhase: payload.currentPhase,
        currentDiscipline: payload.currentDiscipline,
        iteration: payload.iteration,
      };
    },
    updateDuration: (state, { payload }) => {
      //Find index of specific object using findIndex method.
      const objIndex = state.data.findIndex((obj) => payload.id === obj.id);
      state.data[objIndex] = {
        ...state.data[objIndex],
        duration: payload.value,
      };
    },
    updateEffort: (state, { payload }) => {
      //Find index of specific object using findIndex method.
      const objIndex = state.data.findIndex((obj) => payload.id === obj.id);
      state.data[objIndex] = {
        ...state.data[objIndex],
        effort: payload.value,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProject, moveActivity, updateDuration, updateEffort } =
  projectSlice.actions;

export default projectSlice.reducer;
