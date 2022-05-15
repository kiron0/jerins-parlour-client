import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CgMenuLeft } from "react-icons/cg";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useScrollTracker } from "react-scroll-tracker";
import { toast } from "react-hot-toast";
import auth from "../../Firebase/firebase.init";
import logo from "../../../Assets/logo.png";

const Navbar = ({ handleThemeChange, theme, children }) => {
  const [user] = useAuthState(auth);
  const { scrollY: scrollYT } = useScrollTracker();

  const [scrollY, setScrollY] = useState();

  useEffect(() => {
    setScrollY(window.scrollY);
  }, [scrollYT]);

  const logout = () => {
    signOut(auth);
    toast.success(`Thank you, ${user.displayName} to stay with us!`, {
      autoClose: 5000,
    });
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-primary text-white rounded" : "rounded lg:mx-2"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-primary text-white rounded" : "rounded lg:mx-2"
          }
          to="/portfolio"
        >
          Our Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-primary text-white rounded" : "rounded lg:mx-2"
          }
          to="/team"
        >
          Our Team
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-primary text-white rounded" : "rounded lg:mx-2"
          }
          to="/contact"
        >
          Contact Us
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-primary text-white rounded" : "rounded-xl lg:mx-2"
            }
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-primary text-white rounded" : "rounded-xl lg:mx-2"
            }
            to="/admin"
          >
            Admin
          </NavLink>
        </li>
      )}
      <li>
        {user?.email ? (
          <button
            className="btn btn-ghost bg-primary font-bold text-white rounded hover:bg-primary lg:ml-2"
            onClick={logout}
          >
            Sign Out
          </button>
        ) : (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-primary text-white rounded lg:px-8"
                : "rounded lg:mx-2 lg:px-8"
            }
            to="/login"
          >
            Login
          </NavLink>
        )}
      </li>
      <li>
        <button
          onClick={handleThemeChange}
          className="rounded lg:mx-2 font-bold"
        >
          {theme ? (
            <svg
              className="swap-on fill-current w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
          ) : (
            <svg
              className="swap-off fill-current w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          )}
        </button>
      </li>
    </>
  );
  return (
    <section className="flex justify-center mb-8">
      <div className="fixed top-0 w-full z-50">
        <input type="checkbox" className="drawer-toggle" />
        <div
          className={`drawer-content flex flex-col py-[8px] lg:py-[10px] backdrop-blur-[18px] bg-base-200  ${
            scrollY < 300 && "lg:bg-transparent"
          }`}
        >
          <div className="w-full navbar container mx-auto">
            <div className="navbar-start w-20">
              <label
                tabIndex="1"
                htmlFor="dashboard-sidebar"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            </div>
            <div className="flex-1 px-0 mx-3">
              <p className="font-bold ml-0 md:ml-0 lg:ml-0 lg:w-auto w-full text-2xl ">
                <NavLink to="/">
                  <img src={logo} alt="" className="w-24" />
                </NavLink>
              </p>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal font-bold">{navItems}</ul>
            </div>
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                className="btn btn-ghost"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <CgMenuLeft className="text-3xl font-bold"></CgMenuLeft>
              </label>
            </div>
          </div>
        </div>
        <div
          className={`absolute duration-300 ease-linear ${
            menuOpen ? "right-0" : "right-[-100vw]"
          }`}
        >
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 gap-4 overflow-y-auto w-80 font-bold h-screen backdrop-blur-[18px] bg-base-200">
            {navItems}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
