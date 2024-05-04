import React, { useState } from "react";
import Layout from "../Layout/Layout";
import calenderIcon from "../../assets/calender-icon.svg";
import rightArrowIcon from "../../assets/right-arrow-icon.svg";
import rightLeftIcon from "../../assets/right-left-arrow-icon.svg";
import locationIcon from "../../assets/location-icon-filled.svg";
import { useNavigate } from "react-router-dom";

const CompaniesNewQuotation = () => {
  const navigate = useNavigate();
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [checkedDays, setCheckedDays] = useState(Array(daysOfWeek.length).fill(false));

  const handleCheckboxChange = (index) => {
      const newCheckedDays = [...checkedDays];
      newCheckedDays[index] = !newCheckedDays[index];
      setCheckedDays(newCheckedDays);
  };

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
                <div
                  className="cursor-pointer font-semibold ml-10 w-56 py-2 text-gray-500"
                  onClick={() => navigate("/quotes/customer-new-quotations")}
                >
                  Customer
                </div>
                <div className="cursor-pointer mr-4 font-semibold w-56 py-2 bg-black text-white rounded-lg">
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
                            Company Name
                          </span>
                          <div className="flex items-center">
                            <input
                              type="text"
                              className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72"
                              style={{ fontSize: "12px" }}
                              value="Wipro"
                            />
                          </div>
                        </div>
                        <div className=" ml-5">
                          <span className="mb-1" style={{ fontSize: "14px" }}>
                            Person Name
                          </span>
                          <div className="flex items-center">
                            <input
                              type="text"
                              className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72"
                              style={{ fontSize: "12px" }}
                              value="Ram"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex mt-2">
                        <div className="flex flex-col mt-3">
                          <span className="mb-1" style={{ fontSize: "14px" }}>
                            Mobile Number
                          </span>
                          <div className="flex items-center">
                            <input
                              type="text"
                              className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72 justify-between"
                              style={{ fontSize: "12px" }}
                              value="1234567890"
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
                              value='12 FEB 2024'
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
                              value='14 MAY 2024'
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
                              value='Coimbatore'
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
                              value='Theni'
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
                          <div className="flex">
                            <div className="flex-col">
                              <span
                                className="mb-2"
                                style={{ fontSize: "14px" }}
                              >
                                Pickup Time
                              </span>
                              <input
                                type="text"
                                className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-28 justify-between"
                                style={{ fontSize: "12px" }}
                                value="10:00 AM"
                              />
                            </div>
                            <div className="flex-col ml-20">
                              <span
                                className="mb-2"
                                style={{ fontSize: "14px" }}
                              >
                                Drop Time
                              </span>
                              <input
                                type="text"
                                className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-28 justify-between"
                                style={{ fontSize: "12px" }}
                                value="6:00 PM"
                              />
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
                            <div className="flex">
                                {daysOfWeek.map((day, index) => (
                                    <React.Fragment key={index}>
                                        <input
                                            type="checkbox"
                                            id={`checkbox-${index}`}
                                            checked={checkedDays[index]}
                                            onChange={() => handleCheckboxChange(index)}
                                            className="hidden"
                                        />
                                        <label
                                            htmlFor={`checkbox-${index}`}
                                            className={`px-0.5 py-1 mr-2 w-8 flex rounded-md justify-between ${checkedDays[index] ? 'bg-gray-600 text-white' : 'bg-slate-200'}`}
                                            style={{ fontSize: "12px" }}
                                        >
                                            {day.substring(0, 1)}
                                        </label>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                        </div>
                        <div className="flex flex-col mt-3 ml-10">
                          <span className="mb-1" style={{ fontSize: "14px" }}>
                            Estimate amount in rupees
                          </span>
                          <div className="flex items-center">
                            <input
                              type="text"
                              className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72 justify-between"
                              style={{ fontSize: "12px" }}
                              value="Rs. 45000 /-"
                            />
                            <img
                              src={locationIcon}
                              alt="calender"
                              className="w-4 h-4 ml-2"
                            />
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
                              onClick={() =>
                                navigate(
                                  "/quotes/company-new-quotation-preview"
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
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CompaniesNewQuotation;
