import React, { useState } from "react";
import Layout from "../Layout/Layout";
import PaymentDetails from "./PaymentDetails";
import PersonalInformation from "./PersonalInformation";
import TripDetails from "./TripDetails";

const NewBookings = () => {
  const [activeTab, setActiveTab] = useState("personal"); // State to track active tab

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Layout>
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <div className="overflow-hidden sm:rounded-lg">
            <div className="flex justify-between px-4 sm:px-10 py-6">
              <h1 className="text-lg font-bold" style={{fontSize: '30px'}} >New Bookings</h1>
              <div className="flex">
                <span>Customer ID: #MT234</span>
              </div>
            </div>
            <div className="flex justify-center mb-4">
              <div
                onClick={() => handleTabChange("personal")}
                className={`cursor-pointer font-semibold w-full sm:w-56 py-2  ${
                  activeTab === "personal" ? "bg-black text-white rounded-lg" : "text-gray-500 shadow-lg border border-gray-100 rounded-lg hover:scale-105 ease-in-out duration-300"
                }`}
              >
                Personal Information
              </div>
              <div
                onClick={() => handleTabChange("fleet")}
                className={`cursor-pointer font-semibold ml-2 w-full sm:w-56 py-2 ${
                  activeTab === "fleet" ? "bg-black text-white rounded-lg" : "text-gray-500 shadow-lg border border-gray-100 rounded-lg hover:scale-105 ease-in-out duration-300"
                }`}
              >
                Fleet/Trip Details
              </div>
              <div
                onClick={() => handleTabChange("payment")}
                className={`cursor-pointer font-semibold ml-2 w-full sm:w-56 py-2 ${
                  activeTab === "payment" ? "bg-black text-white rounded-lg" : "text-gray-500 shadow-lg border border-gray-100 rounded-lg hover:scale-105 ease-in-out duration-300"
                }`}
              >
                Payment Details
              </div>
            </div>
            <div className="flex justify-center bg-white mb-20">
              <div
                className="border border-gray-300 rounded-lg py-10 max-w-screen-md w-full max-h-screen-xs h-full"
              >
                {activeTab === "personal" && (
                  <PersonalInformation />
                )}
                {activeTab === "fleet" && (
                  <TripDetails />
                )}
                {activeTab === "payment" && (
                  <PaymentDetails />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewBookings;
