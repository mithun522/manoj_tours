import React from "react";
import CalenderIcon from "../../assets/calender-icon.svg";
import rightArrowIcon from "../../assets/right-arrow-icon.svg";
import rightLeftIcon from "../../assets/right-left-arrow-icon.svg";
import locationIcon from "../../assets/location-icon-filled.svg";
import { useNavigate } from "react-router-dom";

const CustomerQuotations = () => {

  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 divide-x p-6 relative">
      <div className="flex flex-col text-start mt-[-10px] px-10 py-1">
          <div className="flex">
            <div>
              <span className="mb-1" style={{ fontSize: "14px" }}>
                Name
              </span>
              <div className="flex items-center">
                <span
                  className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72"
                  style={{ fontSize: "12px" }}
                >
                  John Doe
                </span>
              </div>
            </div>
            <div className=" ml-5">
              <span className="mb-1" style={{ fontSize: "14px" }}>
                Mobile Number
              </span>
              <div className="flex items-center">
                <span
                  className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72"
                  style={{ fontSize: "12px" }}
                >
                  1234567890
                </span>
              </div>
            </div>
          </div>
          <div className="flex mt-2">
              <div className="flex flex-col mt-3">
                <span className="mb-1" style={{ fontSize: "14px" }}>
                  Start Date
                </span>
                <div className="flex items-center">
                  <span
                    className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72 justify-between"
                    style={{ fontSize: "12px" }}
                  >
                    15 FEB 2024
                    <img
                      src={CalenderIcon}
                      alt="Calendar"
                      className="w-4 h-4 ml-2"
                    />
                  </span>
                </div>
              </div>
            <div className="flex flex-col mt-3 ml-5">
              <span className="mb-1" style={{ fontSize: "14px" }}>
                End Date
              </span>
              <div className="flex items-center">
                <span
                  className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72 justify-between"
                  style={{ fontSize: "12px" }}
                >
                  15 FEB 2024
                  <img
                    src={CalenderIcon}
                    alt="Calendar"
                    className="w-4 h-4 ml-2"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="flex mt-2">
              <div className="flex flex-col mt-3">
                <span className="mb-1" style={{ fontSize: "14px" }}>
                  Pickup Location
                </span>
                <div className="flex items-center">
                  <span
                    className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72 justify-between"
                    style={{ fontSize: "12px" }}
                  >
                    Coimbatore
                    <img
                      src={locationIcon}
                      alt="Calendar"
                      className="w-4 h-4 ml-2"
                    />
                  </span>
                </div>
              </div>
            <div className="flex flex-col mt-3 ml-5">
              <span className="mb-1" style={{ fontSize: "14px" }}>
                Drop Location
              </span>
              <div className="flex items-center">
                <span
                  className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72 justify-between"
                  style={{ fontSize: "12px" }}
                >
                  Theni
                  <img
                    src={locationIcon}
                    alt="Calendar"
                    className="w-4 h-4 ml-2"
                  />
                </span>
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
            <div className="flex flex-col ml-5">
              <span className="mb-2" style={{ fontSize: "14px" }}>
                Parking, Toll gate cost
              </span>
              <div className="bg-slate-200 px-2 py-0.5 w-72 flex justify-between mb-1 accent-black">
                <div>
                  <input type="radio" name="trip-type" id="single" />
                  <label className="ml-2" htmlFor="single">
                    include
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
                    Exclude
                  </label>
                </div>
                <img src={rightLeftIcon} alt="" className="w-4 h-4 mt-1" />
              </div>
            </div>
          </div>

          <div className="flex mt-4">
            <div>
              <span className="mb-1" style={{ fontSize: "14px" }}>
                No of Passengers
              </span>
              <div className="flex items-center">
                <span
                  className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72"
                  style={{ fontSize: "12px" }}
                >
                  15
                </span>
              </div>
            </div>
            <div className="ml-5" >
              <span className="mb-1" style={{ fontSize: "14px" }}>
                Timing
              </span>
              <div className="flex items-center">
                <span
                  className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72"
                  style={{ fontSize: "12px" }}
                >
                  9:00 PM
                </span>
              </div>
            </div>
          </div>

          <div className="flex mt-4">
            <div>
              <span className="mb-1" style={{ fontSize: "14px" }}>
                Estimated Kms
              </span>
              <div className="flex items-center">
                <span
                  className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72"
                  style={{ fontSize: "12px" }}
                >
                  800 kMS
                </span>
              </div>
            </div>
            <div className="ml-5" >
              <span className="mb-1" style={{ fontSize: "14px" }}>
                EStimated amount in rs
              </span>
              <div className="flex items-center">
                <span
                  className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72"
                  style={{ fontSize: "12px" }}
                >
                  Rs. 45000 /-
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex ml-96">
          <button
            className="text-white font-bold mt-10 ml-20 whitespace-nowrap bg-green-600 rounded-xl px-10 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2"
            aria-current="page"
            onClick={() => navigate('/quotes/customer-new-quotation-preview')}
          >
            Preview & Send
          </button>
        </div>
    </div>
  );
};

export default CustomerQuotations;
