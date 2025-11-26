import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import HabitCard from "./HabitCard";
import MyHabitCard from "./MyHabitCard";

const MyHabits = () => {
  const { user } = useContext(AuthContext);
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/habits/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => setHabits(data))
      .catch((err) => console.log(err));
  }, [user]);

  return (
    <div className="w-11/12 mx-auto ">
      <h2 className="text-xl font-bold mb-4">My Habits</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {habits.map((habit) => (
          <MyHabitCard key={habit._id} habit={habit} />
        ))}
      </div>
    </div>
  );
};

export default MyHabits;
