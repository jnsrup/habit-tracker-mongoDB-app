
import React, {  useEffect, useState } from 'react';

import HabitCard from '../../Habits/HabitCard';


import Loader from '../../Loader/Loader';
import { useNavigate } from 'react-router';


const BestHabits =  () => {
     const [habits, setHabits] = useState([]);  
      const [loading, setLoading] = useState(true);
      const navigate = useNavigate();

     useEffect(() => {
          setLoading(true);
      
        
        fetch("http://localhost:3000/habits")
          .then((res) => res.json())
          .then((data) => {
             setHabits(data);
             setLoading(false)
          })
          .catch(()=> setLoading(false))
          
          
      }, []  );

      if(loading){
         return (
          <Loader></Loader>
         )
      }

    return (
    
        <div className='w-11/12 mx-auto'>
             <div className='mt-14 flex flex-col justify-center items-center space-y-2'> <h2 className='text-4xl font-bold  text-center '> <span className='text-blue-400'>Create Your</span> Own Habits </h2>
                 <p className='text-lg font-semibold text-gray-500 text-center'> Success is built on small daily actions.</p>
                  <button onClick={()=> navigate('/AddHabits')} className='btn w-40 btn-primary'>Add Your habit</button>
               </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 py-10 justify-items-center">
      {habits.slice(0, 6).map((habit) => (
        <HabitCard key={habit._id} habit={habit} />
      ))} 
    </div>
        </div>
    );
};

export default BestHabits;