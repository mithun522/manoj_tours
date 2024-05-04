import React from "react";
import rightLeftIcon from "../../assets/right-left-arrow-icon.svg";
import Layout from "../Layout/Layout";

const NewQuotationPreview = () => {
  return (
    <>
      <Layout>
        <div className="max-w-screen mx-auto">
          <div className="flex flex-col">
            <div className="overflow-y-auto shadow-md sm:rounded-lg h-[796px]">
              <div className="flex justify-between px-10 py-6">
                <h1 className="text-lg font-bold" style={{ fontSize: "30px" }}>
                  New Quotations
                </h1>
                <div className="flex">
                  <span>Customer ID: #MT234</span>
                </div>
              </div>
              <span className="text-center font-bold text-2xl">
                New Quotation Preview
              </span>
              <div className="flex justify-center bg-white mt-3 relative">
                <div
                  className="border border-gray-300 rounded-lg p-4"
                  style={{ width: "770px", height: "551px" }}
                >
                  <div className="grid grid-cols-1 divide-x p-6 relative">
                    <div className="flex flex-col text-start mt-[-10px] px-10 py-1">
                      <div className="flex">
                        <div>
                          <span className="font-bold text-gray-500" style={{ fontSize: "14px" }}>
                            Person Name
                          </span>
                          <div className="flex items-center">
                            <span
                              className="flex rounded-md w-72"
                              style={{ fontSize: "12px" }}
                            >
                              John Doe
                            </span>
                          </div>
                        </div>
                        <div className=" ml-5">
                          <span className="font-bold text-gray-500" style={{ fontSize: "14px" }}>
                            Number
                          </span>
                          <div className="flex items-center">
                            <span
                              className=""
                              style={{ fontSize: "12px" }}
                            >
                              1234567890
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex mt-2">
                        <div className="flex flex-col mt-3">
                          <span className="font-bold text-gray-500" style={{ fontSize: "14px" }}>
                            Trip Date
                          </span>
                          <div className="flex items-center">
                            <span
                              className="flex w-72 justify-between"
                              style={{ fontSize: "12px" }}
                            >
                              15th Feb 2024 to 15th March 2024
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col mt-3 ml-5">
                          <span className="font-bold text-gray-500" style={{ fontSize: "14px" }}>
                            Location
                          </span>
                          <div className="flex items-center">
                            <span
                              className="flex rounded-md w-72"
                              style={{ fontSize: "12px" }}
                            >
                              Coimbatore
                              <img
                                src={rightLeftIcon}
                                alt="calender"
                                className="w-4 h-4 ml-2"
                              />
                              Theni
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex mt-2">
                        <div className="flex flex-col mt-3">
                          <span className="font-bold text-gray-500" style={{ fontSize: "14px" }}>
                            Timing
                          </span>
                          <div className="flex items-center">
                            <span
                              className="flex w-72"
                              style={{ fontSize: "12px" }}
                            >
                              9:00 AM
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col mt-3 ml-5">
                          <span className="font-bold text-gray-500" style={{ fontSize: "14px" }}>
                            Trip
                          </span>
                          <div className="flex items-center">
                            <span
                              className="flex"
                              style={{ fontSize: "12px" }}
                            >
                              Round
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex mt-2">
                        <div className="flex flex-col mt-5">
                          <span className="font-bold text-gray-500" style={{ fontSize: "14px" }}>
                            Parking, Toll gate cost
                          </span>
                          <div className="flex w-72">
                            <span className="mb-2" style={{ fontSize: "12px" }}>
                                Exclude
                            </span>       
                          </div>
                        </div>
                        <div className="flex flex-col mt-3 ml-5">
                          <span className="font-bold text-gray-500" style={{ fontSize: "14px" }}>
                            No. of. Passegers
                          </span>
                          <div className="flex w-72">
                            <span style={{ fontSize: "12px" }}>
                            15
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex mt-2">
                        <div className="flex flex-col mt-3">
                          <span className="font-bold text-gray-500" style={{ fontSize: "14px" }}>
                            Estimated Kms
                          </span>
                          <div className="flex items-center">
                            <span
                              className="flex w-72"
                              style={{ fontSize: "12px" }}
                            >
                              500 Kms
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-10">
                      <span className="font-bold text-2xl text-green-600 px-4 py-2 border rounded-xl border-gray-400 shadow-lg shadow-slate-900/20">
                        TOTAL AMOUNT Rs. 45000 /-
                      </span>
                    </div>
                    <div className="flex ml-60">
                      <button
                        className="text-white font-bold mt-14 ml-20 whitespace-nowrap bg-gray-500 rounded-xl px-10 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2"
                        aria-current="page"
                      >
                        Edit
                      </button>
                      <button
                        className="text-white font-bold mt-14 ml-5 whitespace-nowrap bg-green-600 rounded-xl px-10 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2"
                        aria-current="page"
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

export default NewQuotationPreview;
