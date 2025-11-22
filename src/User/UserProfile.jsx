import React, { useContext, useState } from "react";

import { updateProfile } from "firebase/auth";


import { AuthContext } from "../Context/AuthContext";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [phoneNumber, setPhone] = useState( user?.phoneNumber || "");
  const [message, setMessage] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    

    try {
      await updateProfile(user, {
        displayName,
        photoURL,
        phoneNumber
      });
      setMessage("Profile updated successfully!");
    } catch (error) {
      setMessage("Failed to update profile: " + error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 mt-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Edit Profile</h2>

      <div className="flex justify-center mb-4">
        <img
          src={
            user?.photoURL
              ? user.photoURL
              : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          }
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border"
        />
      </div>

      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            placeholder={displayName}
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Photo URL</label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
          <input
            type="text"
            placeholder={phoneNumber}
            value={phoneNumber}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Update Profile
        </button>
      </form>

      {message && <p className="text-center mt-3 text-green-600">{message}</p>}
    </div>
  );
};

export default UserProfile;
