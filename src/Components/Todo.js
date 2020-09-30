import React, { useState, useEffect, useContext } from "react";
import { ALL_PERSONAL_TASKS } from "../queries/index";
import { useQuery } from "@apollo/react-hooks";
import Loader from "./Loader";
import { TodoContext } from "../App";
import {TOGGLE_TASK_COMPLETION} from "../queries/index";
import {
  FETCH_ALL_PERSONAL_TASK,
  MARK_AS_COMPLETED,
} from "../store/action/type";
import { useMutation } from "@apollo/react-hooks";

function Todo({ insertedData }) {
  const [updatedTask, setupdatedTask] = useState("");

  const [iconVisibility, setVisibility] = useState("");
  const context = useContext(TodoContext); // Contetx
  var { loading, error, data } = useQuery(ALL_PERSONAL_TASKS);
  
  const [toggleIsCompleted, { updateloading, updateerror }, updatedData] = useMutation(TOGGLE_TASK_COMPLETION, {
    update: (
          proxy,
          {
            data: {
              update_tasks: { returning },
            },
          }
        ) => {
          setupdatedTask(returning[0].task_id)
        },
      
  });
  

  useEffect(() => {
    if (data && !loading) {
      context.dispatch({ type: FETCH_ALL_PERSONAL_TASK, payload: data.tasks });
    }
  }, [data]);

  const handleCheck = (taskId, is_completed) => {
    toggleIsCompleted({
      variables: {
        is_completed: !is_completed,
        task_id:taskId
      },
    });
    return context.dispatch({type: MARK_AS_COMPLETED, payload: taskId})
  };

  if (loading || updateloading) {
    return <Loader />;
  }

  return (
    <div className="w-full">
      {context.state.personal_tasks &&
        context.state.personal_tasks.map((task) => {
          if(task.is_completed) {
            return <></>
          }
          return (
            <div
              key={`task${task.task_id}`}
              className="text-sm py-4 flex justify-between items-center"
              onMouseEnter={() => setVisibility(task.task_id)}
              onMouseLeave={() => setVisibility(task.task_id)}
            >
              {task.task_id &&
              <>
              <div className="inline-flex items-center">
                <div onClick={() => handleCheck(task.task_id, task.is_completed)}>
                  {task.is_completed ? (
                    <i className="fas fa-check-circle cursor-pointer"></i>
                  ) : (
                    <i className="far fa-circle cursor-pointer"></i>
                  )}
                  <span className="ml-2 cursor-pointer">{task.title}</span>
                </div>
              </div>
              
              <div
                className={
                  iconVisibility === task.task_id
                    ? `w-2/12 visible`
                    : `invisible`
                }
              >
                <ul className="flex justify-evenly items-center w-full">
                  <li>
                    <i className="far fa-comment-alt" />
                  </li>
                  <li>
                    <i className="fas fa-pencil-alt" />
                  </li>
                </ul>
              </div></>}
            </div>
          );
        })}
    </div>
  );
}

export default Todo;
