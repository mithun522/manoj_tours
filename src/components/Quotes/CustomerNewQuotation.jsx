import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";
import calenderIcon from "../../assets/calender-icon.svg";
import rightArrowIcon from "../../assets/right-arrow-icon.svg";
import rightLeftIcon from "../../assets/right-left-arrow-icon.svg";
import locationIcon from "../../assets/location-icon-filled.svg";
import plusIcon from '../../assets/plus-icon.svg';
import minusIcon from '../../assets/minus-icon.svg';

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
        <div className="max-w-screen mx-auto">
          <div className="flex flex-col">
            <div className="overflow-y-auto shadow-md sm:rounded-lg h-[796px]">
              <div className="flex justify-between px-10 pt-2 mt-8">
                <h1 className="text-lg font-bold" style={{ fontSize: "30px" }}>
                  New Quotations
                </h1>
              </div>
              <div className="flex justify-center mb-4">
                <div className="cursor-pointer mr-4 font-semibold w-56 py-2 bg-black text-white rounded-lg">
                  Customer
                </div>
                <div
                  className="cursor-pointer font-semibold ml-10 w-56 py-2 text-gray-500"
                  onClick={() => navigate("/quotes/company-new-quotations")}
                >
                  Companies
                </div>
              </div>
              <div className="flex justify-center bg-white">
                <div
                  className="border border-gray-300 rounded-lg p-4 h-96"
                  style={{ width: "770px", height: "600px" }}
                >
                  <div className="grid grid-cols-1 divide-x p-6 relative">
                    <div className="flex flex-col text-start mt-[-10px] px-10 py-1">
                      <div className="flex">
                        <div>
                          <span className="mb-1" style={{ fontSize: "14px" }}>
                            Name
                          </span>
                          <div className="flex items-center">
                            <input
                              type="text"
                              className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72"
                              style={{ fontSize: "12px" }}
                              value={customerData.customerName}
                            />
                          </div>
                        </div>
                        <div className=" ml-5">
                          <span className="mb-1" style={{ fontSize: "14px" }}>
                            Mobile Number
                          </span>
                          <div className="flex items-center">
                            <input
                              type="number"
                              className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72"
                              style={{ fontSize: "12px" }}
                              value={customerData.mobileNumber}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex mt-2">
                        <div className="flex flex-col mt-3">
                          <span className="mb-1" style={{ fontSize: "14px" }}>
                            Start Date
                          </span>
                          <div className="flex items-center relative">
                            <input
                              type="text"
                              className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72 relative"
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
                        <div className="flex flex-col mt-3 ml-5">
                          <span className="mb-1" style={{ fontSize: "14px" }}>
                            End Date
                          </span>
                          <div className="flex items-center relative">
                            <input
                              type="text"
                              className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72 relative"
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
                      <div className="flex mt-2">
                        <div className="flex flex-col mt-3">
                          <span className="mb-1" style={{ fontSize: "14px" }}>
                            Pickup Location
                          </span>
                          <div className="flex items-center relative">
                            <input
                              type="text"
                              className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72 relative"
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
                        <div className="flex flex-col mt-3 ml-5">
                          <span className="mb-1" style={{ fontSize: "14px" }}>
                            Drop Location
                          </span>
                          <div className="flex items-center relative">
                            <input
                              type="text"
                              className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72 relative"
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
                      <div className="flex mt-2">
                        <div className="flex flex-col mr-3">
                          <span className="mb-2" style={{ fontSize: "14px" }}>
                            Trip
                          </span>
                          <div className="bg-slate-200 px-2 py-0.5 w-72 flex justify-between mb-1 accent-black">
                            <div>
                              <input
                                type="radio"
                                name="trip-type"
                                id="single"
                              />
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
                          <div className="bg-slate-200 px-2 py-0.5 w-72 flex justify-between">
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
                        <div className="flex flex-col ml-5">
                          <span className="mb-2" style={{ fontSize: "14px" }}>
                            Parking, Toll gate cost
                          </span>
                          <div className="bg-slate-200 px-2 py-0.5 w-72 flex justify-between mb-1 accent-black">
                            <div>
                              <input
                                type="radio"
                                name="trip-type"
                                id="single"
                              />
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
                          <div className="bg-slate-200 px-2 py-0.5 w-72 flex justify-between">
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

                      <div className="flex mt-4">
                        <div>
                          <span className="mb-1" style={{ fontSize: "14px" }}>
                            No of Passengers
                          </span>
                          <div className="flex items-center relative">
                            <input
                              type="text"
                              className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72 relative"
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
                        <div className="ml-5">
                          <span className="mb-1" style={{ fontSize: "14px" }}>
                            Timing
                          </span>
                          <div className="flex items-center">
                            <input
                              type="text"
                              className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72"
                              style={{ fontSize: "12px" }}
                              value={customerData.timing}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex mt-4">
                        <div>
                          <span className="mb-1" style={{ fontSize: "14px" }}>
                            Estimated Kms
                          </span>
                          <div className="flex items-center">
                            <input
                              type="text"
                              className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72"
                              style={{ fontSize: "12px" }}
                              value={customerData.distance}
                            />
                          </div>
                        </div>
                        <div className="ml-5">
                          <span className="mb-1" style={{ fontSize: "14px" }}>
                            EStimated amount in rs
                          </span>
                          <input
                              type="text"
                              className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72"
                              style={{ fontSize: "12px" }}
                              value={'Rs. ' +customerData.amount}
                            />
                        </div>
                      </div>
                    </div>
                    <div className="flex ml-96">
                      <button
                        className="text-white font-bold mt-10 ml-20 whitespace-nowrap bg-green-600 rounded-xl px-10 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2"
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
      </Layout>
    </>
  );
};

export default CustomerNewQuotation;
