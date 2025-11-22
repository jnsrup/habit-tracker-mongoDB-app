import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const MyHabitCard = ({ habit }) => {
  const { user } = useContext(AuthContext);
  const [habits, setHabits] = useState([]);
  const [editingHabit, setEditingHabit] = useState(null);

  // Fetch logged-in user's habits
  const loadMyHabits = async () => {
    const res = await fetch(`http://localhost:3000/habits?email=${user.email}`);
    const data = await res.json();
    setHabits(data);
  };

  useEffect(() => {
    loadMyHabits();
  }, [user]);

  // Handle Edit + Open Modal
  const openEditModal = (habit) => {
    setEditingHabit(habit);
    document.getElementById("edit_modal").showModal();
  };

  // Handle Update
  const handleUpdateHabit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `http://localhost:3000/habits/${editingHabit._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingHabit),
      }
    );

    const data = await res.json();

    if (data.modifiedCount >= 0) {
      alert("Habit updated successfully!");
      document.getElementById("edit_modal").close();
      setEditingHabit(null);
      loadMyHabits();
    }
  };

  // Handle Delete
  const handleDeleteHabit = async (id) => {
    if (!confirm("Are you sure you want to delete this habit?")) return;

    const res = await fetch(`http://localhost:3000/habits/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (data.deletedCount > 0) {
      loadMyHabits();
    }
  };

  return (
    <>
      {/* Habit Card */}
      <div className="border p-4 rounded-lg shadow-md mb-4">
        <h2 className="text-xl font-bold">{habit.title}</h2>
        <p className="text-gray-700">{habit.description}</p>

        <div className="mt-4 flex gap-3">
          <button
            onClick={() => openEditModal(habit)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Edit
          </button>

          <button
            onClick={() => handleDeleteHabit(habit._id)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Edit Modal */}
      <dialog id="edit_modal" className="modal">
        <form
          onSubmit={handleUpdateHabit}
          className="modal-box flex flex-col gap-4"
        >
          <h3 className="font-bold text-lg">Edit Habit</h3>

          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Title"
            value={editingHabit?.title || ""}
            onChange={(e) =>
              setEditingHabit({ ...editingHabit, title: e.target.value })
            }
            required
          />

          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Description"
            value={editingHabit?.description || ""}
            onChange={(e) =>
              setEditingHabit({
                ...editingHabit,
                description: e.target.value,
              })
            }
            required
          />

          <button type="submit" className="btn btn-primary w-full">
            Update Habit
          </button>

          <button
            type="button"
            className="btn w-full"
            onClick={() => document.getElementById("edit_modal").close()}
          >
            Cancel
          </button>
        </form>
      </dialog>
    </>
  );
};

export default MyHabitCard;
