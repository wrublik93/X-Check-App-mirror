import { tasksSlice } from '@/store/reducers/tasks';

// eslint-disable-next-line import/prefer-default-export
export const {
  getAllTasks,
  getAllTaskCategories,
  getAllTaskStatuses,
  getAllCriterions,
  getAllCriterionCategories,
} = tasksSlice.actions;
