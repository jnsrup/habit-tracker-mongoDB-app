import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link, NavLink, useNavigate } from "react-router";
import { SlLogin } from "react-icons/sl";

const User = () => {

    const navigate = useNavigate()
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("Logged out successfully");
      })
      .catch((err) => console.error(err));
  };

  return (
    <nav className="userBar">
      

      {/* If user is logged in */}
      {user ? (
        <div className="profile-wrapper">
          <img
            src={user.photoURL || "https://i.ibb.co.com/0R4nTqTz/icon-5359553-1280.png"}
            alt="profile"
            className="profile-img"
            onClick={() => setOpen(!open)}
          />

          {open && (
            <div className="dropdown2">
              <p ><strong>{user.displayName || "No name"}</strong></p>
              <p>{user.email}</p>
              <button className=" text-blue-600 underline" onClick={() => navigate('/UserProfile')}> Edit profile</button>

              <button className="logout-btn" onClick={handleLogOut}>
                Log Out
              </button>
            </div>
          )}
        </div>
      ) : (
        <div>
            
            <NavLink to="/Login" className="btn btn-secondary">
              <SlLogin /> Login
            </NavLink>
          
        </div>
      )}
    </nav>
  );
};

export default User;