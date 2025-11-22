import React from "react";
import { createBrowserRouter } from "react-router";

import Root from "../Roots/Root";
import Home from "../Components/Home/Home";
import Login from "../Register/Login/Login";
import Register from "../Register/Register";
import User from "../User/User";
import UserProfile from "../User/UserProfile";
import HabitsList from "../Habits/HabitsList";
import HabitCard from "../Habits/HabitCard";
import AddHabits from "../Habits/AddHabits";
import MyHabits from "../Habits/MyHabits";
import MyHabitCard from "../Habits/MyHabitCard";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "/Login",
        Component: Login,
      },
      {
        path: "/Register",
        Component: Register,
      },
      {
        path: "/User",
        Component: User,
      },
      {
        path: "/UserProfile",
        Component: UserProfile,
      },
      {
        path: "/HabitsList",
        Component: HabitsList,
      },
      {
        path: "/HabitCard",
        Component: HabitCard,
      },
      {
        path: "/AddHabits",
        Component: AddHabits,
      },
      {
        path: "/MyHabits",
        Component: MyHabits,
      },
      {
        path: "/HabitsPage",
        Component: MyHabitCard,
      },
    ],
  },
]);

export default router;
