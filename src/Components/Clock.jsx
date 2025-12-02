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
        <div className='text-4xl font-semibold bg-gray-900 text-white p-4 rounded-xl shadow-lg'>
            {formatTime}
        </div>
    );
};

export default Clock;