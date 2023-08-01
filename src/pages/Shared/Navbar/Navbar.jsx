// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const menuItems = (
    <React.Fragment>
      <li className="ml-2">
        <Link to="/">Home</Link>
      </li>
      <li className="ml-2">
        <Link to="/about">About</Link>
      </li>
      <li className="ml-2">
        <Link to="/appointment">Appointment</Link>
      </li>
      <li className="ml-2">
        <Link to="/reviews">Reviews</Link>
      </li>
      <li className="ml-2">
        <Link to="/login">Login</Link>
      </li>
    </React.Fragment>
  );

  const [navbarBackground, setNavbarBackground] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const navbarBackgroundCondition = scrollPosition > 0.02 * window.innerHeight;
    setNavbarBackground(navbarBackgroundCondition);
  };

  useEffect(() => {
    window.onscroll = handleScroll;
  }, []);

  return (
    <div
      className={`navbar ${
        navbarBackground ? "bg-zinc-300" : "bg-transparent"
      } flex justify-between fixed top-0 z-40 ${onmousemove={}}`}
    >
      <div className="lg:hidden navber-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="normal-case text-xl">
          Medic World
        </Link>
      </div>
      <div className="hidden lg:flex w-full justify-evenly">
        <Link to="/" className="normal-case text-xl">
          Medic World
        </Link>

        <ul className="menu menu-horizontal">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
