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
import Order from "./Pages/AdminDashboard/Order";
import AddServices from "./Pages/AdminDashboard/AddServices";
import MakeAdmin from "./Pages/AdminDashboard/MakeAdmin";
import ManageServices from "./Pages/AdminDashboard/ManageServices";
import AllServices from "./Pages/AllServices/AllServices";
import RequireAdmin from "./Pages/Login/RequireAdmin/RequireAdmin";
import AllUsers from "./Pages/AdminDashboard/AllUsers";
import { ClimbingBoxLoader } from "react-spinners";
import { css } from "@emotion/react";

const override = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
`;

function App() {
  const [theme, setTheme] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    setTheme(JSON.parse(window.localStorage.getItem("theme")));
  }, []);

  const handleThemeChange = () => {
    setTheme(!theme);
    window.localStorage.setItem("theme", !theme);
  };

  return (
    <div data-theme={theme && "night"}>
      {loading ? (
        <ClimbingBoxLoader
          color={"#F63E7B"}
          loading={loading}
          size={35}
          css={override}
        />
      ) : (
        <Navbar handleThemeChange={handleThemeChange} theme={theme} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/team" element={<Team />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/all-services" element={<AllServices />} />
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
          <Route path="order" element={<Order />}></Route>
          <Route path="add" element={<AddServices />}></Route>
          <Route path="make-admin" element={<MakeAdmin />}></Route>
          <Route path="manage" element={<ManageServices />}></Route>
          <Route
            path="allUsers"
            element={
              <RequireAdmin>
                <AllUsers></AllUsers>
              </RequireAdmin>
            }
          ></Route>
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
