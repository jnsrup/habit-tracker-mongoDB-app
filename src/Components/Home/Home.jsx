import React from 'react';
import Slider from '../Slider/Slider';
import BestHabits from '../bestHabits/BestHabits';

import Calender from '../Calender';
import PiechartContent from '../PiechartContent';
import AboutUs from '../AboutUs';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            
            <BestHabits></BestHabits>
            <Calender></Calender>
            <PiechartContent></PiechartContent>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;