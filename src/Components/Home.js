import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Home(props) {
  console.log(props);
  const [name, setName] = React.useState("Piyush");
  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <nav id="header" className="w-full z-30 top-0 py-1">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
          <label for="menu-toggle" className="cursor-pointer md:hidden block">
            <svg
              className="fill-current text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div
            className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
            id="menu"
          >
            <nav>
              <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                <li>
                  <Link
                    className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                    to=""
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                    to=""
                  >
                    For Team
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="order-1 md:order-2">
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
                  <path d="m97.5 399.5v30h317v-30l-158.5-20z" fill="#ffb44e" />
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
            </Link>
          </div>

          <div
            className="order-2 md:order-3 flex items-center"
            id="nav-content"
          >
            {props.data.isAuthenticated ? (
              <>
                Welcome, {props.data.user.nickname}
                <div className="inline-block no-underline hover:text-black hover:underline py-2 px-4">
                  <Link to="/dashboard">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Capa_1"
                      enable-background="new 0 0 512 512"
                      height="31"
                      viewBox="0 0 512 512"
                      width="31"
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
                        <path
                          d="m414.5 369.5-30 30 30 30h30v-60z"
                          fill="#fff"
                        />
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
                  </Link>
                </div>
                <button
                  className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                  onClick={() => {
                    props.data.logout({ returnTo: "http://localhost:3000" });
                  }}
                >
                  Log out
                </button>
              </>
            ) : (
              <button
                className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                onClick={props.data.loginWithRedirect}
              >
                Log in
              </button>
            )}
          </div>
        </div>
      </nav>
      <section
        className="w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right"
        style={{
          maxWidth: "1600px",
          height: "32rem",
          backgroundImage:
            "url('https://wallpaperstream.com/wallpapers/thumbnails/black-and-white/Bernese-Mountain-Black-and-White-Wallpaper_thumb.jpg')",
        }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col w-full lg:w-1/2 justify-center items-start  px-6 tracking-wide">
            <h1 className="text-black text-2xl my-4">
              Free up your mental space
            </h1>
            <Link
              className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
              to="/signup"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="container py-8 px-6 mx-auto">
          <Link
            className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8"
            to=""
          >
            About
          </Link>

          <p className="mt-8 mb-8">
            Regain clarity and calmness by getting all those tasks out of your
            head and onto your to-do list (no matter where you are or what
            device you use).
            <br />
          </p>

          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur{" "}
            <Link to="">random link</Link> adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Vel risus
            commodo viverra maecenas accumsan lacus vel facilisis volutpat.
            Vitae aliquet nec ullamcorper sit. Nullam eget felis eget nunc
            lobortis mattis aliquam. In est ante in nibh mauris. Egestas congue
            quisque egestas diam in. Facilisi nullam vehicula ipsum a arcu. Nec
            nam aliquam sem et tortor consequat. Eget mi proin sed libero enim
            sed faucibus turpis in. Hac habitasse platea dictumst quisque. In
            aliquam sem fringilla ut. Gravida rutrum quisque non tellus orci ac
            auctor augue mauris. Accumsan lacus vel facilisis volutpat est velit
            egestas dui id. At tempor commodo ullamcorper a. Volutpat commodo
            sed egestas egestas fringilla. Vitae congue eu consequat ac.
          </p>
        </div>
      </section>
      <footer className="container mx-auto bg-white py-8 border-t border-gray-400">
        <div className="container flex px-3 py-8 ">
          <div className="w-full mx-auto flex flex-wrap">
            <div className="flex w-full lg:w-1/2 ">
              <div className="px-3 md:px-0">
                <h3 className="font-bold text-gray-900">About</h3>
                <p className="py-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas vel mi ut felis tempus commodo nec id erat.
                  Suspendisse consectetur dapibus velit ut lacinia.
                </p>
              </div>
            </div>
            <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
              <div className="px-3 md:px-0">
                <h3 className="font-bold text-gray-900">Social</h3>
                <ul className="list-reset items-center pt-3">
                  <li>
                    <Link
                      className="inline-block no-underline hover:text-black hover:underline py-1"
                      to=""
                    >
                      Twitter
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
