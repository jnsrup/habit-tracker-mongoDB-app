import React from 'react';
import StaticDatePickerLandscape from './DatePicker';

const Calender = () => {
    return (
        <div className='w-8/12 mx-auto py-20 flex flex-wrap gap-6 justify-center rounded-2xl bg-gray-300 items-center my-30' >
            <div className='max-w-140 space-y-3'> <h3 className='text-4xl font-bold '> <span className='text-blue-500'>Pick</span> Your day</h3>
                <p className='text-md font-medium text-gray-500'>Build better habits with simple daily tracking.
Stay motivated with streaks, reminders, and progress insights.
Create routines that match your goals and lifestyle.
Small steps every day lead to big, lasting change.</p>
             </div>
            <div className=''><StaticDatePickerLandscape></StaticDatePickerLandscape> </div>
            
        </div>
    );
};

export default Calender;