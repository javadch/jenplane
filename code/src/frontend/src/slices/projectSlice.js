import { createSlice } from "@reduxjs/toolkit";
import { CELL_TYPES } from "data/projects";
import { max } from "lodash";

const initialState = {
  data: [],
  metaData: {
    disciplinesNodeId: "",
    phasesNodeId: "",
  },
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProject: (state, { payload }) => {
      state.data = payload;
    },
    setMetaData: (state, { payload }) => {
      state.metaData = payload;
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
    updatePreferredColor: (state, { payload }) => {
      //Find index of specific object using findIndex method.
      const objIndex = state.data.findIndex((obj) => payload.id === obj.id);
      state.data[objIndex] = {
        ...state.data[objIndex],
        preferredColor: payload.value,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setProject,
  setMetaData,
  moveActivity,
  updateDuration,
  updateEffort,
  updatePreferredColor,
} = projectSlice.actions;

export default projectSlice.reducer;

/**
 * Get the longest duration of all activities
 * @param {Object[]} components Array of components
 * @return {Boolean} if this input field is Literal
 */
export const getLongestDuration = (data) => {
  return max(
    data
      .filter((c) => c.cell_type === CELL_TYPES.ACTIVITY)
      .map((c) => parseInt(c.duration))
  );
};

/**
 * Get the biggest effort of all activities
 * @param {Object[]} components Array of components
 * @return {Boolean} if this input field is Literal
 */
export const getBiggestEffort = (data) => {
  return max(
    data
      .filter((c) => c.cell_type === CELL_TYPES.ACTIVITY)
      .map((c) => parseInt(c.effort))
  );
};
