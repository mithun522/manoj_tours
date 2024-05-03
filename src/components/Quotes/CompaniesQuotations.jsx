import React from "react";
import CalenderIcon from "../../assets/calender-icon.svg";
import rightArrowIcon from "../../assets/right-arrow-icon.svg";
import rightLeftIcon from "../../assets/right-left-arrow-icon.svg";
import locationIcon from "../../assets/location-icon-filled.svg";
import { useNavigate } from "react-router-dom";

const CompaniesQuotations = () => {
  const navigate = useNavigate();
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <div className="grid grid-cols-1 divide-x p-6 relative">
      <div className="flex flex-col text-start mt-[-10px] px-10 py-1">
        <div className="flex">
          <div>
            <span className="mb-1" style={{ fontSize: "14px" }}>
              Company Name
            </span>
            <div className="flex items-center">
              <span
                className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72"
                style={{ fontSize: "12px" }}
              >
                Wipro
              </span>
            </div>
          </div>
          <div className=" ml-5">
            <span className="mb-1" style={{ fontSize: "14px" }}>
              Person Name
            </span>
            <div className="flex items-center">
              <span
                className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72"
                style={{ fontSize: "12px" }}
              >
                Ram
              </span>
            </div>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="flex flex-col mt-3">
            <span className="mb-1" style={{ fontSize: "14px" }}>
              Mobile Number
            </span>
            <div className="flex items-center">
              <span
                className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72 justify-between"
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
            <div className="flex" >
                <div className="flex-col" >
                    <span className="mb-2" style={{ fontSize: "14px" }}>
                        Day
                    </span>
                    <span
                        className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-28 justify-between"
                        style={{ fontSize: "12px" }}
                    >
                        
                    </span>
                </div>
                <div className="flex-col ml-20" >
                    <span className="mb-2" style={{ fontSize: "14px" }}>
                        Drop Time
                    </span>
                    <span
                        className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-28 justify-between"
                        style={{ fontSize: "12px" }}
                    >
                        6:00 PM
                    </span>
                </div>
            </div>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="flex flex-col mt-3">
            <span className="mb-1" style={{ fontSize: "14px" }}>
              Day
            </span>
            <div className="flex items-center">
                <div className="flex" >
                    {daysOfWeek.map((day, index) => (
                        <span
                        key={index}
                        className="bg-slate-100 px-3 py-2 mr-2 flex rounded-md justify-between"
                        style={{ fontSize: "12px" }}
                        >
                        {day.substring(0,1)}
                        </span>
                    ))}
                </div>
            </div>
          </div>
          <div className="flex flex-col mt-3 ml-10">
            <span className="mb-1" style={{ fontSize: "14px" }}>
              Estimate amount in rupees
            </span>
            <div className="flex items-center">
              <span
                className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72 justify-between"
                style={{ fontSize: "12px" }}
              >
                Rs. 45000 /-
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
          <div className="flex flex-col mt-3">
            <span className="mb-1" style={{ fontSize: "14px" }}>
              Fleet
            </span>
            <div className="flex items-center">
                <select
                    className="bg-slate-100 px-3 py-2 mr-2 flex rounded-md w-72 justify-between"
                    style={{ fontSize: "14px" }}
                >
                    <option value="innova">Innova</option>
                    <option value="creta">Creta</option>
                    <option value="seltos">Seltos</option>
                    <option value="alto">Alto</option>
                </select>
            </div>
          </div>
          <div>
          <div className="flex ml-20">
        <button
          className="text-white font-bold mt-8 ml-20 whitespace-nowrap bg-green-600 rounded-xl px-10 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2"
          aria-current="page"
          onClick={() => navigate("/quotes/company-new-quotation-preview")}
        >
          Preview & Send
        </button>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesQuotations;
