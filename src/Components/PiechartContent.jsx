import React from 'react';
import PieAnimation from './PieChart';




const PiechartContent = () => {
    return (
        <div className='w-11/12 mx-auto my-30 '>
                <div className='text-center py-5' >
              <h2 className='text-4xl font-bold'>Distribute Your <span className='text-blue-400'>24 Hours</span></h2>
            </div>
           <div className='flex  justify-center'>
               
            <div className='w-3xl  '>
               <PieAnimation></PieAnimation>
            </div>
           </div>
         
        </div>
    );
};

export default PiechartContent;