import {
  INSERT_PERSONAL_TASK,
  FETCH_ALL_PERSONAL_TASK,
  MARK_AS_COMPLETED,
} from "../action/type";

const initialState = {
  personal_tasks: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_PERSONAL_TASK:
      return { ...state, personal_tasks: action.payload };

    case INSERT_PERSONAL_TASK:
      return {
        ...state,
        personal_tasks: [...state.personal_tasks, action.payload],
      };
    case MARK_AS_COMPLETED:
      state.personal_tasks = state.personal_tasks.map((task) => {
        if (task.task_id === action.payload) {
          task.is_completed = !task.is_completed;
        }
        return task;
      });
      return { ...state };
    default:
      return state;
  }
}

export default reducer;
