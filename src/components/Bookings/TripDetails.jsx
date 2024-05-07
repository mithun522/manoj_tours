import React, { useState } from "react";
import calenderIcon from "../../assets/calender-icon.svg";
import rightArrowIcon from "../../assets/right-arrow-icon.svg";
import rightLeftIcon from "../../assets/right-left-arrow-icon.svg";

const TripDetails = () => {
  const [customerData, setCustomerData] = useState({
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 divide-x p-4 px-10 relative">
      <div className="flex flex-col text-start mt-[-10px]">
        <div className="flex mb-6 flex-1">
          <div className="flex flex-col mr-12">
            <span className="mb-1" style={{ fontSize: "14px" }}>
              Start Date
            </span>
            <div className="flex items-center relative">
              <input
                type="text"
                className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md relative w-32"
                style={{ fontSize: "12px" }}
                name="startDate"
                value={customerData.startDate}
                onChange={handleChange}
                placeholder="Start Date"
              />
              <img
                src={calenderIcon}
                alt="calender"
                className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2"
                style={{ pointerEvents: "none" }}
              />
            </div>
          </div>
          <div className="flex flex-col mr-12">
            <span className="mb-1" style={{ fontSize: "14px" }}>
              End Date
            </span>
            <div className="flex items-center relative">
              <input
                type="text"
                className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md relative w-32"
                style={{ fontSize: "12px" }}
                name="endDate"
                value={customerData.endDate}
                onChange={handleChange}
                placeholder="End Date"
              />
              <img
                src={calenderIcon}
                alt="calender"
                className="w-4 h-4 absolute right-4 top-1/2 transform -translate-y-1/2"
                style={{ pointerEvents: "none" }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col text-start">
          <div className="flex mb-3 flex-1">
            <div className="flex flex-col mr-12">
              <span className="mb-1" style={{ fontSize: "14px" }}>
                Pickup Location
              </span>
              <div className="flex items-center">
                <input
                  type="text"
                  className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-28"
                  style={{ fontSize: "12px" }}
                  name="pickupLocation"
                  value={customerData.pickupLocation}
                  onChange={handleChange}
                  placeholder="Pickup Location"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span
                className="mb-2 whitespace-nowrap"
                style={{ fontSize: "14px" }}
              >
                Drop Location
              </span>
              <div className="flex items-center">
                <input
                  type="text"
                  className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-28"
                  style={{ fontSize: "12px" }}
                  name="dropLocation"
                  value={customerData.dropLocation}
                  onChange={handleChange}
                  placeholder="Drop Location"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex mb-6">
          <div className="flex flex-col mr-12">
            <span className="mb-2" style={{ fontSize: "14px" }}>
              Trip
            </span>
            <div className="bg-slate-200 px-2 py-0.5 w-72 flex justify-between mb-1 accent-black">
              <div>
                <input type="radio" name="trip-type" id="single" />
                <label className="ml-2" htmlFor="single">
                  Single
                </label>
              </div>
              <img src={rightArrowIcon} alt="" className="w-4 h-4 mt-1" />
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
              <img src={rightLeftIcon} alt="" className="w-4 h-4 mt-1" />
            </div>
          </div>
        </div>

        <div className="flex mb-6 flex-1">
          <div className="flex flex-col mr-12">
            <span className="mb-1" style={{ fontSize: "14px" }}>
              TOTAL KM LIMIT
            </span>
            <div className="flex items-center">
              <input
                type="text"
                className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-28"
                style={{ fontSize: "12px" }}
                name="estimatedKms"
                value={customerData.estimatedKms}
                onChange={handleChange}
                placeholder="Total KM Limit"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span style={{ fontSize: "14px" }}>
              TIME
            </span>
            <div className="flex items-center">
              <input
                type="text"
                className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-28"
                style={{ fontSize: "12px" }}
                name="timing"
                value={customerData.timing}
                onChange={handleChange}
                placeholder="Time"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 p-4 text-start mt-[-25px]">
        <div className="flex flex-col mr-12 mb-5">
          <span className="mb-1" style={{ fontSize: "14px" }}>
            Fleet Name
          </span>
          <div className="flex items-center">
            <input
              type="text"
              className="bg-slate-100 px-2 mr-2 flex rounded-md w-96 py-2"
              style={{ fontSize: "14px" }}
              name="fleetName"
              value={customerData.fleetName}
              onChange={handleChange}
              placeholder="Fleet Name"
            />
          </div>
        </div>
        <div className="flex flex-col mr-12 mb-5">
          <span className="mb-1" style={{ fontSize: "14px" }}>
            Fleet Number
          </span>
          <div className="flex items-center">
            <input
              type="text"
              className="bg-slate-100 px-2 mr-2 flex rounded-md w-96 py-2"
              style={{ fontSize: "14px" }}
              name="fleetNumber"
              value={customerData.fleetNumber}
              onChange={handleChange}
              placeholder="Fleet Number"
            />
          </div>
        </div>
      </div>
      <div className="flex absolute bottom-8 right-0">
        <button
          className="text-white font-bold bg-sky-400 hover:scale-105 ease-in-out duration-300 rounded-xl px-10 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2 mr-2"
          aria-current="page"
        >
          Next
        </button>
        <button
          className="text-white font-bold bg-gray-400 hover:scale-105 ease-in-out duration-300 rounded-xl px-5 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2 mr-8"
          aria-current="page"
        >
          Previous
        </button>
      </div>
    </div>
  );
};

export default TripDetails;
