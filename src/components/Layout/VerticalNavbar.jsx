import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import burgerMenu from "../../assets/burger-menu-icon.svg";
import logo from "../../assets/logo.png";
import dashBoardIcon from "../../assets/dashboard-icon.svg";
import calenderIcon from "../../assets/calender-icon.svg";
import bookingsIcon from "../../assets/bookings-icon.svg";
import quotesIcon from "../../assets/quotes-icon.svg";
import settingsIcon from "../../assets/settings-icon.svg";
import logoutIcon from "../../assets/logout-icon.svg";
import shareLinksIcon from "../../assets/share-links-icon.svg";

const VerticalNavbar = () => {
  const [submenuOpen, setSubmenuOpen] = useState(
    localStorage.getItem("submenuOpen") === "true" || false
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navigate = useNavigate();

  const dropdown = () => {
    setSubmenuOpen(!submenuOpen);
    localStorage.setItem("submenuOpen", !submenuOpen);
  };

  const openSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsSmallScreen(!isSmallScreen);
  };

  useEffect(() => {
    const handleResize = () => {
      const smallScreen = window.innerWidth <= 768;
      setIsSmallScreen(smallScreen);
      setIsSidebarOpen(!smallScreen); // Sidebar open by default if not a small screen
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bg-gray-500 md:mr-80 relative z-10">
      {isSmallScreen ? (
        <img
          src={burgerMenu}
          alt="Burger Menu"
          className={`absolute top-5 left-4 cursor-pointer w-10 h-10 ${
            isSidebarOpen ? "hidden" : ""
          }`}
          onClick={openSidebar}
        />
      ) : null}

      <div
        className={`sidebar fixed top-0 bottom-0 lg:left-0 p-2 overflow-y-auto text-center bg-gray-900 ${
          !isSmallScreen && isSidebarOpen ? "" : "hidden"
        }`}
      >
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <img src={logo} alt="logo" className="h-24 w-60" />
            {isSmallScreen && (
              <img
                src={burgerMenu}
                alt="Burger Menu"
                className="absolute top-5 right-5 cursor-pointer w-10"
                onClick={openSidebar}
              />
            )}
          </div>
          <div className="my-10 bg-gray-600 h-[1px]"></div>
        </div>
        <NavLink
          to="/dashboard"
          className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-white ${
            window.location.pathname === "/dashboard"
              ? "bg-gray-500"
              : "hover:bg-gray-500"
          }`}
        >
          <img
            src={dashBoardIcon}
            alt="Dashboard"
            className="w-6 h-6"
            style={{ filter: "invert(100%)" }}
          />
          <span className="ml-4 text-gray-200 font-bold">Dashboard</span>
        </NavLink>

        <NavLink
          to="/bookings"
          className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-white ${
            window.location.pathname === "/bookings"
              ? "bg-gray-500"
              : "hover:bg-gray-500"
          }`}
        >
          <img
            src={bookingsIcon}
            alt="Bookings"
            className="w-6 h-6"
            style={{ filter: "invert(100%)" }}
          />
          <span className="ml-4 text-gray-200 font-bold">Bookings</span>
        </NavLink>

        <NavLink
          to="/quotes"
          className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-white ${
            window.location.pathname === "/quotes"
              ? "bg-gray-500"
              : "hover:bg-gray-500"
          }`}
        >
          <img
            src={quotesIcon}
            alt="Quotes"
            className="w-6 h-6"
            style={{ filter: "invert(100%)" }}
          />
          <span className="ml-4 text-gray-200 font-bold">Quotes</span>
        </NavLink>

        <NavLink
          to="/enquiries"
          className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-white ${
            window.location.pathname === "/enquiries"
              ? "bg-gray-500"
              : "hover:bg-gray-500"
          }`}
        >
          <span className="ml-4 text-gray-200 font-bold">Enquiries</span>
        </NavLink>

        <NavLink
          to="/calender"
          className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-white ${
            window.location.pathname === "/calender"
              ? "bg-gray-500"
              : "hover:bg-gray-500"
          }`}
        >
          <img
            src={calenderIcon}
            alt="calender"
            className="w-6 h-6"
            style={{ filter: "invert(100%)" }}
          />
          <span className="ml-4 text-gray-200 font-bold">calender</span>
        </NavLink>

        <NavLink
          to="/share-links"
          className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-white ${
            window.location.pathname === "/share-links"
              ? "bg-gray-500"
              : "hover:bg-gray-500"
          }`}
        >
          <img
            src={shareLinksIcon}
            alt="Share Links"
            className="w-6 h-6"
            style={{ filter: "invert(100%)" }}
          />
          <span className="ml-4 text-gray-200 font-bold">Share Links</span>
        </NavLink>

        <div className="my-4 bg-gray-600 h-[1px]"></div>
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-500 text-white"
          onClick={dropdown}
        >
          <img
            src={settingsIcon}
            alt="Settings"
            className="w-6 h-6"
            style={{ filter: "invert(100%)" }}
          />
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Settings
            </span>
            <span
              className={`text-sm ${submenuOpen ? "rotate-180" : ""}`}
              id="arrow"
            >
              <i className="bi bi-chevron-down"></i>
            </span>
          </div>
        </div>
        <div
          className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${
            submenuOpen ? "" : "hidden"
          }`}
          id="submenu"
        >
          <h1 className="cursor-pointer p-2 hover:bg-gray-500 rounded-md mt-1" onClick={() => navigate('/settings/fleets-information')}>
            Account
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-gray-500 rounded-md mt-1" onClick={() => navigate('/settings/fleets-information')}>
            Fleets Info
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-gray-500 rounded-md mt-1" onClick={() => navigate('/settings/drivers-information')}>
            Drivers Info
          </h1>
        </div>
        <NavLink
          to="/logout"
          activeClassName="text-blue-500"
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-500 text-white"
        >
          <img
            src={logoutIcon}
            alt="Logout"
            className="w-6 h-6"
            style={{ filter: "invert(100%)" }}
          />
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Logout
          </span>
        </NavLink>
      </div>
    </section>
  );
};

export default VerticalNavbar;
