import React, { useEffect, useState, useContext } from "react";
import {  useMutation } from "@apollo/react-hooks";
import { EDIT_PERSONAL_TASK_QUERY } from "../queries";
import { EDIT_PERSONAL_TASK } from "../store/action/type";
import { TodoContext } from "../App";


function EditTask({ task, setEditTask, setIsLoading }) {
  const context = useContext(TodoContext); // Contetx
  let [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    setTaskToEdit({ ...task });
  }, []);

  const [editTask, { loading, error }, editedTask] = useMutation(
    EDIT_PERSONAL_TASK_QUERY,
    {
      update: (
        proxy,
        {
          data: {
            update_tasks: { returning },
          },
        }
      ) => {
        context.dispatch({ type: EDIT_PERSONAL_TASK, payload: returning[0] });
        setEditTask(null);
        setIsLoading(false);
      },
    }
  );
  
  if(loading) {
    setIsLoading(true);
    return <></>
  }

  const handleSubmit = () => {
    console.log({
      title: taskToEdit.title,
      task_id: taskToEdit.task_id,
    });
    if (taskToEdit.task_id) {
      editTask({
        variables: {
          title: taskToEdit.title,
          task_id: taskToEdit.task_id,
        },
      });
    }

    return setTaskToEdit("");
  };

  

  return (
    <>
      {taskToEdit && (
        <div key={taskToEdit.task_id} className="w-full border-2 border-gray-300 rounded-md p-2">
          <input
            type="text"
            placeholder="e.g. Conference Wednesday at 15 #Meeting"
            className="block p-3 w-full text-sm mb-2 outline-none rounded-md   bg-gray-100"
            value={taskToEdit.title}
            onChange={(event) =>
              setTaskToEdit({ ...taskToEdit, title: event.target.value })
            }
          />
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded shadow text-sm focus:outline-none"
            onClick={handleSubmit}
          >
            Add task
          </button>
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded shadow m-2 text-sm outline-none"
            onClick={() => setEditTask("")}
          >
            Cancel
          </button>
        </div>
      )}
    </>
  );
}

export default EditTask;
