import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ADD_PERSONAL_TASK } from "../queries/index";
import CompletedTasks from "./CompletedTasks";
import { TodoContext } from "../App";
import { INSERT_PERSONAL_TASK } from "../store/action/type";

import { useMutation } from "@apollo/react-hooks";
import Todo from "./Todo";

function Inbox() {
  const initialTask = { title: "", is_completed: false };
  const context = useContext(TodoContext); // Contetx
  const [input, setInput] = useState(false);
  const [tasks, setTasks] = useState(initialTask);
  const [taskFilteredOn, setTaskFilteredOn] = useState("All Completed Task");
  const [dropDown, setdropDown] = useState(false);
  const [showTask, setCompletedTask] = useState(false);

  const showDropdown = () => {
    setdropDown(!dropDown);
  };

  const showCompleted = () => {
    setCompletedTask(!showTask);
    setdropDown(!dropDown);
    if (taskFilteredOn === "All Completed Task") {
      setTaskFilteredOn("All Incomplete Task");
    } else {
      setTaskFilteredOn("All Completed Task");
    }
  };

  const [addTask, { loading, error }, data] = useMutation(ADD_PERSONAL_TASK, {
    update: (
      proxy,
      {
        data: {
          insert_tasks: { returning },
        },
      }
    ) => {
      // setInsertedDats(returning[0]);
      if (returning[0])
        context.dispatch({ type: INSERT_PERSONAL_TASK, payload: returning[0] });
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
              <li className="nav-item ml-1">
                <i
                  class="fas fa-ellipsis-v cursor-pointer"
                  onClick={showDropdown}
                />
                {dropDown ? (
                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
                    <div className="rounded-md bg-white shadow-xs">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <NavLink
                          to="#"
                          className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                          role="menuitem"
                          onClick={showCompleted}
                        >
                          Show {taskFilteredOn}
                        </NavLink>
                        <NavLink
                          to="#"
                          className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                          role="menuitem"
                        >
                          Delete
                        </NavLink>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>
        </div>
        <Todo isShowingCompletedTasks={showTask} />
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
