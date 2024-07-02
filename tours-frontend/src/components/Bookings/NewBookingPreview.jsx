import axios from "axios";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import innovaImage from "../../assets/innova.png";
import Layout from "../Layout/Layout";
import { BOOKINGS, CUSTOMER } from "../shared/Api";

const NewBookingPreview = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const { customerData, tripDetailsData, paymentDetails } = location.state;

  useEffect(() => {
    console.log(customerData, tripDetailsData, paymentDetails);
  }, [customerData, tripDetailsData, paymentDetails]);

  const handleProceed = async () => {
    const bookingData = {
      name: customerData.name,
      mobileNumber: customerData.mobileNumber,
      address: customerData.address,
      pickupLocation: tripDetailsData.pickupLocation,
      dropLocation: tripDetailsData.dropLocation,
      startDate: tripDetailsData.startDate,
      endDate: tripDetailsData.endDate,
      timing: tripDetailsData.timing,
      fleetName: tripDetailsData.fleetName,
      fleetNumber: tripDetailsData.fleetNumber,
      estimatedKms: tripDetailsData.estimatedKms,
      estimatedAmount: tripDetailsData.estimatedAmount,
      advanceAmount: paymentDetails.advanceAmount,
      paymentMode: paymentDetails.paymentMode,
      totalAmount: paymentDetails.totalAmount,
      status: 'Pending',
      tripType: 'Single',
    };

    try {
      const response = await axios.post(CUSTOMER)
      if(response.status === 201) {
        toast.success("A Customer with name " + response.name + " has been added")
      }
    } catch (err) {
      console.log(err);
    }

    try {
      const response = await axios.post(BOOKINGS, bookingData);
      console.log(bookingData);
      if (response.status === 201) {
        toast.success("Bookings saved successfully");        
        navigate("/bookings");
        localStorage.removeItem('customerData');
        localStorage.removeItem('tripDetailsData');
      }

      // const billNode = document.getElementById('bill-container');

      // htmlToImage.toPng(billNode)
      //   .then(function (dataUrl) {
      //     const img = new Image();
      //     img.src = dataUrl;
      //     document.body.appendChild(img);
      //   })
      //   .catch(function (error) {
      //     console.error('Image generation error:', error);
      //   });

    } catch (error) {
      toast.error("Failed to save booking");
      console.error("Booking save error:", error);
    }
  };

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
                  id="bill-container"
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
                            {tripDetailsData.fleetName}
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
                          {tripDetailsData.startDate} @ {tripDetailsData.timing} to {tripDetailsData.endDate} @ {tripDetailsData.timing}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-lg text-gray-500">
                          No. of. Days
                        </span>
                        <span className="font-medium text-sm text-gray-500">
                          {Math.ceil((new Date(tripDetailsData.endDate) - new Date(tripDetailsData.startDate)) / (1000 * 60 * 60 * 24))} days
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-lg text-gray-500">
                          Total KM limit
                        </span>
                        <span className="font-medium text-sm text-gray-500">
                          {tripDetailsData.estimatedKms} kms
                        </span>
                      </div>
                    </div>
                    <div className="mt-10">
                      <span className="font-bold text-2xl text-green-600 px-4 py-2 border rounded-xl border-gray-400 shadow-lg shadow-slate-900/20">
                        TOTAL AMOUNT Rs. {paymentDetails.totalAmount} /-
                      </span>
                    </div>
                    <div className="flex justify-end mt-16">
                      <button
                        className="text-white font-bold bg-gray-500 hover:scale-105 ease-in-out duration-300 rounded-xl px-10 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2 mr-4"
                        aria-current="page"
                      >
                        Edit
                      </button>
                      <button
                        className="text-white font-bold bg-green-600 hover:scale-105 ease-in-out duration-300 rounded-xl px-5 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2"
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
};

export default NewBookingPreview;
