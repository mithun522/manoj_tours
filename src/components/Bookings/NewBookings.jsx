import React, { useState } from "react";
import Layout from "../Layout/Layout";
import PersonalInformation from "./PersonalInformation";
import TripDetails from "./TripDetails";
import PaymentDetails from "./PaymentDetails";

const NewBookings = () => {
  const [activeTab, setActiveTab] = useState("personal"); // State to track active tab

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Layout>
        <div className="max-w-screen mx-auto">
          <div className="flex flex-col">
            <div className="overflow-y-auto shadow-md sm:rounded-lg h-[796px]">
              <div className="flex justify-between px-10 py-6">
                <h1 className="text-lg font-bold" style={{fontSize: '30px'}} >New Bookings</h1>
                <div className="flex">
                  <span>Customer ID: #MT234</span>
                </div>
              </div>
              <div className="flex justify-center mb-4">
                <div
                  onClick={() => handleTabChange("personal")}
                  className={`cursor-pointer mr-4 font-semibold w-56 py-2 ${
                    activeTab === "personal" ? "bg-black text-white rounded-lg" : "text-gray-500"
                  }`}
                >
                  Personal Information
                </div>
                <div
                  onClick={() => handleTabChange("fleet")}
                  className={`cursor-pointer font-semibold ml-10 w-56 py-2 ${
                    activeTab === "fleet" ? "bg-black text-white rounded-lg" : "text-gray-500"
                  }`}
                >
                  Fleet/Trip Details
                </div>
                <div
                  onClick={() => handleTabChange("payment")}
                  className={`cursor-pointer font-semibold ml-10 w-56 py-2 ${
                    activeTab === "payment" ? "bg-black text-white rounded-lg" : "text-gray-500"
                  }`}
                >
                  Payment Details
                </div>
              </div>
              <div className="flex justify-center bg-white">
                <div
                  className="border border-gray-300 rounded-lg p-4 h-96"
                  style={{ width: "770px" }}
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
    </>
  );
};

export default NewBookings;
