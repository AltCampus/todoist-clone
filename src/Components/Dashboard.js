import React, { useState } from "react";
import { Link } from "react-router-dom";
import Filters from "./Filters";
import Inbox from "./Inbox";
import Today from "./Today";
import Upcoming from "./Upcoming";
import Projects from "./Projects";
import Labels from "./Labels";

function Dashboard(props) {
  const [dropdown, setDropdown] = useState(false);
  const [activeList, setActiveList] = useState(null);
  const [activeComponent, setActiveComponent] = useState("");
  const activeDropdown = (active) => {
    setDropdown(active ? false : !dropdown);
  };
  const List = [
    { name: "Inbox", component: <Inbox /> },
    { name: "Today", component: <Today /> },
    { name: "Upcoming", component: <Upcoming /> },
    { name: "Projects", component: <Projects /> },
    { name: "Labels", component: <Labels /> },
    { name: "Filters", component: <Filters /> },
  ];
  const handleChange = (list) => {
    setActiveList(list.name);
    setActiveComponent(list.component);
  };
  console.log(props);
  return (
    <>
      <div class=" text-gray-900 tracking-wider leading-normal">
        <nav id="header" class="bg-white fixed w-full z-10 top-0 shadow">
          <div class="w-full container mx-auto flex flex-wrap items-center justify-between my-4">
            <div class="pl-4 md:pl-0">
              <Link
                className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
                to="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Capa_1"
                  enable-background="new 0 0 512 512"
                  height="51"
                  viewBox="0 0 512 512"
                  width="51"
                >
                  <g>
                    <path
                      d="m324.5 269.5-227 190h-90c0 24.853 20.147 45 45 45h317z"
                      fill="#c4f3ff"
                    />
                    <path
                      d="m324.5 269.5v190c0 24.853 20.147 45 45 45h30v-235z"
                      fill="#acd2f6"
                    />
                    <path
                      d="m384.5 37.5v464.429c4.693 1.659 9.739 2.571 15 2.571 24.853 0 45-20.147 45-45v-452h-30z"
                      fill="#c4f3ff"
                    />
                    <path
                      d="m97.5 7.5v452h257c0 19.592 12.524 36.25 30 42.429 17.476-6.179 30-22.837 30-42.429v-452z"
                      fill="#fff"
                    />
                    <path
                      d="m474.5 369.5h-30l-30 30 30 30h30c16.569 0 30-13.431 30-30s-13.431-30-30-30z"
                      fill="#ff336d"
                    />
                    <path
                      d="m37.5 381.273-17.904 3.513c-6.893 1.354-12.096 7.424-12.096 14.714s5.203 13.36 12.096 14.713l17.904 3.513 20-18.227z"
                      fill="#4e4cd3"
                    />
                    <path
                      d="m97.5 369.5-60 11.773v36.454l60 11.773 30-30z"
                      fill="#ffe7b5"
                    />
                    <path d="m414.5 369.5-30 30 30 30h30v-60z" fill="#fff" />
                    <path
                      d="m97.5 399.5v30h317v-30l-158.5-20z"
                      fill="#ffb44e"
                    />
                    <path d="m97.5 369.5h317v30h-317z" fill="#ffd06a" />
                    <path d="m334.196 178.803c1.465 1.464 3.385 2.197 5.304 2.197s3.839-.732 5.304-2.197l30-30c2.929-2.929 2.929-7.678 0-10.606-2.93-2.929-7.678-2.929-10.607 0l-24.697 24.697-9.696-9.697c-2.93-2.929-7.678-2.929-10.607 0s-2.929 7.678 0 10.606z" />
                    <path d="m334.196 118.803c1.465 1.464 3.385 2.197 5.304 2.197s3.839-.732 5.304-2.197l30-30c2.929-2.929 2.929-7.678 0-10.606-2.93-2.929-7.678-2.929-10.607 0l-24.697 24.697-9.696-9.697c-2.93-2.929-7.678-2.929-10.607 0s-2.929 7.678 0 10.606z" />
                    <path d="m172.5 166h122c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-122c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5z" />
                    <path d="m334.196 238.803c1.465 1.464 3.385 2.197 5.304 2.197s3.839-.732 5.304-2.197l30-30c2.929-2.929 2.929-7.678 0-10.606-2.93-2.929-7.678-2.929-10.607 0l-24.697 24.697-9.696-9.697c-2.93-2.929-7.678-2.929-10.607 0s-2.929 7.678 0 10.606z" />
                    <path d="m334.196 298.803c1.465 1.464 3.385 2.197 5.304 2.197s3.839-.732 5.304-2.197l30-30c2.929-2.929 2.929-7.678 0-10.606-2.93-2.929-7.678-2.929-10.607 0l-24.697 24.697-9.696-9.697c-2.93-2.929-7.678-2.929-10.607 0s-2.929 7.678 0 10.606z" />
                    <path d="m172.5 106h122c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-122c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5z" />
                    <path d="m172.5 226h122c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-122c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5z" />
                    <path d="m172.5 286h122c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-122c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5z" />
                    <path d="m474.5 362h-22.5v-354.5c0-4.142-3.357-7.5-7.5-7.5h-347c-4.143 0-7.5 3.358-7.5 7.5v355.828l-71.849 14.099c-10.517 2.065-18.151 11.348-18.151 22.073s7.634 20.008 18.151 22.073l77.904 15.287c.476.093.96.14 1.444.14h339.501v22.5c0 20.678-16.822 37.5-37.5 37.5s-37.5-16.822-37.5-37.5c0-4.142-3.357-7.5-7.5-7.5h-347c-4.143 0-7.5 3.358-7.5 7.5 0 28.949 23.552 52.5 52.5 52.5h347c28.948 0 52.5-23.551 52.5-52.5v-22.5h22.5c20.678 0 37.5-16.822 37.5-37.5s-16.822-37.5-37.5-37.5zm-422 135c-18.109 0-33.262-12.905-36.747-30h331.781c1.677 11.673 7.208 22.118 15.259 30zm384.5-482v347h-332v-347zm-332 392h302v15h-302zm302-15h-302v-15h302zm-317 28.385-45-8.83v-24.111l45-8.83zm-75-20.885c0-3.574 2.54-6.667 6.04-7.354l8.96-1.758v18.224l-8.96-1.758c-3.5-.687-6.04-3.78-6.04-7.354zm407 22.5v-45h15v45zm52.5 0h-22.5v-45h22.5c12.406 0 22.5 10.093 22.5 22.5s-10.094 22.5-22.5 22.5z" />
                  </g>
                </svg>
                TODOIST
                <br />
              </Link>
            </div>
            Welcome, {props.data.user.nickname}
            <div class="pr-0 flex justify-end">
              <div class="flex relative inline-block float-right">
                <div class="relative inline-block text-left">
                  <div>
                    <span class="rounded-md shadow-sm">
                      <button
                        type="button"
                        class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
                        id="options-menu"
                        aria-haspopup="true"
                        aria-expanded="false"
                        onClick={() => activeDropdown()}
                        onBlur={() => activeDropdown(true)}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          class="gear_normal"
                        >
                          <path
                            fill="currentColor"
                            fill-rule="nonzero"
                            d="M16.523 6.38l1.193-.598a1 1 0 0 1 1.314.394l1.529 2.648a1 1 0 0 1-.317 1.335l-1.204.793a7.263 7.263 0 0 1-.026 2.079l1.23.81a1 1 0 0 1 .317 1.335l-1.529 2.648a1 1 0 0 1-1.314.394l-1.345-.674a7.194 7.194 0 0 1-1.757 1.027l-.087 1.488a1 1 0 0 1-.998.941H10.47a1 1 0 0 1-.998-.941L9.39 18.65a7.188 7.188 0 0 1-1.883-1.045l-1.223.613a1 1 0 0 1-1.314-.394l-1.529-2.648a1 1 0 0 1 .317-1.335l1.05-.692a7.242 7.242 0 0 1-.03-2.318l-1.02-.672a1 1 0 0 1-.317-1.335L4.97 6.176a1 1 0 0 1 1.314-.394l1.068.536a7.191 7.191 0 0 1 2.05-1.173l.071-1.204A1 1 0 0 1 10.471 3h3.058a1 1 0 0 1 .998.941l.075 1.283a7.197 7.197 0 0 1 1.921 1.156zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                          ></path>
                        </svg>
                        <svg
                          class="-mr-1 ml-2 h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        {/* List of dropdown */}
                        <div
                          class={`${
                            dropdown ? "" : "hidden"
                          } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg`}
                        >
                          <div
                            class="rounded-md bg-white shadow-xs"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                          >
                            <div class="py-1">
                              <a
                                class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                role="menuitem"
                              >
                                Setting
                              </a>
                              <a
                                onClick={() => props.data.logout()}
                                class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
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
        <div class="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
          <div class="w-full lg:w-1/5 px-6 text-xl text-gray-800 leading-normal">
            <p class="text-base font-bold py-2 lg:pb-6 text-gray-700">Menu</p>
            <div class="block lg:hidden sticky inset-0"></div>
            <div style={{ top: "6em" }} id="menu-content">
              <ul class="list-reset py-2 md:py-0">
                {List.map((list) => {
                  return (
                    <li
                      onClick={() => handleChange(list)}
                      class={`py-1 md:my-2 hover:bg-orange-100 lg:hover:bg-transparent border-l-4 border-transparent ${
                        activeList == list.name
                          ? "font-bold border-orange-600"
                          : ""
                      }`}
                    >
                      <a class="block pl-4 align-middle text-gray-700 no-underline hover:text-orange-600">
                        <span class="pb-1 md:pb-0 text-sm">{list.name}</span>
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
