import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./Data/store";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePageLayout from "./Layouts/HomePageLayout";
import Home from "./pages/Home";
import Exercises from "./pages/Exercises";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./Layouts/DashboardLayout";
import Profile from "./pages/Profile";
import StartWorkout from "./pages/StartWorkout";
import History from "./pages/History";
import EditProfile from "./pages/EditProfile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePageLayout />}>
        <Route path="" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Exercises" element={<Exercises />} />
        <Route path="Register" element={<Register />} />
      </Route>
      <Route path="/Dashboard" element={<DashboardLayout />}>
        <Route path="" element={<Dashboard />} />
        <Route path="EditProfile" element={<EditProfile />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="StartWorkout" element={<StartWorkout />} />
        <Route path="History" element={<History />} />
        <Route path="Exercises" element={<Exercises />} />
      </Route>
    </>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
