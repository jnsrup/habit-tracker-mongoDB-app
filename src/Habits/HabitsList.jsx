import React, { useEffect, useState } from "react";
import HabitCard from "./HabitCard";
import Loader from "../Loader/Loader";

const HabitsList = () => {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    setLoading(true);
    
    fetch("https://habittracker-server2.onrender.com/habits")
      .then((res) => res.json())
      .then((data) => {
        setHabits(data);
        setLoading(false);
      })
      .catch(()=> setLoading(false))
  }, []  );
    if(loading){
      return(
        <Loader></Loader>
      )
    }
  return (
    <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 py-10 justify-items-center">
      {habits.map((habit) => (
        <HabitCard key={habit._id} habit={habit} />
      ))}
    </div>
    </div>
    
  );
  
};

export default HabitsList;