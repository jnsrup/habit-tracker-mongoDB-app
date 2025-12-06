import React, { useContext, useEffect, useState } from "react";

import Swal from "sweetalert2";
import axios from "axios";
import Lottie from "lottie-react";
import successAnimation from "../assets/Completed Successfully.json";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router";
import { reload } from "firebase/auth";
import Clock from "../Components/Clock";

const MyHabitCard = ({ habit }) => {
  
  const { user } = useContext(AuthContext);
  const [habits, setHabits] = useState([]);
  const [editingHabit, setEditingHabit] = useState(null);

  const [showAnimation, setShowAnimation] = useState(false);
// loader state
const [isLoading, setIsLoading] = useState(false);
  // Form states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [reminderTime, setReminderTime] = useState("");
  const [image, setImage] = useState("");
  // daily steak count
  const today = new Date().toISOString().split("T")[0];
  const lastCompleted = habit.lastCompletedDate || "";
  
  // Load user's habits
  const loadMyHabits = async () => {
     
    const res = await fetch(`https://habittracker-server2.onrender.com/habits?email=${user.email}`);
    const data = await res.json();
    setHabits(data);
  };

  useEffect(() => {
    loadMyHabits();
  }, []);

  // Open edit modal
  const openEditModal = (habit) => {
    setEditingHabit(habit);

    setTitle(habit.title);
    setDescription(habit.description);
    setCategory(habit.category);
    setReminderTime(habit.reminderTime);
    setImage(habit.image);

    document.getElementById("edit_modal").showModal();
  };

  // Update Habit
  const handleUpdateHabit = async (e) => {
    e.preventDefault();

    const updateHabit = {
      title,
      description,
      category,
      reminderTime,
      image,
    };

    try {
      
      const res = await axios.put(
        `https://habittracker-server2.onrender.com/habits/${editingHabit._id}`,
        updateHabit
      );

      if (res.data.matchedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Habit Updated!",
        });

        loadMyHabits();
        document.getElementById("edit_modal").close();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: error.response?.data?.message || "Something went wrong!",
      });
    }
  };

  // Delete Habit
  const handleDeleteHabit = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This habit will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(`https://habittracker-server2.onrender.com/habits/${id}`, {
          method: "DELETE",
        });

        const data = await res.json();
        if (data.deletedCount > 0) {
          Swal.fire("Deleted!", "Habit removed successfully.", "success");
          loadMyHabits();
          
        }
      }
    });
  };

  // Daily Streak Handler
  const handleComplete = async (id) => {
    setIsLoading(true);
    const res = await fetch(`https://habittracker-server2.onrender.com/habits/${id}/complete`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    console.log("Streak update:", data);

   

    // Lottie animation
    setShowAnimation(true);
    setTimeout(() => setShowAnimation(false), 1500);

    Swal.fire({
      icon: "success",
      title: "Daily Habit Completed!",
      timer: 1200,
      showConfirmButton: false,
    });
    loadMyHabits();
    setIsLoading(false);
  };

  return (
    <>
      <div className="">
        {/* Habit Card */}
        <div className=" relative w-fit p-6 rounded-lg shadow-2xl mb-4">
          <img src={habit.image} alt="" className=" w-100 rounded mb-3" />
          <h2 className="text-xl font-bold">{habit.title}</h2>
          <p className="text-gray-700 max-w-90">{habit.description}</p>

          {/* Duolingo-style streak progress */}
          <div className="flex gap-1 mt-2 items-center ">
            <h4>Daily Goal</h4>
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                loadMyHabits={loadMyHabits}
                className={`h-8 w-8 rounded flex items-center justify-center ${
                  i < habit.streakCount % 7
                    ? "bg-green-500 text-white"
                    : "bg-gray-300"
                }`}>
                {i + 1}
              </div>
            ))}
          </div>
             <div> <Clock></Clock> </div>
          {/* Buttons */}
          <div className="mt-4 flex gap-3">
            <button
              onClick={() => openEditModal(habit)}
              className="bg-blue-500 text-white px-4 py-2 rounded">
              Edit
            </button>

            <button
              onClick={() => handleDeleteHabit(habit._id)}
              className="bg-red-500 text-white px-4 py-2 rounded">
              Delete
            </button>

            <button
              onClick={() => handleComplete(habit._id)}
              className={`px-4 py-2 rounded text-white 
    ${
      lastCompleted === today ? "bg-gray-400 cursor-not-allowed" : "bg-teal-500"
    }`}
              disabled={lastCompleted === today}>
              {lastCompleted === today ? "Completed Today" : "Complete Goal"}
            </button>
          </div>

          {/* Lottie Animation */}
          {showAnimation && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/70 rounded-lg z-20">
              <Lottie
                animationData={successAnimation}
                loop={false}
                style={{ width: 200 }}
              />
            </div>
          )}
        </div>

        {/* Edit Modal */}
        <dialog id="edit_modal" className="modal">
          <form
            onSubmit={handleUpdateHabit}
            className="modal-box flex flex-col gap-4">
            <h3 className="font-bold text-lg">Edit Habit</h3>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="input input-bordered"
            />

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              className="textarea textarea-bordered"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="select select-bordered">
              <option>Morning</option>
              <option>Work</option>
              <option>Fitness</option>
              <option>Evening</option>
              <option>Study</option>
            </select>

            <input
              type="time"
              value={reminderTime}
              onChange={(e) => setReminderTime(e.target.value)}
              className="input input-bordered"
            />

            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Image URL"
              className="input input-bordered"
            />

            <button type="submit" className="btn btn-primary w-full">
              Update Habit
            </button>

            <button
              type="button"
              className="btn w-full"
              onClick={() => document.getElementById("edit_modal").close()}>
              Cancel
            </button>
          </form>
        </dialog>
      </div>
    </>
  );
};

export default MyHabitCard;
