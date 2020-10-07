import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Todo from "./Todo";

function SingleProject(props) {
  const [input, setInput] = useState(false);
  const [tasks, setTasks] = useState("initialTask");
  const [taskFilteredOn, setTaskFilteredOn] = useState("All Completed Task");
  const [dropDown, setdropDown] = useState(false);
  const [showTask, setCompletedTask] = useState(false);
  console.log(props);
  return (
    <>
      {/* <div>
      <h1>Hello I am a solo project.</h1>
      <button
        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-4 text-sm"
        onClick={() => props.setIsClicked(false)}
      >
        Show all
      </button>
    </div> */}
      <div className="container relative px-2 py-3 leading-none navbar-expand-lg mb-3 w-9/12">
        <div className="w-full  mx-auto flex flex-wrap justify-between items-center text-lg">
          <div className="w-full relative flex lg:w-auto lg:static lg:block">
            <NavLink
              className="text-sm font-bold inline-block mr-4  whitespace-no-wrap uppercase text-black"
              to="#pablo"
            >
              Projects
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
                  // onClick={showDropdown}
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
                          // onClick={showCompleted}
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
              // onChange={handleInput}
            />
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded shadow text-sm focus:outline-none"
              // onClick={handleSubmit}
            >
              Add task
            </button>
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded shadow m-2 text-sm outline-none"
              // onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-4 text-sm"
            onClick={() => props.setIsClicked(false)}
          >
            Show all
          </button>
        )}
      </div>
    </>
  );
}

export default SingleProject;
