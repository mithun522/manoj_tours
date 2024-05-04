import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";
import calenderIcon from "../../assets/calender-icon.svg";
import rightArrowIcon from "../../assets/right-arrow-icon.svg";
import rightLeftIcon from "../../assets/right-left-arrow-icon.svg";
import locationIcon from "../../assets/location-icon-filled.svg";
import plusIcon from "../../assets/plus-icon.svg";
import minusIcon from "../../assets/minus-icon.svg";

const CustomerNewQuotation = () => {
  const [customerData, setCustomerData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookingsData = async () => {
      try {
        const response = await fetch("/Quotations.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCustomerData(data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBookingsData();
  }, []);

  return (
    <>
      <Layout>
        <div className="max-w-screen mx-auto px-4 sm:px-8 text-start">
          <div className="flex flex-col">
            <div className="overflow-y-auto">
              <div className="flex justify-between px-2 sm:px-6 pt-2">
                <h1
                  className="text-lg font-bold text-center sm:text-left"
                  style={{ fontSize: "1.875rem" }}
                >
                  New Quotations
                </h1>
              </div>
              <div className="flex flex-col sm:flex-row justify-center mb-4">
                <div className="cursor-pointer mr-2 sm:mr-4 font-semibold w-full sm:w-auto py-2 px-10 bg-black text-white rounded-lg text-center sm:text-left">
                  Customer
                </div>
                <div
                  className="cursor-pointer mr-2 sm:mr-4 font-semibold w-full sm:w-auto py-2 px-10 border shadow-lg text-black rounded-lg text-center sm:text-left"
                  onClick={() => navigate("/quotes/company-new-quotations")}
                >
                  Companies
                </div>
              </div>

              <div className="flex justify-center mb-20 overflow-auto md:overflow-hidden">
                <div className="flex flex-col w-full max-w-screen-md mx-auto">
                  <div className="border border-gray-300 rounded-lg p-4 relative">
                    {/* first row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 px-4 relative">
                      <div className="flex flex-col text-start mb-4">
                        <label className="mb-1" style={{ fontSize: "14px" }}>
                          Name
                        </label>
                        <div className="flex items-center">
                          <input
                            type="text"
                            className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-full"
                            style={{ fontSize: "12px" }}
                            value="Vishnu"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col text-start mb-4">
                        <label className="mb-1" style={{ fontSize: "14px" }}>
                          Mobile number
                        </label>
                        <div className="flex items-center">
                          <input
                            type="number"
                            className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-full"
                            style={{ fontSize: "12px" }}
                            value="123456789"
                          />
                        </div>
                      </div>
                    </div>
                    {/* second row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 px-4 relative mt-4">
                      <div className="flex flex-col text-start mb-4">
                        <span className="mb-1" style={{ fontSize: "14px" }}>
                          Start Date
                        </span>
                        <div className="flex items-center relative">
                          <input
                            type="text"
                            className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-full relative"
                            style={{ fontSize: "12px" }}
                            value={customerData.startDate}
                          />
                          <img
                            src={calenderIcon}
                            alt="calender"
                            className="w-4 h-4 absolute right-5 top-1/2 transform -translate-y-1/2"
                            style={{ pointerEvents: "none" }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col text-start mb-4">
                        <span className="mb-1" style={{ fontSize: "14px" }}>
                          End Date
                        </span>
                        <div className="flex items-center relative">
                          <input
                            type="text"
                            className="bg-slate-100 px-2 py-2 flex rounded-md w-full relative"
                            style={{ fontSize: "12px" }}
                            value={customerData.endDate}
                          />
                          <img
                            src={calenderIcon}
                            alt="calender"
                            className="w-4 h-4 absolute right-5 top-1/2 transform -translate-y-1/2"
                            style={{ pointerEvents: "none" }}
                          />
                        </div>
                      </div>
                    </div>
                    {/* third row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 px-4 relative mt-4">
                      <div className="flex flex-col text-start mb-4">
                        <span className="mb-1" style={{ fontSize: "14px" }}>
                          Pickup Location
                        </span>
                        <div className="flex items-center relative">
                          <input
                            type="text"
                            className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-full relative"
                            style={{ fontSize: "12px" }}
                            value={customerData.pickupLocation}
                          />
                          <img
                            src={locationIcon}
                            alt="calender"
                            className="w-4 h-4 absolute right-5 top-1/2 transform -translate-y-1/2"
                            style={{ pointerEvents: "none" }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col text-start mb-4">
                        <span className="mb-1" style={{ fontSize: "14px" }}>
                          Drop Location
                        </span>
                        <div className="flex items-center relative">
                          <input
                            type="text"
                            className="bg-slate-100 px-2 py-2 flex rounded-md w-full relative"
                            style={{ fontSize: "12px" }}
                            value={customerData.dropLocation}
                          />
                          <img
                            src={locationIcon}
                            alt="calender"
                            className="w-4 h-4 absolute right-5 top-1/2 transform -translate-y-1/2"
                            style={{ pointerEvents: "none" }}
                          />
                        </div>
                      </div>
                    </div>
                    {/* Fourth row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 px-4 relative mt-4">
                      <div className="flex flex-col text-start mb-4">
                        <span className="mb-2" style={{ fontSize: "14px" }}>
                          Trip
                        </span>
                        <div className="bg-slate-200 px-2 py-0.5 mr-2 flex justify-between mb-1 accent-black">
                          <div>
                            <input type="radio" name="trip-type" id="single" />
                            <label className="ml-2" htmlFor="single">
                              Single
                            </label>
                          </div>
                          <img
                            src={rightArrowIcon}
                            alt=""
                            className="w-4 h-4 mt-1"
                          />
                        </div>
                        <div className="bg-slate-200 px-2 py-0.5 mr-2 flex justify-between">
                          <div>
                            <input
                              type="radio"
                              name="trip-type"
                              id="rounded"
                              className="accent-black"
                            />
                            <label className="ml-2" htmlFor="rounded">
                              Rounded
                            </label>
                          </div>
                          <img
                            src={rightLeftIcon}
                            alt=""
                            className="w-4 h-4 mt-1"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col text-start mb-4">
                        <span className="mb-2" style={{ fontSize: "14px" }}>
                          Parking, Toll gate cost
                        </span>
                        <div className="bg-slate-200 px-2 py-0.5 flex justify-between mb-1 accent-black">
                          <div>
                            <input type="radio" name="trip-type" id="single" />
                            <label className="ml-2" htmlFor="single">
                              include
                            </label>
                          </div>
                          <img
                            src={rightArrowIcon}
                            alt=""
                            className="w-4 h-4 mt-1"
                          />
                        </div>
                        <div className="bg-slate-200 px-2 py-0.5 flex justify-between">
                          <div>
                            <input
                              type="radio"
                              name="trip-type"
                              id="rounded"
                              className="accent-black"
                            />
                            <label className="ml-2" htmlFor="rounded">
                              Exclude
                            </label>
                          </div>
                          <img
                            src={rightLeftIcon}
                            alt=""
                            className="w-4 h-4 mt-1"
                          />
                        </div>
                      </div>
                    </div>
                    {/* Fifth row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 px-4 relative mt-4">
                      <div className="flex flex-col text-start mb-4">
                        <span className="mb-1" style={{ fontSize: "14px" }}>
                          No of Passengers
                        </span>
                        <div className="flex items-center relative mr-2">
                          <input
                            type="text"
                            className="bg-slate-100 px-2 py-2 flex rounded-md w-full relative"
                            style={{ fontSize: "12px" }}
                            value={customerData.dropLocation}
                          />
                          <img
                            src={plusIcon}
                            alt="calender"
                            className="w-4 h-4 absolute right-5 top-1/2 transform -translate-y-1/2"
                            style={{ pointerEvents: "none" }}
                          />
                          <img
                            src={minusIcon}
                            alt="calender"
                            className="w-4 h-4 absolute right-12 top-1/2 transform -translate-y-1/2 cursor-pointer"
                            style={{ pointerEvents: "none" }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col text-start mb-4">
                        <span className="mb-1" style={{ fontSize: "14px" }}>
                          Timing
                        </span>
                        <input
                          type="text"
                          className="bg-slate-100 px-2 py-2 flex rounded-md w-full"
                          style={{ fontSize: "12px" }}
                          value={customerData.timing}
                        />
                      </div>
                    </div>
                    {/* sixth row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 px-4 relative mt-4">
                      <div className="flex flex-col text-start mb-4 mr-2">
                        <span className="mb-1" style={{ fontSize: "14px" }}>
                          Estimated Kms
                        </span>
                        <input
                          type="text"
                          className="bg-slate-100 px-2 py-2 flex rounded-md w-full"
                          style={{ fontSize: "12px" }}
                          value={customerData.distance}
                        />
                      </div>
                      <div className="flex flex-col text-start mb-4">
                        <span className="mb-1" style={{ fontSize: "14px" }}>
                          Estimated amount in rs
                        </span>
                        <input
                          type="text"
                          className="bg-slate-100 px-2 py-2 flex rounded-md w-full"
                          style={{ fontSize: "12px" }}
                          value={"Rs. " + customerData.amount}
                        />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="flex relative">
                        <button
                          className="text-white font-bold whitespace-nowrap bottom-9 bg-green-600 rounded-xl px-10 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2"
                          aria-current="page"
                          onClick={() =>
                            navigate("/quotes/customer-new-quotation-preview")
                          }
                        >
                          Preview & Send
                        </button>
                      </div>
                    </div>
                  </div>                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CustomerNewQuotation;
