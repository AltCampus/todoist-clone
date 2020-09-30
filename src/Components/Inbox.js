import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ADD_PERSONAL_TASK } from "../queries/index";

import { useMutation } from "@apollo/react-hooks";

import Todo from "./Todo";

function Inbox() {
  const initialTask = { title: "", is_completed: false };

  const [input, setInput] = useState(false);
  const [tasks, setTasks] = useState(initialTask);
  const [insertedData, setInsertedDats] = useState({});
  const [addTask, { loading, error }, data] = useMutation(ADD_PERSONAL_TASK, {
    update: (
      proxy,
      {
        data: {
          insert_tasks: { returning },
        },
      }
    ) => {
      setInsertedDats(returning[0]);
    },
  });

  const handleInput = (e) => {
    setTasks({ ...tasks, title: e.target.value });
  };

  const handleSubmit = () => {
    addTask({
      variables: {
        title: tasks.title,
        task_id: Math.floor(Math.random(1000) * 13 * 19) + "",
      },
    });
    setInput("");
    return setTasks("");
  };

  const handleCancel = () => {
    setInput(false);
    setTasks(initialTask);
  };

  return (
    <>
      <div className="container relative px-2 py-3 leading-none navbar-expand-lg mb-3 w-9/12">
        <div className="w-full  mx-auto flex flex-wrap justify-between items-center text-lg">
          <div className="w-full relative flex lg:w-auto lg:static lg:block">
            <NavLink
              className="text-sm font-bold inline-block mr-4  whitespace-no-wrap uppercase text-black"
              to="#pablo"
            >
              Inbox
            </NavLink>
          </div>
          <div
            className={"lg:flex flex-grow items-start"}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  to="#pablo"
                >
                  <i className="far fa-envelope-open"></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  to="#pablo"
                  onClick={() => setInput(!input)}
                >
                  <i className="fas fa-plus"></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  to="#pablo"
                >
                  <i className="fas fa-ellipsis-h"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <Todo insertedData={insertedData || null} />
        {input ? (
          <div className="w-full border-2 border-gray-300 rounded-md p-2">
            <input
              type="text"
              placeholder="e.g. Conference Wednesday at 15 #Meeting"
              className="block p-3 w-full text-sm mb-2 outline-none rounded-md   bg-gray-100"
              value={tasks.title}
              onChange={handleInput}
            />
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded shadow text-sm focus:outline-none"
              onClick={handleSubmit}
            >
              Add task
            </button>
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded shadow m-2 text-sm outline-none"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
export default Inbox;
