import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaPhone, FaUser } from "react-icons/fa6";
import carIcon from "../../assets/car-icon.svg";
import { ENQUIRY } from "../shared/Api";

const AddEnquiries = ({ onClose, onAddEnquiry }) => {
  const [customerName, setCustomerName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [numberOfPassengers, setNumberOfPassengers] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestData = { customerName, mobileNumber, numberOfPassengers };
    
    try {
      const response = await axios.post(ENQUIRY, requestData);
      console.log(response);
      if (response.status === 201) {
        toast.success("Enquiry Added Successfully");
        onAddEnquiry(requestData); // Pass the new enquiry to the parent component
        onClose();
      } else {
        toast.error("Failed to add enquiry. Please try again.");
      }
    } catch (error) {
      console.error("There was an error adding the enquiry:", error);
      toast.error("There was an error adding the enquiry. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 bg-blue-500 text-white rounded-t-lg">
          <h2 className="text-xl font-bold">Add Enquiry</h2>
          <svg
            className="w-6 h-6 cursor-pointer hover:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={onClose}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <form onSubmit={handleSubmit} className="px-4 py-6">
          <div className="mb-4">
            <label
              htmlFor="customerName"
              className="block text-sm text-gray-700 text-left mb-1 font-bold"
            >
              Customer Name
            </label>
            <div className="flex items-center border rounded focus:outline-none focus:ring-blue-500 focus:ring-1">
              <FaUser className="h-5 w-5 ml-2 mr-2" />
              <input
                type="text"
                id="customerName"
                className="w-full px-3 py-2 border-transparent focus:outline-none focus:ring-blue-500 focus:ring-1 rounded-r-md"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="mobileNumber"
              className="block text-sm text-gray-700 mb-1 text-left font-bold"
            >
              Mobile Number
            </label>
            <div className="flex items-center border rounded focus:outline-none focus:ring-blue-500 focus:ring-1">
              <FaPhone className="h-5 w-5 ml-2 mr-2" />
              <input
                type="text"
                id="mobileNumber"
                className="w-full px-3 py-2 border-transparent focus:outline-none focus:ring-blue-500 focus:ring-1 rounded-r-md"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="numberOfPassengers"
              className="block text-sm text-gray-700 mb-1 text-left font-bold"
            >
              No of Passengers
            </label>
            <div className="flex items-center border rounded focus:outline-none focus:ring-blue-500 focus:ring-1">
              <img src={carIcon} alt="" className="h-5 w-5 ml-2 mr-2" />
              <input
                type="number"
                id="numberOfPassengers"
                className="w-full px-3 py-2 rounded-r-md focus:outline-none focus:ring-blue-500 focus:ring-1"
                value={numberOfPassengers}
                onChange={(e) => setNumberOfPassengers(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:offset-2 focus:ring-blue-500"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEnquiries;
