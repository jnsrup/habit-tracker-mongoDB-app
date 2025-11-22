

import { AuthContext } from "../Context/AuthContext";
import { SlLogout, SlLogin } from "react-icons/sl";
import { NavLink } from "react-router";
import User from "../User/User";

const Navbar = () => {
  
  

  return (
   <div className="bg-[#eef0fe] shadow-sm">
     <div className="w-11/12 mx-auto ">
      <div className="navbar ">
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

            {/* Mobile Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/add-habit">Add Habits</NavLink>
              <NavLink to="/my-habits">My Habits</NavLink>
              <NavLink to="/public-habits">Browse Public Habits</NavLink>
            </ul>
          </div>

          <NavLink className="btn btn-ghost text-xl" to="/">
            HabiTrack
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/AddHabits">Add Habits</NavLink>
            <NavLink to="/MyHabits">My Habits</NavLink>
            <NavLink to="/HabitsList">Browse Public Habits</NavLink>
          </ul>
        </div>

        {/* Right Side Buttons */}
        <div className="navbar-end space-x-3">
         
        </div>

        <div><User></User></div>
      </div>
    </div>
   </div>
  );
};

export default Navbar;
