import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    tasksCategories: [],
    taskStatuses: [],
    criterions: [],
    criterionCategories: [],
  },
  reducers: {
    getAllTasks(state, action) {
      const arrayTasks: [] = [];
      state.tasks = arrayTasks.concat(action.payload);
    },
    getAllTaskCategories(state, action) {
      const arrayTaskCategories: [] = [];
      state.tasksCategories = arrayTaskCategories.concat(action.payload);
    },
    getAllTaskStatuses(state, action) {
      const arrayTaskStatuses: [] = [];
      state.taskStatuses = arrayTaskStatuses.concat(action.payload);
    },
    getAllCriterions(state, action) {
      const arrayCriterions: [] = [];
      state.criterions = arrayCriterions.concat(action.payload);
    },
    getAllCriterionCategories(state, action) {
      const arrayCriterionCategories: [] = [];
      state.criterionCategories = arrayCriterionCategories.concat(action.payload);
    },
  },
});

export default tasksSlice.reducer;
