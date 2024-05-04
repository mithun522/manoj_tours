import React from "react";
import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";
import calenderIcon from "../../assets/calender-icon.svg";
import rightArrowIcon from "../../assets/right-arrow-icon.svg";
import locationIcon from "../../assets/location-icon-filled.svg";

const ShareLinksInfo = () => {
  const navigate = useNavigate();

  return (
    <>
      <Layout>
        <div className="flex justify-center bg-white h-[calc(100vh-200px)] w-[calc(100vw-350px)] overflow-auto">
          <div className="flex flex-col w-full max-w-screen-md mx-auto">
            <h1 className="text-center mt-8 mb-6 text-xl font-bold">Info</h1>
            <div className="border border-gray-300 rounded-lg p-4 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 relative">
                <div className="flex flex-col text-start">
                  <label className="mb-1" style={{ fontSize: "14px" }}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="input-field bg-slate-100 px-2.5 py-1.5 w-full rounded-md"
                    value="Wipro"
                    style={{fontSize: '12px'}}
                  />
                </div>
                <div className="flex flex-col text-start">
                  <label className="mb-1" style={{ fontSize: "14px" }}>
                    Person Name
                  </label>
                  <input
                    type="text"
                    className="input-field bg-slate-100 px-2.5 py-1.5 w-full rounded-md"
                    value="Ram"
                    style={{fontSize: '12px'}}
                  />
                </div>
                <div className="flex flex-col text-start">
                  <label className="mb-1" style={{ fontSize: "14px" }}>
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    className="input-field bg-slate-100 px-2.5 py-1.5 w-full rounded-md"
                    value="1234567890"
                    style={{fontSize: '12px'}}
                  />
                </div>
                <div></div>
                <div className="flex flex-col text-start">
                  <label className="mb-1" style={{ fontSize: "14px" }}>
                    Start Date
                  </label>
                  <div className="relative flex">
                    <input
                      type="text"
                      className="input-field bg-slate-100 px-2.5 py-1.5 w-full rounded-md"
                      value="12 FEB 2024"
                      style={{fontSize: '12px'}}
                    />
                    <img
                      src={calenderIcon}
                      alt="calender"
                      className="w-5 h-5 -ml-10 mt-1"
                    />
                  </div>
                </div>
                <div className="flex flex-col text-start">
                  <label className="mb-1" style={{ fontSize: "14px" }}>
                    End Date
                  </label>
                  <div className="relative flex">
                    <input
                      type="text"
                      className="input-field bg-slate-100 px-2.5 py-1.5 w-full rounded-md"
                      value="14 MAY 2024"
                      style={{fontSize: '12px'}}
                    />
                    <img
                      src={calenderIcon}
                      alt="calender"
                      className="w-5 h-5 -ml-10 mt-1"
                    />
                  </div>
                </div>
                <div className="flex flex-col text-start">
                  <label className="mb-1" style={{ fontSize: "14px" }}>
                    Pickup Location
                  </label>
                  <div className="relative flex">
                    <input
                      type="text"
                      className="input-field bg-slate-100 px-2.5 py-1.5 w-full rounded-md"
                      value="Coimbatore"
                      style={{fontSize: '12px'}}
                    />
                    <img
                      src={locationIcon}
                      alt="calender"
                      className="w-5 h-5 -ml-10 mt-1"
                    />
                  </div>
                </div>
                <div className="flex flex-col text-start">
                  <label className="mb-1" style={{ fontSize: "14px" }}>
                    Drop Location
                  </label>
                  <div className="relative flex">
                    <input
                      type="text"
                      className="input-field bg-slate-100 px-2.5 py-1.5 w-full rounded-md"
                      value="Theni"
                      style={{fontSize: '12px'}}
                    />
                    <img
                      src={locationIcon}
                      alt="calender"
                      className="w-5 h-5 -ml-10 mt-1"
                    />
                  </div>
                </div>
                <div className="flex flex-col text-start">
                  <label className="mb-1" style={{ fontSize: "14px" }}>
                    Trip
                  </label>
                  <div className="relative flex">
                    <input
                      type="text"
                      className="input-field bg-slate-100 px-2.5 py-1.5 w-full rounded-md"
                      value="Single"
                      style={{fontSize: '12px'}}
                    />
                    <img
                      src={rightArrowIcon}
                      alt="calender"
                      className="w-5 h-5 -ml-10 mt-1"
                    />
                  </div>
                </div>
                <div className="flex flex-col text-start">
                  <label className="mb-1" style={{ fontSize: "14px" }}>
                    Estimate amount in rupees
                  </label>
                  <input
                    type="text"
                    className="input-field bg-slate-100 px-2.5 py-1.5 w-full rounded-md"
                    value="Rs. 45000 /-"
                    style={{fontSize: '12px'}}
                  />
                </div>
                <div className="flex flex-col text-start">
                  <label className="mb-1" style={{ fontSize: "14px" }}>
                    Fleet
                  </label>
                  <select
                    className="input-field bg-slate-100 px-2.5 py-1.5 w-full rounded-md"
                    style={{fontSize: '12px'}}
                  >
                    <option value="innova">Innova</option>
                    <option value="creta">Creta</option>
                    <option value="seltos">Seltos</option>
                    <option value="alto">Alto</option>
                  </select>
                </div>
                <div className="flex flex-col text-start">
                  <label className="mb-1" style={{ fontSize: "14px" }}>
                    Pickup Time
                  </label>
                  <input
                    type="text"
                    className="input-field bg-slate-100 px-2.5 py-1.5 w-full rounded-md"
                    value="10:00 AM"
                    style={{fontSize: '12px'}}
                  />
                </div>
                <div className="flex flex-col text-start">
                  <label className="mb-1" style={{ fontSize: "14px" }}>
                    Drop Time
                  </label>
                  <input
                    type="text"
                    className="input-field bg-slate-100 px-2.5 py-1.5 w-full rounded-md"
                    value="6:00 PM"
                    style={{fontSize: '12px'}}
                  />
                </div>
              </div>
              <button
                className="text-white font-bold bg-green-600 rounded-xl px-10 py-2 shadow-lg absolute bottom-4 right-4"
                onClick={() =>
                  navigate("/quotes/customer-new-quotation-preview")
                }
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ShareLinksInfo;
