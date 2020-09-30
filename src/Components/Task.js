import React from "react";

function Task() {
  return (
    <>
      {/* <!--Section container--> */}
      <section className="w-full lg:w-4/5">
        {/* <!--Title--> */}
        <h1 className="flex items-center font-sans font-bold break-normal text-gray-700 px-2 text-xl mt-12 lg:mt-0 md:text-2xl">
          Multi Section Form with Scrollspy
        </h1>

        {/* <!--divider--> */}
        <hr className="bg-gray-300 my-12" />

        {/* <!--Title--> */}
        <h2
          id="section1"
          className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl"
        >
          Section 1
        </h2>

        {/* <!--Card--> */}
        <div className="p-8 mt-6 lg:mt-0 leading-normal rounded shadow bg-white">
          <li>
            Using the CDN version of{" "}
            <a
              className="underline text-orange-600"
              href="https://github.com/tailwindcss/custom-forms"
              target="_blank"
            >
              Tailwind Custom Forms
            </a>
          </li>
          <li>This template uses jQuery for scrollspy</li>
        </div>
        {/* <!--/Card--> */}

        {/* <!--divider--> */}
        <hr className="bg-gray-300 my-12" />

        {/* <!--Title--> */}
        <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">
          Section 2
        </h2>

        {/* <!--Card--> */}
        <div id="section2" class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
          <form>
            <div className="md:flex mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  for="my-textfield"
                >
                  Text Field
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="form-input block w-full focus:bg-white"
                  id="my-textfield"
                  type="text"
                  value=""
                />
                <p className="py-2 text-sm text-gray-600">
                  add notes about populating the field
                </p>
              </div>
            </div>

            <div className="md:flex mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  for="my-select"
                >
                  Drop down field
                </label>
              </div>
              <div className="md:w-2/3">
                <select
                  name=""
                  className="form-select block w-full focus:bg-white"
                  id="my-select"
                >
                  <option value="Default">Default</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </select>

                <p className="py-2 text-sm text-gray-600">
                  add notes about populating the field
                </p>
              </div>
            </div>

            <div className="md:flex mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  for="my-textarea"
                >
                  Text Area
                </label>
              </div>
              <div className="md:w-2/3">
                <textarea
                  className="form-textarea block w-full focus:bg-white"
                  id="my-textarea"
                  value=""
                  rows="8"
                ></textarea>
                <p className="py-2 text-sm text-gray-600">
                  add notes about populating the field
                </p>
              </div>
            </div>

            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button
                  className="shadow bg-orange-700 hover:bg-orange-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* <!--/Card--> */}

        {/* <!--divider--> */}
        <hr className="bg-gray-300 my-12" />

        {/* <!--Title--> */}
        <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">
          Section 3
        </h2>

        {/* <!--Card--> */}
        <div id="section3" className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
          <form>
            <div className="md:flex mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  for="my-multiselect"
                >
                  Multi Select
                </label>
              </div>
              <div className="md:w-2/3">
                <select
                  className="form-multiselect block w-full"
                  multiple
                  id="my-multiselect"
                >
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                  <option>Option 5</option>
                </select>
                <p className="py-2 text-sm text-gray-600">
                  add notes about populating the field
                </p>
              </div>
            </div>

            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button
                  className="shadow bg-orange-700 hover:bg-orange-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* <!--/Card--> */}

        {/* <!--divider--> */}
        <hr className="bg-gray-300 my-12" />

        {/* <!--Title--> */}
        <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">
          Section 4
        </h2>

        {/* <!--Card--> */}
        <div id="section4" className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
          <form>
            <div className="md:flex mb-6">
              <div class="md:w-1/3">
                <label
                  className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  for="my-radio"
                >
                  Radio Buttons
                </label>
              </div>
              <div className="md:w-2/3">
                <div className="mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-indigo-600"
                      name="radioOption"
                      value="A"
                    />
                    <span className="ml-2">Radio A</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      className="form-radio"
                      name="radioOption"
                      value="B"
                    />
                    <span className="ml-2">Radio B</span>
                  </label>
                </div>
                <p className="py-2 text-sm text-gray-600">
                  add notes about populating the field
                </p>
              </div>
            </div>

            <div className="md:flex mb-6">
              <div className="md:w-1/3">
                <label
                  class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  for="my-checkbox"
                >
                  Checkboxes
                </label>
              </div>
              <div className="md:w-2/3">
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-indigo-600"
                      checked
                    />
                    <span className="ml-2">Option 1</span>
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-green-500"
                      checked
                    />
                    <span className="ml-2">Option 2</span>
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-pink-600"
                      checked
                    />
                    <span className="ml-2">Option 3</span>
                  </label>
                </div>
                <p className="py-2 text-sm text-gray-600">
                  add notes about populating the field
                </p>
              </div>
            </div>

            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button
                  className="shadow bg-orange-700 hover:bg-orange-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* <!--/Card--> */}

        {/* <!--divider--> */}
        <hr className="bg-gray-300 my-12" />

        {/* <!--Title--> */}
        <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">
          Section 5
        </h2>

        {/* <!--Card--> */}
        <div id="section5" className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
          <blockquote className="border-l-4 border-orange-600 italic my-4 pl-8 md:pl-12">
            Final confirmation disclaimer message etc
          </blockquote>

          <div className="pt-8">
            <button
              className="shadow bg-orange-700 hover:bg-orange-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mr-4"
              type="button"
            >
              Save
            </button>

            <button
              className="shadow bg-orange-100 hover:bg-orange-200 focus:shadow-outline focus:outline-none text-gray-700 font-bold py-2 px-4 rounded mr-4"
              type="button"
            >
              Additional Action
            </button>

            <button
              className="shadow bg-orange-100 hover:bg-orange-200 focus:shadow-outline focus:outline-none text-gray-700 font-bold py-2 px-4 rounded"
              type="button"
            >
              Additional Action
            </button>
          </div>
        </div>
        {/* <!--/Card--> */}
      </section>
      {/* <!--/Section container--> */}

      {/* <!--Back link --> */}
      <div className="w-full lg:w-4/5 lg:ml-auto text-base md:text-sm text-gray-600 px-4 py-24 mb-12">
        <span className="text-base text-orange-600 font-bold">&lt;</span>{" "}
        <a
          href="#"
          className="text-base md:text-sm text-orange-600 font-bold no-underline hover:underline"
        >
          Back link
        </a>
      </div>
    </>
  );
}
export default Task;
