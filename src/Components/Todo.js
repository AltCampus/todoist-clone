import React, { useState, useEffect } from "react";
import { ALL_PERSONAL_TASKS } from "../queries/index";
import { useQuery } from "@apollo/react-hooks";
import Loader from "./Loader";

function Todo({ insertedData }) {
  const [checked, setChecked] = useState(false);

  const [iconVisibility, setVisibility] = useState("");
  var { loading, error, data } = useQuery(ALL_PERSONAL_TASKS);

  if (insertedData && data && insertedData.title) {
    let isDataExisting = data.tasks.some(
      (task) => task.task_id === insertedData.task_id
    );
    if (!isDataExisting) {
      data.tasks = [...data.tasks, insertedData];
    }
    insertedData = null;
  }

  const handleCheck = () => {
    setChecked(!checked);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full">
      {data.tasks.map((task) => {
        return (
          <div
            key={`task${task.task_id}`}
            className="text-sm py-4 flex justify-between items-center"
            onMouseEnter={() => setVisibility(task.task_id)}
            onMouseLeave={() => setVisibility(task.task_id)}
          >
            <div className="inline-flex items-center">
              <div onClick={handleCheck}>
                {task.is_completed || checked ? (
                  <i className="fas fa-check-circle cursor-pointer"></i>
                ) : (
                  <i className="far fa-circle cursor-pointer"></i>
                )}
                <span className="ml-2 cursor-pointer">{task.title}</span>
              </div>
            </div>
            {/*  */}
            <div
              className={
                iconVisibility === task.task_id ? `w-2/12 visible` : `invisible`
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
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Todo;
