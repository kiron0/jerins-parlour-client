import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Team from "./Pages/Team/Team";
import { useEffect, useState } from "react";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Login from "./Pages/Login/Login/Login";
import SignUp from "./Pages/Login/SignUp/SignUp";
import ResetPassword from "./Pages/Login/ResetPassword";
import Dashboard from "./Pages/Dashboard/Dashboard";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Book from "./Pages/Dashboard/Book";
import Review from "./Pages/Dashboard/Review";
import Booking from "./Pages/Dashboard/Booking";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import Order from "./Pages/AdminDashboard/Order";
import AddServices from "./Pages/AdminDashboard/AddServices";
import MakeAdmin from "./Pages/AdminDashboard/MakeAdmin";
import ManageServices from "./Pages/AdminDashboard/ManageServices";

function App() {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    setTheme(JSON.parse(window.localStorage.getItem("theme")));
  }, []);
  const handleThemeChange = () => {
    setTheme(!theme);
    window.localStorage.setItem("theme", !theme);
  };
  return (
    <div data-theme={theme && "night"}>
      <Navbar handleThemeChange={handleThemeChange} theme={theme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/team" element={<Team />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<Book />}></Route>
          <Route path="review" element={<Review />}></Route>
          <Route path="booking" element={<Booking />}></Route>
        </Route>

        <Route
          path="/admin"
          element={
            <RequireAuth>
              <AdminDashboard />
            </RequireAuth>
          }
        >
          <Route index element={<Order />}></Route>
          <Route path="add" element={<AddServices />}></Route>
          <Route path="make-admin" element={<MakeAdmin />}></Route>
          <Route path="manage" element={<ManageServices />}></Route>
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
