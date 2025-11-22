import React, { useEffect, useState } from "react";

const HabitCard = ({ habit }) => {
  const [habits, setHabits] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:3000/habits")
        .then((res) => res.json())
        .then((data) => setHabits(data))
        .catch((error) => console.log("Error:", error));
    }, []);
  
  return (
    <div 
      className="w-full max-w-sm bg-white border border-gray-200 rounded-xl shadow-md p-4 hover:shadow-lg transition"
    >
      {/* Image */}
      {habit.image && (
        <img
          src={habit.image}
          alt={habit.title}
          className="w-full h-40 object-cover rounded-lg mb-3"
        />
      )}

      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800">{habit.title}</h2>

      {/* Description */}
      <p className="text-gray-600 text-sm mt-1">{habit.description}</p>

      {/* Category */}
      <span className="inline-block mt-3 text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
        {habit.category}
      </span>

      {/* Reminder time */}
      <p className="text-gray-500 text-sm mt-2">
        ⏰ Reminder: {habit.reminderTime}
      </p>

      {/* User info */}
      <p className="text-xs text-gray-400 mt-1">
        Added by: {habit.userName} ({habit.userEmail})
      </p>
    </div>
  );
};

export default HabitCard;
