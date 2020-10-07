import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Inbox from "./Inbox";
import Projects from "./Projects";
import { ReactComponent as DashBoardLogo1 } from "../assets/images/dashBoardLogo1.svg";
import { ReactComponent as BigTodoistLogo } from "../assets/images/todoistLogoBig.svg";
import { ReactComponent as DashBoardDropDown } from "../assets/images/dashBoardDropDown.svg";


function Dashboard(props) {
  const [dropdown, setDropdown] = useState(false);
  const [activeList, setActiveList] = useState(null);
  const [activeComponent, setActiveComponent] = useState("");
  const activeDropdown = (active) => {
    setDropdown(active ? false : !dropdown);
  };
  const List = [
    { name: "Inbox", component: <Inbox /> },
    { name: "Projects", component: <Projects /> },
  ];
  const handleChange = (list) => {
    setActiveList(list.name);
    setActiveComponent(list.component);
  };

  useEffect(() => {
    setActiveList(List[0].name);
    setActiveComponent(List[0].component);

  },[]);

  return (
    <>
      <div className=" text-gray-900 tracking-wider leading-normal">
        <nav id="header" className="bg-white fixed w-full z-10 top-0 shadow">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between my-4">
            <div className="pl-4 md:pl-0">
              <Link
                className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
                to="/"
              >
                <BigTodoistLogo />
                TODOIST
                <br />
              </Link>
            </div>
            Welcome, Mayank
            <div className="pr-0 flex justify-end">
              <div className="flex relative inline-block float-right">
                <div className="relative inline-block text-left">
                  <div>
                    <span className="rounded-md shadow-sm">
                      <button
                        type="button"
                        className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
                        id="options-menu"
                        aria-haspopup="true"
                        aria-expanded="false"
                        onClick={() => activeDropdown()}
                        onBlur={() => activeDropdown(true)}
                      >
                        <DashBoardLogo1 />
                        <DashBoardDropDown />
                        {/* List of dropdown */}
                        <div
                          className={`${
                            dropdown ? "" : "hidden"
                          } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg`}
                        >
                          <div
                            className="rounded-md bg-white shadow-xs"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                          >
                            <div className="py-1">
                              <a
                                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                role="menuitem"
                              >
                                Setting
                              </a>
                              <a
                                onClick={() => props.data.logout()}
                                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                role="menuitem"
                              >
                                Log out
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* list end */}
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* <!--Container--> */}
        <div className="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
          <div className="w-full lg:w-1/5 px-6 text-xl text-gray-800 leading-normal">
            <p className="text-base font-bold py-2 lg:pb-6 text-gray-700">
              Menu
            </p>
            <div className="block lg:hidden sticky inset-0"></div>
            <div style={{ top: "6em" }} id="menu-content">
              <ul className="list-reset py-2 md:py-0">
                {List.map((list, index) => {
                  return (
                    <li
                      key={`list${index}`}
                      onClick={() => handleChange(list)}
                      className={`py-1 md:my-2 hover:bg-orange-100 lg:hover:bg-transparent cursor-pointer border-l-4 border-transparent ${
                        activeList === list.name
                          ? "font-bold border-orange-600"
                          : ""
                      }`}
                    >
                      <a className="block pl-4 align-middle text-gray-700 no-underline hover:text-orange-600">
                        <span className="pb-1 md:pb-0 text-sm">
                          {list.name}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* onclick active component will render */}
          {activeComponent}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
