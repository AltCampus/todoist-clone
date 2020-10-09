import React, { useState, useEffect, useContext } from "react";
import { ALL_PROJECT_TASKS } from "../queries/index";
import { useQuery, useMutation } from "@apollo/react-hooks";
import Loader from "./Loader";
import { TodoContext } from "../App";
import {
  TOGGLE_TASK_COMPLETION,
  DELETE_PROJECT_TASK_QUERY,
} from "../queries/index";
import {
  ADD_PROJECT_TASK,
  MARK_AS_COMPLETED,
  MARK_PROJECT_TASK_AS_COMPLETED,
  DELETE_PROJECT_TASK,
} from "../store/action/type";

import EditTask from "./EditTask";
import EditProjectTasks from "./EditProjectTasks";

function ProjectTasks(props) {
  const [editTask, setEditTask] = useState(null);
  const [tasks, setTasks] = useState([]);
  const context = useContext(TodoContext); // Context
  //   var { loading, error, data } = useQuery(ALL_PROJECT_TASKS,{
  //     variables: { project_id : (props.project && props.project.project_id)||"" }
  //   });
  var [isLoading, setIsLoading] = useState(false);
  const [project, setProject] = useState(null);

  useEffect(() => {
    let tasks = context.state.projects[props.singleProjectIndex].tasks;
    setTasks(tasks);
  }, [tasks, context.state]);

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
        type: MARK_PROJECT_TASK_AS_COMPLETED,
        payload: returning[0],
      });
    },
  });

  const [
    deleteTask,
    { deleteLoading, errorInDelete },
    deletedData,
  ] = useMutation(DELETE_PROJECT_TASK_QUERY, {
    update: (
      proxy,
      {
        data: {
          delete_tasks: { returning },
        },
      }
    ) => {
      context.dispatch({ type: DELETE_PROJECT_TASK, payload: returning[0] });
    },
  });

  if (updateloading || isLoading || deleteLoading) {
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
          project_id:
            context.state.projects[props.singleProjectIndex].project_id,
        },
      });
    }
  };

  if (updateloading || isLoading || deleteLoading) {
    return <Loader />;
  }

  return (
    <div className="w-full">
      {tasks?.map((task) =>
        task.is_completed !== props.isShowingCompletedTasks ? (
          <React.Fragment key={task.task_id}></React.Fragment>
        ) : (
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
                              props.isShowingCompletedTasks
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
              <EditProjectTasks
                task={editTask}
                setEditTask={setEditTask}
                setIsLoading={setIsLoading}
              />
            )}
          </React.Fragment>
        )
      )}
    </div>
  );
}

export default ProjectTasks;
