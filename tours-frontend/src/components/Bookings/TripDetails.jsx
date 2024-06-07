import React, { useState, useEffect } from "react";
import rightArrowIcon from "../../assets/right-arrow-icon.svg";
import rightLeftIcon from "../../assets/right-left-arrow-icon.svg";
import locationIcon from "../../assets/location-icon-filled.svg";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const TripDetails = () => {
  const [tripDetailsData, setTripDetailsData] = useState(() => {
    // Load trip details data from local storage if available, otherwise initialize with empty values
    const storedData = localStorage.getItem("tripDetailsData");
    return storedData ? JSON.parse(storedData) : {
      startDate: "",
      endDate: "",
      fleetName: "",
      fleetNumber: "",
      pickupLocation: "",
      dropLocation: "",
      timing: "",
      estimatedKms: "",
      estimatedAmount: "",
      tripType: "",
    };
  });
  const navigate = useNavigate();
  const location = useLocation();
  const { customerData } = location.state || { customerData: null };

  // Update local storage whenever tripDetailsData changes
  useEffect(() => {
    localStorage.setItem("tripDetailsData", JSON.stringify(tripDetailsData));
  }, [tripDetailsData]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "radio") {
      setTripDetailsData((prevData) => ({
        ...prevData,
        tripType: value,
      }));
    } else {
      setTripDetailsData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };  

  const handleNext = () => {
    if (Object.values(tripDetailsData).every((value) => value.trim() !== "")) {
      navigate("/bookings/new-bookings/payment-details", {
        state: { tripDetailsData: tripDetailsData, customerData: customerData },
      });
    } else {
      toast.error("Please fill in all fields.");
    }
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
                className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md relative w-32"
                style={{ fontSize: "12px" }}
                name="startDate"
                value={tripDetailsData.startDate}
                onChange={handleChange}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                placeholder="Start Date"
              />
            </div>
          </div>
          <div className="flex flex-col mr-12">
            <span className="mb-1" style={{ fontSize: "14px" }}>
              End Date
            </span>
            <div className="flex items-center relative">
              <input
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md relative w-32"
                style={{ fontSize: "12px" }}
                name="endDate"
                value={tripDetailsData.endDate}
                onChange={handleChange}
                placeholder="End Date"
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
              <div className="flex items-center relative">
                <input
                  type="text"
                  className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md relative w-32"
                  style={{ fontSize: "12px" }}
                  name="pickupLocation"
                  value={tripDetailsData.pickupLocation}
                  onChange={handleChange}
                  placeholder="Pickup Location"
                />
                <img
                  src={locationIcon}
                  alt=""
                  className="w-4 h-4 absolute right-3"
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
              <div className="flex items-center relative">
                <input
                  type="text"
                  className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md relative w-32"
                  style={{ fontSize: "12px" }}
                  name="dropLocation"
                  value={tripDetailsData.dropLocation}
                  onChange={handleChange}
                  placeholder="Drop Location"
                />
                <img
                  src={locationIcon}
                  alt=""
                  className="h-4 w-4 absolute right-3"
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
                <input
                  type="radio"
                  name="tripType"
                  id="single"
                  value="single"
                  onChange={handleChange}
                />
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
                  name="tripType"
                  id="rounded"
                  value="rounded"
                  onChange={handleChange}
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
                type="number"
                className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-28"
                style={{ fontSize: "12px" }}
                name="estimatedKms"
                value={tripDetailsData.estimatedKms}
                onChange={handleChange}
                placeholder="Total KM Limit"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span style={{ fontSize: "14px" }}>TIME</span>
            <div className="flex items-center">
              <input
                type="time"
                className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-28"
                style={{ fontSize: "12px" }}
                name="timing"
                value={tripDetailsData.timing}
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
              value={tripDetailsData.fleetName}
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
              value={tripDetailsData.fleetNumber}
              onChange={handleChange}
              placeholder="Fleet Number"
            />
          </div>
        </div>
        <div className="flex flex-col mr-12 mb-5">
          <span className="mb-1" style={{ fontSize: "14px" }}>
            Estimated Amount
          </span>
          <div className="flex items-center">
            <input
              type="number"
              className="bg-slate-100 px-2 mr-2 flex rounded-md w-96 py-2"
              style={{ fontSize: "14px" }}
              name="estimatedAmount"
              value={tripDetailsData.estimatedAmount}
              onChange={handleChange}
              placeholder="Estimated Amount"
            />
          </div>
        </div>
      </div>
      <div className="flex absolute bottom-8 right-0">
        <button
          className="text-white font-bold bg-sky-400 hover:scale-105 ease-in-out duration-300 rounded-xl px-10 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2 mr-2"
          aria-current="page"
          onClick={handleNext}
        >
          Next
        </button>
        <button
          className="text-white font-bold bg-gray-400 hover:scale-105 ease-in-out duration-300 rounded-xl px-5 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2 mr-8"
          aria-current="page"
          onClick={() => navigate("/bookings/new-bookings/personal-info")}
        >
          Previous
        </button>
      </div>
    </div>
  );
};

export default TripDetails;
