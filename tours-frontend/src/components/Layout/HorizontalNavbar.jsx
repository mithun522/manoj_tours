import React from "react";
import { useNavigate } from "react-router-dom";
import notificationIcon from "../../assets/notification-iconsvg.svg";

const HorizontalNavbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 flex justify-end">
      <div className="max-w-screen-xl p-4 mr-4 top-0 flex justify-end w-full overflow-x-auto">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <button
                className="text-white bg-sky-400 hover:scale-105 ease-in-out duration-300 rounded-xl px-4 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2"
                aria-current="page"
                onClick={() => navigate("/quotes/customer-new-quotations")}
              >
                New Quotation
              </button>
            </li>
            <li>
              <button
                className="text-white bg-sky-400 hover:scale-105 ease-in-out duration-300 rounded-xl px-4 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2"
                aria-current="page"
                onClick={() => navigate("/bookings/new-bookings")}
              >
                New Bookings
              </button>
            </li>
            <li>
              <div className="relative">
                <img src={notificationIcon} alt="" className="w-7 h-7" />
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  2
                </span>
              </div>
            </li>
            <li>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HorizontalNavbar;
