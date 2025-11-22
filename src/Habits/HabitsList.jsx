import React, { useEffect, useState } from "react";
import HabitCard from "./HabitCard";

const HabitsList = () => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/habits")
      .then((res) => res.json())
      .then((data) => setHabits(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 py-10 justify-items-center">
      {habits.map((habit) => (
        <HabitCard key={habit._id} habit={habit} />
      ))}
    </div>
  );
};

export default HabitsList;