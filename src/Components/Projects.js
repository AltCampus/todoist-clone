import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import SingleProject from "./SingleProject";

function Projects() {
  const [createProjects, setCreateProjects] = useState(false);
  const [input, setInput] = useState({ title: "" });
  const [isClicked, setIsClicked] = useState(false);
  const [singleProject, showSingleProject] = useState("");

  const dummyProjects = [
    { id: 0, title: "Project #1", Todo: "Todo #1" },
    { id: 1, title: "Project #2", Todo: "Todo #2" },
    { id: 2, title: "Project #3", Todo: "Todo #3" },
  ];

  const handleInput = (e) => {
    setInput({ ...input, title: e.target.value });
  };

  const handleSubmit = () => {
    console.log("working button");
  };

  const handleClick = (singleProject) => {
    setIsClicked(true);
    showSingleProject(singleProject);
    console.log(singleProject);
  };

  return !isClicked ? (
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
                onClick={() => setCreateProjects(!createProjects)}
              >
                <i className="fas fa-plus"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {createProjects ? (
        <div className="w-full border-2 border-gray-300 rounded-md p-2">
          <input
            type="text"
            placeholder="e.g. Conference Wednesday at 15 #Meeting"
            className="block p-3 w-full text-sm mb-2 outline-none rounded-md   bg-gray-100"
            value={input.title}
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
            // onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      ) : (
        ""
      )}
      {dummyProjects.map((singleProject) => {
        return (
          <div
            className="items-center mt-6"
            onClick={() => handleClick(singleProject)}
          >
            <div>
              <span className="ml-2 cursor-pointer">{singleProject.title}</span>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <SingleProject
      singleProject={singleProject}
      setIsClicked={setIsClicked}
    />
  );
}
export default Projects;
