import React from "react";

function Task() {
  return (
    <>
      {/* <!--Section container--> */}
      <section class="w-full lg:w-4/5">
        {/* <!--Title--> */}
        <h1 class="flex items-center font-sans font-bold break-normal text-gray-700 px-2 text-xl mt-12 lg:mt-0 md:text-2xl">
          Multi Section Form with Scrollspy
        </h1>

        {/* <!--divider--> */}
        <hr class="bg-gray-300 my-12" />

        {/* <!--Title--> */}
        <h2
          id="section1"
          class="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl"
        >
          Section 1
        </h2>

        {/* <!--Card--> */}
        <div class="p-8 mt-6 lg:mt-0 leading-normal rounded shadow bg-white">
          <li>
            Using the CDN version of{" "}
            <a
              class="underline text-orange-600"
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
        <hr class="bg-gray-300 my-12" />

        {/* <!--Title--> */}
        <h2 class="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">
          Section 2
        </h2>

        {/* <!--Card--> */}
        <div id="section2" class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
          <form>
            <div class="md:flex mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  for="my-textfield"
                >
                  Text Field
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="form-input block w-full focus:bg-white"
                  id="my-textfield"
                  type="text"
                  value=""
                />
                <p class="py-2 text-sm text-gray-600">
                  add notes about populating the field
                </p>
              </div>
            </div>

            <div class="md:flex mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  for="my-select"
                >
                  Drop down field
                </label>
              </div>
              <div class="md:w-2/3">
                <select
                  name=""
                  class="form-select block w-full focus:bg-white"
                  id="my-select"
                >
                  <option value="Default">Default</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </select>

                <p class="py-2 text-sm text-gray-600">
                  add notes about populating the field
                </p>
              </div>
            </div>

            <div class="md:flex mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  for="my-textarea"
                >
                  Text Area
                </label>
              </div>
              <div class="md:w-2/3">
                <textarea
                  class="form-textarea block w-full focus:bg-white"
                  id="my-textarea"
                  value=""
                  rows="8"
                ></textarea>
                <p class="py-2 text-sm text-gray-600">
                  add notes about populating the field
                </p>
              </div>
            </div>

            <div class="md:flex md:items-center">
              <div class="md:w-1/3"></div>
              <div class="md:w-2/3">
                <button
                  class="shadow bg-orange-700 hover:bg-orange-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
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
        <hr class="bg-gray-300 my-12" />

        {/* <!--Title--> */}
        <h2 class="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">
          Section 3
        </h2>

        {/* <!--Card--> */}
        <div id="section3" class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
          <form>
            <div class="md:flex mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  for="my-multiselect"
                >
                  Multi Select
                </label>
              </div>
              <div class="md:w-2/3">
                <select
                  class="form-multiselect block w-full"
                  multiple
                  id="my-multiselect"
                >
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                  <option>Option 5</option>
                </select>
                <p class="py-2 text-sm text-gray-600">
                  add notes about populating the field
                </p>
              </div>
            </div>

            <div class="md:flex md:items-center">
              <div class="md:w-1/3"></div>
              <div class="md:w-2/3">
                <button
                  class="shadow bg-orange-700 hover:bg-orange-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
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
        <hr class="bg-gray-300 my-12" />

        {/* <!--Title--> */}
        <h2 class="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">
          Section 4
        </h2>

        {/* <!--Card--> */}
        <div id="section4" class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
          <form>
            <div class="md:flex mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  for="my-radio"
                >
                  Radio Buttons
                </label>
              </div>
              <div class="md:w-2/3">
                <div class="mt-2">
                  <label class="inline-flex items-center">
                    <input
                      type="radio"
                      class="form-radio text-indigo-600"
                      name="radioOption"
                      value="A"
                    />
                    <span class="ml-2">Radio A</span>
                  </label>
                  <label class="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      class="form-radio"
                      name="radioOption"
                      value="B"
                    />
                    <span class="ml-2">Radio B</span>
                  </label>
                </div>
                <p class="py-2 text-sm text-gray-600">
                  add notes about populating the field
                </p>
              </div>
            </div>

            <div class="md:flex mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  for="my-checkbox"
                >
                  Checkboxes
                </label>
              </div>
              <div class="md:w-2/3">
                <div>
                  <label class="inline-flex items-center">
                    <input
                      type="checkbox"
                      class="form-checkbox text-indigo-600"
                      checked
                    />
                    <span class="ml-2">Option 1</span>
                  </label>
                </div>
                <div>
                  <label class="inline-flex items-center">
                    <input
                      type="checkbox"
                      class="form-checkbox text-green-500"
                      checked
                    />
                    <span class="ml-2">Option 2</span>
                  </label>
                </div>
                <div>
                  <label class="inline-flex items-center">
                    <input
                      type="checkbox"
                      class="form-checkbox text-pink-600"
                      checked
                    />
                    <span class="ml-2">Option 3</span>
                  </label>
                </div>
                <p class="py-2 text-sm text-gray-600">
                  add notes about populating the field
                </p>
              </div>
            </div>

            <div class="md:flex md:items-center">
              <div class="md:w-1/3"></div>
              <div class="md:w-2/3">
                <button
                  class="shadow bg-orange-700 hover:bg-orange-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
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
        <hr class="bg-gray-300 my-12" />

        {/* <!--Title--> */}
        <h2 class="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">
          Section 5
        </h2>

        {/* <!--Card--> */}
        <div id="section5" class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
          <blockquote class="border-l-4 border-orange-600 italic my-4 pl-8 md:pl-12">
            Final confirmation disclaimer message etc
          </blockquote>

          <div class="pt-8">
            <button
              class="shadow bg-orange-700 hover:bg-orange-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mr-4"
              type="button"
            >
              Save
            </button>

            <button
              class="shadow bg-orange-100 hover:bg-orange-200 focus:shadow-outline focus:outline-none text-gray-700 font-bold py-2 px-4 rounded mr-4"
              type="button"
            >
              Additional Action
            </button>

            <button
              class="shadow bg-orange-100 hover:bg-orange-200 focus:shadow-outline focus:outline-none text-gray-700 font-bold py-2 px-4 rounded"
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
      <div class="w-full lg:w-4/5 lg:ml-auto text-base md:text-sm text-gray-600 px-4 py-24 mb-12">
        <span class="text-base text-orange-600 font-bold">&lt;</span>{" "}
        <a
          href="#"
          class="text-base md:text-sm text-orange-600 font-bold no-underline hover:underline"
        >
          Back link
        </a>
      </div>
    </>
  );
}
export default Task;
