import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import Task from "./Task";
import Todo from "./Todo";

function Inbox() {
  const initialTask = { title: "", is_completed: false };
  const [input, setInput] = useState(false);
  const [tasks, setTasks] = useState(initialTask);

  const handleInput = (e) => {
    setTasks({ ...tasks, title: e.target.value });
  };

  const handleSubmit = () => {
    alert(tasks.title);
  };

  const handleCancel = () => {
    setInput(false);
    setTasks(initialTask);
  };

  return (
    <>
      <div className="relative px-2 py-3 leading-none navbar-expand-lg mb-3 w-9/12">
        <Todo />
        <div className="container px-4 mx-auto h-4 flex flex-wrap justify-between items-start">
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
                  <i class="far fa-envelope-open"></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  to="#pablo"
                  onClick={() => setInput(!input)}
                >
                  <i class="fas fa-plus"></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  to="#pablo"
                >
                  <i class="fas fa-ellipsis-h"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {input ? (
          <div className="w-full m-4">
            <input
              type="text"
              placeholder="e.g. Conference Wednesday at 15 #Meeting"
              className="block p-3 w-full text-sm"
              value={tasks.title}
              onChange={handleInput}
            />
            <button
              class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded shadow m-2 text-sm"
              onClick={handleSubmit}
            >
              Add task
            </button>
            <button
              class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded shadow m-2 text-sm"
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
