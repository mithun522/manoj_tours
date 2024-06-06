import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const PersonalInformation = () => {
  const [customerData, setCustomerData] = useState({
    name: "",
    mobileNumber: "",
    noOfPassengers: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (
      customerData.name.trim() !== "" &&
      customerData.mobileNumber.trim() !== "" &&
      customerData.noOfPassengers.trim() !== ""
    ) {
      navigate("/bookings/new-bookings/trip-details", { state: { customerData } });
    } else {
      toast.error("Please fill in all fields.");
    }
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
            type="number"
            className="text-gray-600 mb-8 ml-20 bg-slate-100 w-64 px-5 py-1 rounded-md font-bold"
            name="mobileNumber"
            value={customerData.mobileNumber}
            onChange={handleChange}
          />
          <input
            type="number"
            className="text-gray-600 mb-8 ml-20 bg-slate-100 w-64 px-5 py-1 rounded-md font-bold"
            name="noOfPassengers"
            value={customerData.noOfPassengers}
            onChange={handleChange}
          />
        </div>
        <button
          className={`text-white hover:scale-105 ease-in-out duration-300 font-bold absolute bottom-0 right-10 bg-sky-400 rounded-xl px-9 py-2.5 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2 mr-8 ${!(
            customerData.name.trim() !== "" &&
            customerData.mobileNumber.trim() !== "" &&
            customerData.noOfPassengers.trim() !== ""
          ) && "opacity-50 cursor-not-allowed"}`}
          aria-current="page"
          onClick={handleNext}
          disabled={
            !(
              customerData.name.trim() !== "" &&
              customerData.mobileNumber.trim() !== "" &&
              customerData.noOfPassengers.trim() !== ""
            )
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PersonalInformation;
