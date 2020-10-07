import React, { useState, useEffect, useContext } from "react";
import { ALL_PERSONAL_TASKS } from "../queries/index";
import { useQuery, useMutation } from "@apollo/react-hooks";
import Loader from "./Loader";
import { TodoContext } from "../App";
import {
  TOGGLE_TASK_COMPLETION,
  DELETE_PERSONAL_TASK_QUERY,
} from "../queries/index";
import {
  FETCH_ALL_PERSONAL_TASK,
  MARK_AS_COMPLETED,
  DELETE_PERSONAL_TASK,
} from "../store/action/type";

import EditTask from "./EditTask";

function Todo({ insertedData, isShowingCompletedTasks }) {
  const [editTask, setEditTask] = useState(null);

  const context = useContext(TodoContext); // Contetx
  var { loading, error, data } = useQuery(ALL_PERSONAL_TASKS);
  var [isLoading, setIsLoading] = useState(false);

  const [
    toggleIsCompleted,
    { updateloading, updateerror },
    updatedData,
  ] = useMutation(TOGGLE_TASK_COMPLETION, {
    update: (
      proxy,
      {
        data: {
          update_tasks: { returning },
        },
      }
    ) => {
      context.dispatch({
        type: MARK_AS_COMPLETED,
        payload: returning[0].task_id,
      });
    },
  });

  const [
    deleteTask,
    { deleteLoading, errorInDelete },
    deletedData,
  ] = useMutation(DELETE_PERSONAL_TASK_QUERY, {
    update: (
      proxy,
      {
        data: {
          delete_tasks: { returning },
        },
      }
    ) => {
      context.dispatch({ type: DELETE_PERSONAL_TASK, payload: returning[0] });
    },
  });

  useEffect(() => {
    let {
      state: { personal_tasks },
    } = context;
    if (data && !loading && !personal_tasks.length) {
      context.dispatch({ type: FETCH_ALL_PERSONAL_TASK, payload: data.tasks });
    }
  }, [data]);

  if (loading || updateloading || isLoading) {
    return <Loader />;
  }

  const handleCheck = (taskId, is_completed) => {
    toggleIsCompleted({
      variables: {
        is_completed: !is_completed,
        task_id: taskId,
      },
    });
  };

  const handleDelete = (taskId) => {
    if (taskId) {
      deleteTask({
        variables: {
          task_id: taskId,
        },
      });
    }
  };

  if (loading || updateloading || isLoading || deleteLoading) {
    return <Loader />;
  }

  return (
    <div className="w-full">
      {context.state.personal_tasks &&
        context.state.personal_tasks.map((task) => {
          if (task.is_completed !== isShowingCompletedTasks) {
            return <React.Fragment key={task.task_id}></React.Fragment>;
          }
          return (
            <React.Fragment key={task.task_id}>
              {!editTask || (editTask && task.task_id !== editTask.task_id) ? (
                <>
                  <div
                    key={`task${task.task_id}`}
                    className="tasks_wrapper text-sm py-4 flex justify-between items-center w-full"
                  >
                    {task.task_id && (
                      <>
                        <div className="inline-flex items-center">
                          <div
                            onClick={() =>
                              handleCheck(task.task_id, task.is_completed)
                            }
                          >
                            {task.is_completed ? (
                              <i className="fas fa-check-circle cursor-pointer"></i>
                            ) : (
                              <i className="far fa-circle cursor-pointer"></i>
                            )}
                            <span
                              className={
                                isShowingCompletedTasks
                                  ? "line-through ml-2 cursor-pointer"
                                  : "ml-2 cursor-pointer"
                              }
                            >
                              {task.title}
                            </span>
                          </div>
                        </div>

                        <div className="task_update">
                          <ul className="flex justify-evenly items-center w-full">
                            <li onClick={() => setEditTask(task)}>
                              <i className="fas fa-pencil-alt" />
                            </li>
                            <li onClick={() => handleDelete(task.task_id)}>
                              <i className="far fa-trash-alt"></i>
                            </li>
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                </>
              ) : (
                <EditTask
                  task={editTask}
                  setEditTask={setEditTask}
                  setIsLoading={setIsLoading}
                />
              )}
            </React.Fragment>
          );
        })}
    </div>
  );
}

export default Todo;
