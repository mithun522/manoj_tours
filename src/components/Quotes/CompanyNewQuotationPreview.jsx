import React from 'react';
import Swal from 'sweetalert2';
import rightLeftIcon from "../../assets/right-left-arrow-icon.svg";
import Layout from '../Layout/Layout';

const CompanyNewQuotationPreview = () => {

  const companyName = 'Wipro';
  const personName = "Ram";
  const mobileNumber = "1234567890";
  const startDate = '12 FEB 2024';
  const endDate = '12 FEB 2024';
  const pickupLocation = 'Coimbatore';
  const dropLocation = 'Theni';
  const pickupTime = '9:00 : AM';
  const dropTime = '6:00 : PM';
  const totalAmount = 'Rs. ' + 45000 + ' /-';
  const fleet = 'Ertiga';
  const tripType = 'single';
  const startTime = '10:00 AM';
  const endTime = '10:00 PM';
  const days = 'Tue, Thur'

//   useEffect(() => {
//     axios.get(COMPANY_NEW_QUOTATION_PREVIEW)
//     .then((response) => {})
// }, []);

  const handleProceed = () => {
    Swal.fire({
      title: "Quotation!",
      text: "Quotation Send Successfully",
      icon: "success"
    });
  };

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
                  </div>
                  <span className="text-center font-bold text-2xl">
                    Company New Quotation Preview
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
                                Company Name
                              </span>
                              <div className="flex items-center">
                                <span
                                  className="flex rounded-md w-72"
                                  style={{ fontSize: "12px" }}
                                >
                                  {companyName}
                                </span>
                              </div>
                            </div>
                            <div className=" ml-5">
                              <span className="font-bold text-gray-500" style={{ fontSize: "14px" }}>
                                Person Name
                              </span>
                              <div className="flex items-center">
                                <span
                                  className=""
                                  style={{ fontSize: "12px" }}
                                >
                                  {personName}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex mt-2">
                            <div className="flex flex-col mt-3">
                              <span className="font-bold text-gray-500" style={{ fontSize: "14px" }}>
                                Number
                              </span>
                              <div className="flex items-center">
                                <span
                                  className="flex w-72 justify-between"
                                  style={{ fontSize: "12px" }}
                                >
                                  {mobileNumber}
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
                                  {pickupLocation}
                                  <img
                                    src={rightLeftIcon}
                                    alt="calender"
                                    className="w-4 h-4 ml-2"
                                  />
                                  {dropLocation}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex mt-2">
                            <div className="flex flex-col mt-3">
                              <span className="font-bold text-gray-500" style={{ fontSize: "14px" }}>
                                Trip Dates
                              </span>
                              <div className="flex items-center">
                                <span
                                  className="flex w-72"
                                  style={{ fontSize: "12px" }}
                                >
                                  {startDate} @ {pickupTime} to {endDate} @ {dropTime}
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
                                  {tripType}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex mt-2">
                            <div className="flex flex-col mt-5">
                              <span className="font-bold text-gray-500" style={{ fontSize: "14px" }}>
                                Days
                              </span>
                              <div className="flex w-72">
                                <span className="mb-2" style={{ fontSize: "12px" }}>
                                    {days}
                                </span>       
                              </div>
                            </div>
                            <div className="flex flex-col mt-3 ml-5">
                              <span className="font-bold text-gray-500" style={{ fontSize: "14px" }}>
                                Timing
                              </span>
                              <div className="flex w-72">
                                <span style={{ fontSize: "12px" }}>
                                {startTime} to {endTime}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex mt-2">
                            <div className="flex flex-col mt-3">
                              <span className="font-bold text-gray-500" style={{ fontSize: "14px" }}>
                                Fleet
                              </span>
                              <div className="flex items-center">
                                <span
                                  className="flex w-72"
                                  style={{ fontSize: "12px" }}
                                >
                                  {fleet}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-10">
                          <span className="font-bold text-2xl text-green-600 px-4 py-2 border rounded-xl border-gray-400 shadow-lg shadow-slate-900/20">
                            TOTAL AMOUNT Rs. {totalAmount}
                          </span>
                        </div>
                        <div className="flex ml-60">
                          <button
                            className="text-white hover:scale-105 ease-in-out duration-300 font-bold mt-14 ml-20 whitespace-nowrap bg-gray-500 rounded-xl px-10 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2"
                            aria-current="page"
                          >
                            Edit
                          </button>
                          <button
                            className="text-white hover:scale-105 ease-in-out duration-300 font-bold mt-14 ml-5 whitespace-nowrap bg-green-600 rounded-xl px-10 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2"
                            aria-current="page"
                            onClick={() => handleProceed()}
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
}

export default CompanyNewQuotationPreview;
