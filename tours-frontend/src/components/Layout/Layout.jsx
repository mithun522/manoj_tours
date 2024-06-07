import React from "react";
import { useLocation } from "react-router-dom";
import HorizontalNavbar from "./HorizontalNavbar";
import VerticalNavbar from "./VerticalNavbar";
import LoadingSpinner from "../shared/LoadingSpinner";

const Layout = ({ children, loading }) => {
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
        <p className="pt-16 text-lg text-start font-bold">
          {formattedRoute.substring(2)}
        </p>
        <div
          className={`bg-white rounded-xl mr-10 mb-10 max-h-lg overflow-hidden scrollbar-hide min-h-[80vh] overflow-y-auto ${
            loading ? "flex items-center justify-center" : ""
          }`}
        >
          {loading ? <LoadingSpinner /> : children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
