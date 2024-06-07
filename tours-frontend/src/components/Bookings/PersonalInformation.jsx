import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { CUSTOMER } from "../shared/Api";

const PersonalInformation = () => {
  const [customerData, setCustomerData] = useState({
    name: "",
    mobileNumber: "",
    address: "",
  });
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load customer data from localStorage if available
    const savedCustomerData = localStorage.getItem("customerData");
    if (savedCustomerData) {
      setCustomerData(JSON.parse(savedCustomerData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = {
      ...customerData,
      [name]: value,
    };
    setCustomerData(updatedData);

    // Save updated data to localStorage
    localStorage.setItem("customerData", JSON.stringify(updatedData));

    if (name === "name" && value.trim() !== "") {
      fetchCustomerData(value.trim());
    } else {
      setSuggestions([]);
    }
  };

  const fetchCustomerData = async (name) => {
    try {
      const response = await axios.get(CUSTOMER);
      const filteredCustomers = response.data.filter((customer) =>
        customer.customerName.toLowerCase().includes(name.toLowerCase())
      );
      setSuggestions(filteredCustomers);
    } catch (error) {
      console.error("Error fetching customer data:", error);
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (customer) => {
    const updatedData = {
      name: customer.customerName,
      mobileNumber: customer.mobile,
      address: customer.address,
    };
    setCustomerData(updatedData);
    setSuggestions([]);
    // Save updated data to localStorage
    localStorage.setItem("customerData", JSON.stringify(updatedData));
  };

  const handleNext = () => {
    if (
      customerData.name.trim() !== "" &&
      customerData.mobileNumber.trim() !== "" &&
      customerData.address.trim() !== ""
    ) {
      navigate("/bookings/new-bookings/trip-details", {
        state: { customerData },
      });
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
            Address
          </span>
        </div>
        <div className="flex flex-col mb-8 text-start relative">
          <input
            type="text"
            className="text-gray-600 mb-8 ml-20 bg-slate-100 w-64 px-5 py-1 rounded-md font-bold"
            name="name"
            value={customerData.name}
            onChange={handleChange}
            autoComplete="off"
          />
          {suggestions.length > 0 && (
            <ul className="absolute bg-white border border-gray-300 w-64 ml-20 mt-1 rounded-md shadow-lg z-10">
              {suggestions.map((customer) => (
                <li
                  key={customer.id}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSuggestionClick(customer)}
                >
                  {customer.customerName}
                </li>
              ))}
            </ul>
          )}
          <input
            type="number"
            className="text-gray-600 mb-8 ml-20 bg-slate-100 w-64 px-5 py-1 rounded-md font-bold"
            name="mobileNumber"
            value={customerData.mobileNumber}
            onChange={handleChange}
            autoComplete="off"
          />
          <textarea
            type="text"
            className="text-gray-600 mb-8 ml-20 bg-slate-100 w-64 px-5 py-1 h-20 rounded-md font-bold resize-none"
            name="address"
            value={customerData.address}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <button
          className={`text-white hover:scale-105 ease-in-out duration-300 font-bold absolute bottom-0 right-10 bg-sky-400 rounded-xl px-9 py-2.5 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2 mr-8 ${!(
            customerData.name.trim() !== "" &&
            customerData.mobileNumber.trim() !== ""
          ) && "opacity-50 cursor-not-allowed"}`}
          aria-current="page"
          onClick={handleNext}
          disabled={
            !(
              customerData.name.trim() !== "" &&
              customerData.mobileNumber.trim() !== "" &&
              customerData.address.trim() !== ""
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
