import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import calenderIcon from "../../assets/calender-icon.svg";
import locationIcon from "../../assets/location-icon-filled.svg";
import minusIcon from "../../assets/minus-icon.svg";
import plusIcon from "../../assets/plus-icon.svg";
import rightArrowIcon from "../../assets/right-arrow-icon.svg";
import rightLeftIcon from "../../assets/right-left-arrow-icon.svg";
import Layout from "../Layout/Layout";

const CustomerNewQuotation = () => {
  const [customerData, setCustomerData] = useState({
    name: "",
    mobileNumber: "",
    startDate: "",
    endDate: "",
    pickupLocation: "",
    dropLocation: "",
    trip: "",
    parkingToll: "",
    noOfPassengers: "",
    timing: "",
    estimatedKms: "",
    estimatedAmount: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Layout>
        <div className="max-w-screen mx-auto px-4 sm:px-8 text-start">
          <div className="flex flex-col">
            <div className="overflow-y-auto">
              <div className="flex justify-between px-2 sm:px-6 pt-2">
                <h1
                  className="text-lg font-bold text-start"
                  style={{ fontSize: "28px", fontWeight: "bolder" }}
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

              <div className="flex justify-center mb-10 overflow-auto">
                <div className="flex flex-col w-full max-w-screen-lg mx-auto">
                  <div className="border border-gray-300 rounded-lg p-4 relative">
                    {/* first row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 px-4 relative">
                      <div className="flex flex-col text-start">
                        <label style={{ fontSize: "14px" }}>Name</label>
                        <div className="flex items-center">
                          <input
                            type="text"
                            className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-full"
                            style={{ fontSize: "12px" }}
                            name="name"
                            value={customerData.name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col text-start">
                        <label style={{ fontSize: "14px" }}>Mobile number</label>
                        <div className="flex items-center">
                          <input
                            type="number"
                            className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-full"
                            style={{ fontSize: "12px" }}
                            name="mobileNumber"
                            value={customerData.mobileNumber}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    {/* second row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 px-4 relative mt-4">
                      <div className="flex flex-col text-start">
                        <span style={{ fontSize: "14px" }}>Start Date</span>
                        <div className="flex items-center relative">
                          <input
                            type="text"
                            className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-full relative"
                            style={{ fontSize: "12px" }}
                            name="startDate"
                            value={customerData.startDate}
                            onChange={handleChange}
                          />
                          <img
                            src={calenderIcon}
                            alt="calender"
                            className="w-4 h-4 absolute right-5 top-1/2 transform -translate-y-1/2"
                            style={{ pointerEvents: "none" }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col text-start">
                        <span style={{ fontSize: "14px" }}>End Date</span>
                        <div className="flex items-center relative">
                          <input
                            type="text"
                            className="bg-slate-100 px-2 py-2 flex rounded-md w-full relative"
                            style={{ fontSize: "12px" }}
                            name="endDate"
                            value={customerData.endDate}
                            onChange={handleChange}
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
                      <div className="flex flex-col text-start">
                        <span style={{ fontSize: "14px" }}>Pickup Location</span>
                        <div className="flex items-center relative">
                          <input
                            type="text"
                            className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-full relative"
                            style={{ fontSize: "12px" }}
                            name="pickupLocation"
                            value={customerData.pickupLocation}
                            onChange={handleChange}
                          />
                          <img
                            src={locationIcon}
                            alt="calender"
                            className="w-4 h-4 absolute right-5 top-1/2 transform -translate-y-1/2"
                            style={{ pointerEvents: "none" }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col text-start">
                        <span style={{ fontSize: "14px" }}>Drop Location</span>
                        <div className="flex items-center relative">
                          <input
                            type="text"
                            className="bg-slate-100 px-2 py-2 flex rounded-md w-full relative"
                            style={{ fontSize: "12px" }}
                            name="dropLocation"
                            value={customerData.dropLocation}
                            onChange={handleChange}
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
                      <div className="flex flex-col text-start">
                        <span style={{ fontSize: "14px" }}>Trip</span>
                        <div className="bg-slate-100 px-2 py-0.5 mr-2 flex justify-between  accent-black">
                          <div>
                            <input
                              type="radio"
                              name="trip"
                              id="single"
                              value="single"
                              onChange={handleChange}
                            />
                            <label
                              className="ml-2"
                              htmlFor="single"
                              style={{ fontSize: "12px" }}
                            >
                              Single
                            </label>
                          </div>
                          <img
                            src={rightArrowIcon}
                            alt=""
                            className="w-4 h-4 mt-1"
                          />
                        </div>
                        <div className="bg-slate-100 px-2 py-0.5 mr-2 flex justify-between mt-1">
                          <div>
                            <input
                              type="radio"
                              name="trip"
                              id="rounded"
                              value="rounded"
                              onChange={handleChange}
                            />
                            <label
                              className="ml-2"
                              htmlFor="rounded"
                              style={{ fontSize: "12px" }}
                            >
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
                      <div className="flex flex-col text-start">
                        <span style={{ fontSize: "14px" }}>
                          Parking, Toll gate cost
                        </span>
                        <div className="bg-slate-100 px-2 py-0.5 flex justify-between  accent-black">
                          <div>
                            <input
                              type="radio"
                              name="parkingToll"
                              id="include"
                              value="include"
                              onChange={handleChange}
                            />
                            <label
                              className="ml-2"
                              htmlFor="include"
                              style={{ fontSize: "12px" }}
                            >
                              include
                            </label>
                          </div>
                          <img
                            src={rightArrowIcon}
                            alt=""
                            className="w-4 h-4 mt-1"
                          />
                        </div>
                        <div className="bg-slate-100 px-2 py-0.5 flex justify-between mt-1">
                          <div>
                            <input
                              type="radio"
                              name="parkingToll"
                              id="exclude"
                              value="exclude"
                              onChange={handleChange}
                            />
                            <label
                              className="ml-2"
                              htmlFor="exclude"
                              style={{ fontSize: "12px" }}
                            >
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
                      <div className="flex flex-col text-start">
                        <span style={{ fontSize: "14px" }}>
                          No of Passengers
                        </span>
                        <div className="flex items-center relative mr-2">
                          <input
                            type="text"
                            className="bg-slate-100 px-2 py-2 flex rounded-md w-full relative"
                            style={{ fontSize: "12px" }}
                            name="noOfPassengers"
                            value={customerData.noOfPassengers}
                            onChange={handleChange}
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
                      <div className="flex flex-col text-start">
                        <span style={{ fontSize: "14px" }}>Timing</span>
                        <input
                          type="text"
                          className="bg-slate-100 px-2 py-2 flex rounded-md w-full"
                          style={{ fontSize: "12px" }}
                          name="timing"
                          value={customerData.timing}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    {/* sixth row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 px-4 relative mt-4">
                      <div className="flex flex-col text-start mr-2">
                        <span style={{ fontSize: "14px" }}>Estimated Kms</span>
                        <input
                          type="text"
                          className="bg-slate-100 px-2 py-2 flex rounded-md w-full"
                          style={{ fontSize: "12px" }}
                          name="estimatedKms"
                          value={customerData.estimatedKms}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex flex-col text-start">
                        <span style={{ fontSize: "14px" }}>
                          Estimated amount in rs
                        </span>
                        <input
                          type="text"
                          className="bg-slate-100 px-2 py-2 flex rounded-md w-full"
                          style={{ fontSize: "12px" }}
                          name="estimatedAmount"
                          value={customerData.estimatedAmount}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="flex justify-end mt-5">
                      <div className="flex relative">
                        <button
                          className="text-white hover:scale-105 ease-in-out duration-300 font-bold whitespace-nowrap bottom-9 bg-green-600 rounded-xl px-10 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2"
                          aria-current="page"
                          onClick={() =>
                            navigate(
                              "/quotes/customer-new-quotation-preview"
                            )
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
