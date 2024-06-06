import React, { useEffect, useRef, useState } from "react";

const CustomAlert = ({ close }) => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Drivers Name");
  const options = [
    "Total Bookings",
    "Upcoming Bookings",
    "Closed Bookings",
    "Cancelled Bookings",
  ];

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleCloseAlert = () => {
    close();
  };
  

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-md dark:bg-gray-700">
      <button
          onClick={handleCloseAlert}
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
        <h2 className="font-black text-2xl text-green-600 mt-20">
          Ride Completed by
        </h2>
        <div className="p-4 md:p-5 text-center w-[500px] mt-2 ">
          <div className="relative inline-block text-left">
            <div className="relative inline-block text-left" ref={dropdownRef}>
              <div>
                <span className="rounded-md shadow-sm">
                  <button
                    type="button"
                    className="inline-flex justify-center w-56 pl-2 py-2 text-2xl font-bold text-gray-700 bg-gray-300 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent"
                    onClick={toggleDropdown}
                    aria-haspopup="listbox"
                    aria-expanded={isOpen}
                  >
                    {selectedOption}
                    <svg
                      className="ml-2 h-7 w-7"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 111.414-1.414L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </span>
              </div>

              {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <ul
                    tabIndex="-1"
                    role="listbox"
                    aria-labelledby="options-menu"
                    aria-activedescendant="active-option"
                    className="py-1"
                  >
                    {options.map((option, index) => (
                      <li
                        key={index}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer select-none"
                        onClick={() => handleOptionSelect(option)}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Columns at the bottom */}
        <div className="grid grid-cols-1 p-4 mb-10">
            <div className="items-center justify-center">
                <span className="font-medium" >Vehicle</span>
                <span className="font-medium ml-5" >Eritga</span>
            </div>
            <div className="items-center justify-center mt-2">
                <span className="font-medium" >Vehicle Number</span>
                <span className="font-medium ml-5" >TN38 CA0078</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CustomAlert;
