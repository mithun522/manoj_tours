import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import calenderIcon from "../../assets/calender-icon.svg";
import locationIcon from "../../assets/location-icon-filled.svg";
import Layout from "../Layout/Layout";

const CompaniesNewQuotation = () => {
  const navigate = useNavigate();

  const [companyData, setCompanyData] = useState({
    companyName: "",
    personName: "",
    mobileNumber: "",
    startDate: "",
    endDate: "",
    pickupLocation: "",
    dropLocation: "",
    pickupTime: "",
    dropTime: "",
    estimatedAmount: "",
    fleet: "",
  });

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [checkedDays, setCheckedDays] = useState(
    Array(daysOfWeek.length).fill(false)
  );

  const handleCheckboxChange = (index) => {
    const newCheckedDays = [...checkedDays];
    newCheckedDays[index] = !newCheckedDays[index];
    setCheckedDays(newCheckedDays);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Layout>
        <div className="max-w-screen mx-auto text-start">
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
                <div
                  className="cursor-pointer mr-2 sm:mr-4 font-semibold w-full sm:w-auto py-2 px-10 border shadow-lg text-black rounded-lg text-center sm:text-left"
                  onClick={() => navigate("/quotes/customer-new-quotations")}
                >
                  Customer
                </div>
                <div className="cursor-pointer mr-2 sm:mr-4 font-semibold w-full sm:w-auto py-2 px-10 bg-black text-white rounded-lg text-center sm:text-left">
                  Companies
                </div>
              </div>

              <div className="flex justify-center mb-20 overflow-auto">
                <div className="flex flex-col w-full max-w-screen-md mx-auto">
                  <div className="border border-gray-300 rounded-lg p-4 relative">
                    {/* first Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 px-4 relative">
                      <div className="flex flex-col text-start">
                        <label style={{ fontSize: "14px" }}>Company Name</label>
                        <div className="flex items-center">
                          <input
                            type="text"
                            className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-full"
                            style={{ fontSize: "12px" }}
                            name="companyName"
                            value={companyData.companyName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col text-start">
                        <label style={{ fontSize: "14px" }}>Person Name</label>
                        <div className="flex items-center">
                          <input
                            type="text"
                            className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-full"
                            style={{ fontSize: "12px" }}
                            name="personName"
                            value={companyData.personName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    {/* second row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 px-4 relative mt-2">
                      <div className="flex flex-col text-start">
                        <label style={{ fontSize: "14px" }}>Mobile Number</label>
                        <div className="flex items-center">
                          <input
                            type="number"
                            className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-full"
                            style={{ fontSize: "12px" }}
                            name="mobileNumber"
                            value={companyData.mobileNumber}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col text-start"></div>
                    </div>
                    {/* third row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 px-4 relative">
                      <div className="flex flex-col mt-3 w-full">
                        <span style={{ fontSize: "14px" }}>Start Date</span>
                        <div className="flex items-center relative">
                          <input
                            type="text"
                            className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-full"
                            style={{ fontSize: "12px" }}
                            name="startDate"
                            value={companyData.startDate}
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
                      <div className="flex flex-col mt-3 w-full">
                        <span
                          className=" text-sm sm:text-base"
                          style={{ fontSize: "14px" }}
                        >
                          End Date
                        </span>
                        <div className="flex items-center relative">
                          <input
                            type="text"
                            className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-full"
                            style={{ fontSize: "12px" }}
                            name="endDate"
                            value={companyData.endDate}
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
                    {/* fourth row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 px-4 mt-2">
                      <div className="flex flex-col mt-3 w-full">
                        <span
                          className="text-sm sm:text-base"
                          style={{ fontSize: "14px" }}
                        >
                          Pickup Location
                        </span>
                        <div className="flex items-center relative">
                          <input
                            type="text"
                            className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-full"
                            style={{ fontSize: "12px" }}
                            name="pickupLocation"
                            value={companyData.pickupLocation}
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
                      <div className="flex flex-col mt-3 w-full">
                        <span
                          className="text-sm sm:text-base"
                          style={{ fontSize: "14px" }}
                        >
                          Drop Location
                        </span>
                        <div className="flex items-center relative">
                          <input
                            type="text"
                            className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-full"
                            style={{ fontSize: "12px" }}
                            name="dropLocation"
                            value={companyData.dropLocation}
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
                    {/* fifth row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 px-4 relative">
                      <div className="flex flex-col mt-3 ml-0 w-full">
                        <span
                          className="text-sm sm:text-base"
                          style={{ fontSize: "14px" }}
                        >
                          Pickup Time
                        </span>
                        <div className="flex items-center relative">
                          <input
                            type="text"
                            className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-full"
                            style={{ fontSize: "12px" }}
                            name="pickupTime"
                            value={companyData.pickupTime}
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
                      <div className="flex flex-col mt-3 ml-0 w-full">
                        <span
                          className="text-sm sm:text-base"
                          style={{ fontSize: "14px" }}
                        >
                          Drop Time
                        </span>
                        <div className="flex items-center relative">
                          <input
                            type="text"
                            className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-full"
                            style={{ fontSize: "12px" }}
                            name="dropTime"
                            value={companyData.dropTime}
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
                    {/* sixth row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 px-4 relative">
                      <div className="flex flex-col mt-3">
                        <span style={{ fontSize: "14px" }}>Day</span>
                        <div className="flex items-center">
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
                                className={`px-0.5 py-1 mr-2 w-8 flex rounded-md justify-between ${
                                  checkedDays[index]
                                    ? "bg-gray-600 text-white"
                                    : "bg-slate-200"
                                }`}
                                style={{ fontSize: "12px" }}
                              >
                                {day.substring(0, 1)}
                              </label>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col mt-3 w-full relative px-2">
                        <span style={{ fontSize: "14px" }}>
                          Estimate amount in rupees
                        </span>
                        <div className="flex items-center">
                          <input
                            type="text"
                            className="bg-slate-100 px-2 py-2 flex rounded-md w-full justify-between pr-8"
                            style={{ fontSize: "12px" }}
                            name="estimatedAmount"
                            value={companyData.estimatedAmount}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    {/* seventh row */}
                    <div className="flex flex-col text-start w-1/2 px-2">
                      <label style={{ fontSize: "14px" }}>Fleet</label>
                      <select
                        className="input-field bg-slate-100 px-2.5 py-1.5 w-full rounded-md"
                        style={{ fontSize: "12px" }}
                        name="fleet"
                        value={companyData.fleet}
                        onChange={handleChange}
                      >
                        <option value="innova">Innova</option>
                        <option value="creta">Creta</option>
                        <option value="seltos">Seltos</option>
                        <option value="alto">Alto</option>
                      </select>
                    </div>
                    <div className="flex justify-end">
                      <div className="flex relative">
                        <button
                          className="text-white font-bold whitespace-nowrap bottom-9 bg-green-600 rounded-xl px-10 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2"
                          aria-current="page"
                          onClick={() =>
                            navigate("/quotes/company-new-quotation-preview")
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

export default CompaniesNewQuotation;
