import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../Firebase/firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-2xl lg:text-3xl font-bold pt-16 pl-2">
          Welcome back, {user?.displayName}
        </h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label for="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-72 bg-base-100 text-base-content py-20">
          {/* <!-- Sidebar content here --> */}
          <li className="py-2">
            <NavLink to="/dashboard">Book</NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/dashboard/booking">Booking List</NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/dashboard/review">Review</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
