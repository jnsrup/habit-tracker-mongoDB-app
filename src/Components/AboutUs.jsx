import React from "react";
 import achivement from "../assets//achievement-5002582_1280.jpg"
const AboutUs = () => {
  return (
    <div className="w-11/12 mx-auto my-40">
      <div className="flex justify-center gap-6 items-center flex-wrap">
        <div>
          <img className="max-w-2xl rounded-2xl" src={achivement} alt="achievement" />
        </div>

        <div className="max-w-2xl space-y-3 ">
          <h1 className="text-4xl font-bold  "><span className="text-blue-400">About</span> Us</h1>
          <p className="text-md font-medium  text-gray-500">
            This Habit Tracker helps you stay consistent with the routines that
            matter. Create habits, set reminders, and track your daily progress
            with a simple and motivating interface. The streak system keeps you
            inspired, while smart insights show how far you’ve come. Whether
            you're improving your health, productivity, or personal growth, this
            tool makes building better habits easier, clearer, and more
            rewarding. Small steps every day lead to big results—start your
            journey today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
