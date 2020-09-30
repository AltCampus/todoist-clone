import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as BigLogo } from "../assets/images/todoistLogoBig.svg";
import { ReactComponent as LogoSmall } from "../assets/images/logoSmall.svg";

function Home(props) {
  console.log(props);

  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <nav id="header" className="w-full z-30 top-0 py-1">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
          <label for="menu-toggle" className="cursor-pointer md:hidden block">
            <LogoSmall />
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
              <BigLogo />
              TODOIST
            </Link>
          </div>

          <div
            className="order-2 md:order-3 flex items-center"
            id="nav-content"
          >
            {localStorage.length ? (
              <>
                Welcome, Mayank{/*{props.data.user.nickname} */}
                <div className="inline-block no-underline hover:text-black hover:underline py-2 px-4">
                  <Link to="/dashboard">
                    <Logo />
                  </Link>
                </div>
                <button
                  className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                  onClick={() => {
                    localStorage.clear();
                  }}
                >
                  <NavLink to="/login">Log out</NavLink>
                </button>
              </>
            ) : (
              <button
                className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                // onClick={props.data.loginWithRedirect}
              >
                <NavLink to="/login">Log in</NavLink>
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
