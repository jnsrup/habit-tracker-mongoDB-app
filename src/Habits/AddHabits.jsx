import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';


const AddHabits = () => {
    const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    reminderTime: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const habit = {
      ...formData,
      userEmail: user?.email,
      userName: user?.displayName,
    };

    fetch("http://localhost:3000/habits", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(habit),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Habit added:", data);
        alert("Habit added successfully!");
      })
      .catch((err) => console.log(err));
  };

    return (
        <div className='my-20'>
            <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-base-300 shadow-md p-5 rounded-xl"
    >
      <h2 className="text-xl font-semibold mb-4">Add New Habit</h2>

      <input
        type="text"
        name="title"
        placeholder="Habit title"
        className="w-full p-2 border rounded mb-3"
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        className="w-full p-2 border rounded mb-3"
        onChange={handleChange}
        required
      ></textarea>

      <select
        name="category"
        className="w-full bg-base-300 p-2 border rounded mb-3"
        onChange={handleChange}
        required
      >
        <option value="">Select category</option>
        <option value="Morning">Morning</option>
        <option value="Work">Work</option>
        <option value="Fitness">Fitness</option>
        <option value="Evening">Evening</option>
        <option value="Study">Study</option>
      </select>

      <input
        type="time"
        name="reminderTime"
        className="w-full p-2 border rounded mb-3"
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="image"
        placeholder="Image URL (optional)"
        className="w-full p-2 border rounded mb-3"
        onChange={handleChange}
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Add Habit
      </button>
    </form>
        </div>
    );
};

export default AddHabits;