import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate(); // React Router hook for navigating
  const logout = async () => {
    // Call the logout API
    await fetch("http://localhost:8000/user/logout", {
      method: "GET", // or 'POST' depending on your backend
      credentials: "include", // Include cookies for authentication/session handling
    })
      .then((response) => {
        if (response.ok) {
          console.log("Successfully logged out");
          // Redirect user to the login page
          navigate("/signin");
        } else {
          console.log("Logout failed");
        }
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  };

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/addblog">Add Blog</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/addblog">Add Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/signin" className="btn btn-primary">
            SignIn
          </Link>
          <button className="btn btn-error" onClick={logout}>
            LogOut
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
