import React from "react";
import { useLocation } from "react-router-dom";
import HorizontalNavbar from "./HorizontalNavbar";
import VerticalNavbar from "./VerticalNavbar";

const Layout = ({ children }) => {
  const location = useLocation();

  const formattedRoute =
    location.pathname
      .split("/")
      .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
      .join(" > ");

  return (
    <div className="flex">
      <VerticalNavbar />
      <div className="flex flex-col w-full relative">
        <HorizontalNavbar />
        <p className="absolute mt-24" style={{fontWeight: 'bolder'}} >{formattedRoute.substring(2,formattedRoute.length)}</p>
        <div className="mt-[15vh] bg-white rounded-xl mr-10 mb-10 max-h-screen-lg overflow-hidden scrollbar-hide">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
