import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import todoistLogin from "../assets/images/todoist-login.webp";

function Login() {
  const [loginDetails, setLoginDetails] = useState({
    adminSecret: "",
    endpoint: "",
  });

  const handleInput = ({ target: { name, value } }) => {
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("adminSecret", loginDetails.adminSecret);
    localStorage.setItem("endPoint", loginDetails.endpoint);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${todoistLogin})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity:0.95,
        height: "100vh",
      }}
      className="w-full"
    >
      <div className="container mx-auto p-8 flex w-full ">
        <div className="absolute max-w-md max-w-4xl mx-auto pt-12 px-8 top-0 right-0 place-self-start">
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl bg-opacity-75">
            <div className="p-8">
              <form>
                <h1 className="text-4xl text-center mb-12 font-thin">
                  Todoist
                </h1>
                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium text-gray-600">
                    Admin Secret
                  </label>

                  <input
                    type="text"
                    name="adminSecret"
                    value={loginDetails.adminSecret}
                    className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none bg-opacity-70"
                    placeholder="Enter valid admin secret"
                    onChange={handleInput}
                    required
                  />
                </div>

                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium text-gray-600">
                    End Point
                  </label>

                  <input
                    type="text"
                    name="endpoint"
                    value={loginDetails.endpoint}
                    className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none bg-opacity-70"
                    placeholder="Enter valid endpoint"
                    onChange={handleInput}
                    required
                  />
                </div>

                {/* <div className="mb-5">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-600"
                  >
                    Password
                  </label>

                  <input
                    type="text"
                    name="username"
                    value={loginDetails.username}
                    className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none bg-opacity-70"
                    placeholder="Enter username"
                    onChange={handleInput}
                  />
                </div> */}
                {loginDetails.adminSecret && loginDetails.endpoint ? (
                  <button
                    type="submit"
                    className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow bg-opacity-70"
                    onClick={handleSubmit}
                  >
                    <NavLink to="/dashboard">Login</NavLink>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-full p-3 mt-4 bg-blue-500 text-white rounded shadow bg-opacity-70 cursor-not-allowed"
                    disabled
                  >
                    Login
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
