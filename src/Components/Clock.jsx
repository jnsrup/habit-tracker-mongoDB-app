import React, { useEffect, useState } from 'react';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect( ()=>{
        const timer = setInterval(()=>{
            setTime(new Date());

        },1000)
        return ()=>clearInterval(timer);
    },[]);
    const formatTime = time.toLocaleString()
    return (
        <div className='text-md font-semibold flex flex-wrap bg-base-300 text-base-content my-3 p-4 rounded-xl shadow-lg'>
           <h4> Current Date:</h4>{formatTime}
        </div>
    );
};

export default Clock;