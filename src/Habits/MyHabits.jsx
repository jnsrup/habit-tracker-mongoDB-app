import React, { useEffect, useState, useContext } from "react";

import HabitCard from "./HabitCard";
import MyHabitCard from "./MyHabitCard";
import { AuthContext } from "../Context/AuthProvider";

const MyHabits = () => {
  const { user } = useContext(AuthContext);
  const [habits, setHabits] = useState([]);
 
  

 const loadMyHabits = async() =>{
  const res = await fetch(`http://localhost:3000/habits/user/${user.email}`)
   const data = await res.json();
   setHabits(data);
 };
  useEffect( () =>{
    if(user?.email){
      loadMyHabits();
    }
  }, [user]);

  return (
    <div className="w-11/12 mx-auto py-20 flex flex-col justify-center ">
      
       {
        habits.length == 0 ? <h2 className="text-2xl font-bold "> You don't have any Habit</h2> :<h2 className="text-2xl  font-bold m-4 text-center">Your Habits:{habits.length}</h2>
       }
       
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center mb-10">
        {habits.map((habit) => (
          <MyHabitCard key={habit._id} habit={habit} loadMyHabits={loadMyHabits} />
        ))}
      </div>
    </div>
  );
};

export default MyHabits;
