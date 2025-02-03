import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "All Visas", path: "/all-visas" },
    { name: "Add Visa", path: "/add-visa" },
    { name: "My Added Visas", path: "/my-added-visas" },
    { name: "My Visa Applications", path: "/my-visa-applications" },
  ];

  return (
    <div className="navbar bg-base-200 shadow-lg">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `hover:bg-gray-300 rounded-md ${isActive ? "text-primary" : ""}`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">
          Visa Navigator
        </NavLink>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `hover:bg-gray-300 rounded-md ${isActive ? "text-primary" : ""}`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <NavLink to="/login" className="btn btn-outline btn-primary">
          Login/Register
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
