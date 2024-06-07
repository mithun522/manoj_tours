import Layout from "../Layout/Layout";
import { Outlet, useLocation } from "react-router-dom";

const NewBookings = () => {
  const currentPage = useLocation().pathname;

  return (
    <Layout>
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <div className="overflow-hidden sm:rounded-lg">
            <div className="flex justify-between px-4 sm:px-10 py-6">
              <h1 className="text-lg font-bold" style={{ fontSize: "30px" }}>
                New Bookings
              </h1>
              <div className="flex">
                <span>Customer ID: #MT234</span>
              </div>
            </div>
            <div className="flex justify-center mb-4">
              <button
                className={`cursor-pointer font-semibold ml-2 w-full sm:w-56 py-2.5 rounded-xl disabled ${
                  currentPage === "/bookings/new-bookings/personal-info"
                    ? "bg-black text-white"
                    : ""
                }`}
              >
                Personal Information
              </button>
              <button
                className={`cursor-pointer font-semibold ml-2 w-full sm:w-56 py-2.5 rounded-xl ${
                  currentPage === "/bookings/new-bookings/trip-details"
                    ? "bg-black text-white"
                    : ""
                }`}
              >
                Fleet/Trip Details
              </button>
              <button
                className={`cursor-pointer font-semibold ml-2 w-full sm:w-56 py-2.5 rounded-xl ${
                  currentPage === "/bookings/new-bookings/payment-details"
                    ? "bg-black text-white"
                    : ""
                }`}
              >
                Payment Details
              </button>
            </div>
            <div className="flex justify-center bg-white mb-20">
              <div className="border border-gray-300 rounded-lg py-10 max-w-screen-md w-full max-h-screen-xs h-full">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewBookings;
