import {
  INSERT_PERSONAL_TASK,
  FETCH_ALL_PERSONAL_TASK,
  MARK_AS_COMPLETED,
  EDIT_PERSONAL_TASK,
  DELETE_PERSONAL_TASK,
  CREATE_PROJECT,
  ALL_PROJECTS,
} from "../action/type";

const initialState = {
  personal_tasks: [],
  projects: [],
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

    case EDIT_PERSONAL_TASK:
      state.personal_tasks = state.personal_tasks.map((task) => {
        if (task.task_id === action.payload.task_id) {
          return action.payload;
        }
        return task;
      });
      return { ...state };

    case DELETE_PERSONAL_TASK:
      state.personal_tasks = state.personal_tasks.filter(
        (task) => task.task_id !== action.payload.task_id
      );
      return { ...state };

    // Projects

    case CREATE_PROJECT:
      
      console.log({ ...state, projects: [...state.projects, action.payload] })
      return { ...state, projects: [...state.projects, action.payload] };
    case ALL_PROJECTS:
      return { ...state, projects: [...action.payload] };
    default:
      return state;
  }
}

export default reducer;
