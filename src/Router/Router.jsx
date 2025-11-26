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
import ErrorPage from "../ErrorPage/ErrorPage";
import Loader from "../Loader/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,
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
        loader:Loader
      },
      {
        path: "/HabitsPage",
        Component: MyHabitCard,
      },
    ],
  },
]);

export default router;
