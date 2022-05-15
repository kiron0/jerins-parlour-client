import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../Firebase/firebase.init";
import logo from "../../Assets/logo.png";

const AdminDashboard = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="drawer drawer-mobile">
      <input id="admin-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-2xl lg:text-3xl font-bold mt-10 py-10 pl-2">
          Welcome back, {user?.displayName}
        </h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="admin-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-72 bg-base-100 text-base-content py-20">
          <img src={logo} alt="" className="w-32 mx-auto pb-4" />
          {/* <!-- Sidebar content here --> */}
          <li className="py-2">
            <NavLink to="/admin">Order List</NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/admin/add">Add Services</NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/admin/make-admin">Make Admin</NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/admin/manage">Manage Services</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
