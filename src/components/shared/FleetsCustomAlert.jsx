// FleetsCustomAlert.js
import React, { useState } from "react";
import successIcon from "../../assets/checkmark-circle.svg";

const FleetsCustomAlert = ({ close }) => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  // Function to handle moving fleet to available and show alert
  const handleMoveFleetToAvailable = () => {
    close();
    setShowSuccessAlert(true);
  };

  return (
    <>
      {!showSuccessAlert && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="relative bg-white py-20 rounded-lg shadow-md dark:bg-gray-700">
            <button
              onClick={() => close()}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col text-center px-10">
              <h2 className="font-black text-2xl">Are You Sure?</h2>
              <h2 className="font-black text-2xl">
                Do You Want to move this fleet to available
              </h2>
            </div>

            <div className="grid grid-cols-1 p-4 mb-10 items-center justify-center">
              <div className="">
                <span className="font-medium">Vehicle</span>
                <span className="font-medium ml-5">Eritga</span>
              </div>
              <div className=" mt-2">
                <span className="font-medium">Vehicle Number</span>
                <span className="font-medium ml-5">TN38 CA0078</span>
              </div>
              <div className="px-5 mt-8">
                <button className="bg-red-600 px-9 py-2 text-white mr-5 rounded-full" onClick={() => handleMoveFleetToAvailable()}>
                  No
                </button>
                <button
                  className="bg-green-600 px-9 py-2 text-white rounded-full"
                  onClick={() => setShowSuccessAlert(true)}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showSuccessAlert && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 z-10">
          <div className="relative bg-white py-20 rounded-lg shadow-md dark:bg-gray-700">
            <button
              onClick={() => handleMoveFleetToAvailable()}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col text-center px-20 max-w-2xl h-40 items-center">
              <img src={successIcon} alt="" className="h-24 w-24 mb-5" />
              <h2 className="text-2xl text-green-600" style={{fontWeight: '900'}}>
                The Below Fleet Has Been moved to available list Successfully
              </h2>
            </div>

            <div className="grid grid-cols-1 p-4 mb-10 items-center justify-center mt-10">
              <div className="">
                <span className="font-medium">Vehicle</span>
                <span className="font-medium ml-5">Eritga</span>
              </div>
              <div className=" mt-2">
                <span className="font-medium">Vehicle Number</span>
                <span className="font-medium ml-5">TN38 CA0078</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FleetsCustomAlert;
