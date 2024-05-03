import React from "react";
import Layout from "../Layout/Layout";
import innovaImage from "../../assets/innova.png";

const NewBookingPreview = () => {
  return (
    <>
      <Layout>
        <div className="max-w-screen mx-auto">
          <div className="flex flex-col">
            <div className="overflow-y-auto shadow-md sm:rounded-lg h-[796px]">
              <div className="flex justify-between px-10 py-6">
                <h1 className="text-lg font-bold" style={{ fontSize: "30px" }}>
                  New Bookings
                </h1>
                <div className="flex">
                  <span>Customer ID: #MT234</span>
                </div>
              </div>
              <span className="text-center font-bold text-2xl">
                New Booking Preview
              </span>
              <div className="flex justify-center bg-white mt-3 relative">
                <div
                  className="border border-gray-300 rounded-lg p-4 h-96"
                  style={{ width: "770px" }}
                >
                  <div className="flex flex-col">
                    <div className="flex justify-between px-6 py-4">
                      <div className="flex">
                        <img src={innovaImage} alt="" className="w-32 h-16" />
                        <div className="flex flex-col text-start ml-6">
                          <span className="font-bold text-gray-500">
                            Vehicle
                          </span>
                          <span className="text-sm text-gray-900">
                            Innova crysta TN99 CF4567 AS 12+1 seat
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col text-start">
                        <span className="font-bold text-gray-500">ID</span>
                        <span className="text-sm text-gray-900">MT#05</span>
                      </div>
                    </div>
                    <div className="flex justify-between px-6 py-4 text-start">
                      <div className="flex flex-col">
                        <span className="font-bold text-lg text-gray-500">
                          Trip Dates
                        </span>
                        <span className="font-medium text-sm text-gray-500">
                          10th March @ 9:00AM to 15th March 9:00PM
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-lg text-gray-500">
                          No. of. Days
                        </span>
                        <span className="font-medium text-sm text-gray-500">
                          06 days
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-lg text-gray-500">
                          Total KM limit
                        </span>
                        <span className="font-medium text-sm text-gray-500">
                          250 kms
                        </span>
                      </div>
                    </div>
                    <div className="mt-10">
                      <span className="font-bold text-2xl text-green-600 px-4 py-2 border rounded-xl border-gray-400 shadow-lg shadow-slate-900/20">
                        TOTAL AMOUNT Rs. 45000 /-
                      </span>
                    </div>
                    <div className="flex justify-end mt-16">
                      <button
                        className="text-white font-bold bg-gray-500 rounded-xl px-10 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2 mr-4"
                        aria-current="page"
                      >
                        Edit
                      </button>
                      <button
                        className="text-white font-bold bg-green-600 rounded-xl px-5 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2"
                        aria-current="page"
                      >
                        Proceed & Send
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

export default NewBookingPreview;
