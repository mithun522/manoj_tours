import React, { useState } from "react";

const PersonalInformation = () => {
  const [customerData, setCustomerData] = useState({
    name: "John Doe",
    mobileNumber: "1234567890",
    noOfPassengers: "2",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="relative flex p-6">
      <div className="flex px-20 py-10 relative">
        <div className="flex flex-col mb-8 text-start">
          <span className="text-gray-700 mb-8 px-5 py-1 whitespace-nowrap">
            Name
          </span>
          <span className="text-gray-600 mb-8 px-5 py-1 whitespace-nowrap">
            Mobile Number
          </span>
          <span className="text-gray-700 mb-8 px-5 py-1 whitespace-nowrap">
            No of Passengers
          </span>
        </div>
        <div className="flex flex-col mb-8 text-start">
          <input
            type="text"
            className="text-gray-600 mb-8 ml-20 bg-slate-100 w-64 px-5 py-1 rounded-md font-bold"
            name="name"
            value={customerData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            className="text-gray-600 mb-8 ml-20 bg-slate-100 w-64 px-5 py-1 rounded-md font-bold"
            name="mobileNumber"
            value={customerData.mobileNumber}
            onChange={handleChange}
          />
          <input
            type="text"
            className="text-gray-600 mb-8 ml-20 bg-slate-100 w-64 px-5 py-1 rounded-md font-bold"
            name="noOfPassengers"
            value={customerData.noOfPassengers}
            onChange={handleChange}
          />
        </div>
        <button
          className="text-white hover:scale-105 ease-in-out duration-300 font-bold absolute bottom-0 right-10 bg-sky-400 rounded-xl px-9 py-2.5 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2 mr-8"
          aria-current="page"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PersonalInformation;
