import React, { useEffect, useContext } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import SingleProject from "./SingleProject";
import { TodoContext } from "../App";

import { CREATE_PROJECT_QUERY, FETCH_ALL_PROJECTS } from "../queries";
import { CREATE_PROJECT, ALL_PROJECTS } from "../store/action/type";

function Projects() {
  const context = useContext(TodoContext); // Contetx
  const [projectInputBox, setProjectInputBox] = useState(false);
  const [input, setInput] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [singleProject, showSingleProject] = useState("");
  var { loading, error, data } = useQuery(FETCH_ALL_PROJECTS);

  useEffect(() => {
    if (data) {
      return context.dispatch({ type: ALL_PROJECTS, payload: data.projects });
    }
  }, [data]);

  const [
    createProject,
    { createProjectLoading, createProjectError },
    newProject,
  ] = useMutation(CREATE_PROJECT_QUERY, {
    update: (
      proxy,
      {
        data: {
          insert_projects: { returning },
        },
      }
    ) => {
      // setInsertedDats(returning[0]);
      if (returning[0])
        context.dispatch({ type: CREATE_PROJECT, payload: returning[0] });
        
    },
  });

  // const handleInput = (e) => {
  //   setInput();
  // };

  const handleSubmit = () => {
    
    createProject({
      variables: {
        title: input,
        project_id: Math.floor(Math.random(1000) * 13 * 19) + "",
      },
    });
    setInput("");
  };

  const handleClick = (projectIndex) => {
    setIsClicked(true);
    showSingleProject(projectIndex);
    
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
                onClick={() => setProjectInputBox(!projectInputBox)}
              >
                <i className="fas fa-plus"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {projectInputBox ? (
        <div className="w-full border-2 border-gray-300 rounded-md p-2">
          <input
            type="text"
            placeholder="e.g. Conference Wednesday at 15 #Meeting"
            className="block p-3 w-full text-sm mb-2 outline-none rounded-md   bg-gray-100"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded shadow text-sm focus:outline-none"
            onClick={handleSubmit}
          >
            Create project
          </button>
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded shadow m-2 text-sm outline-none"
            onClick={() => setProjectInputBox(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        ""
      )}
      {context.state.projects &&
        context.state.projects.map((project,index) => {
          return (
            <div
              className="items-center mt-6"
              onClick={() => handleClick(index)}
            >
              <div>
                <span className="ml-2 cursor-pointer">{project.title}</span>
              </div>
            </div>
          );
        })}
    </div>
  ) : (
    <SingleProject singleProjectIndex={singleProject} setIsClicked={setIsClicked} />
  );
}
export default Projects;
