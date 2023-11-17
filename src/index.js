import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Data/store";
import HomePageLayout from "./Layouts/HomePageLayout";
import "./App.css";
import Home from "./pages/Home";
import Exercises from "./pages/Exercises";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./Layouts/DashboardLayout";
import Profile from "./pages/Profile";
import StartWorkout from "./pages/StartWorkout";
import History from "./pages/History";
import EditProfile from "./pages/EditProfile";
import NotFound from "./pages/NotFound";

ReactDOM.render(
  <Provider store={store}>
    <Router basename="/workout-tracker">
      <Routes>
        {/* Your existing routes */}
        <Route path="/" element={<HomePageLayout />}>
          <Route index element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Exercises" element={<Exercises />} />
          <Route path="Register" element={<Register />} />
        </Route>

        <Route path="/Dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="EditProfile" element={<EditProfile />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="StartWorkout" element={<StartWorkout />} />
          <Route path="History" element={<History />} />
          <Route path="Exercises" element={<Exercises />} />
        </Route>

        {/* Catch-all route for custom 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById("root")
);
