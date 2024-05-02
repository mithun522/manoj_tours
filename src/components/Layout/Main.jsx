import React from "react";
import { useLocation } from "react-router-dom";
import HorizontalNavbar from "./HorizontalNavbar";
import VerticalNavbar from "./VerticalNavbar";

const Layout = ({ children }) => {
  const location = useLocation();

  const formattedRoute =
    location.pathname.replace("/", "").charAt(0).toUpperCase() +
    location.pathname.slice(2);

  return (
    <div className="flex h-screen">
      <VerticalNavbar />
      <div className="flex flex-col w-full relative">
        <HorizontalNavbar />
        <p className="absolute mt-28 ml-6">{formattedRoute}</p>
        <div className="mt-16 bg-white h-screen rounded-xl mr-10 mb-10 ml-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
