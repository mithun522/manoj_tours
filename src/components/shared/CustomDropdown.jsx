import React, { useState, useEffect, useRef } from 'react';

const CustomDropdown = ({ options, selectedOption, onSelect, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div
        className="relative inline-block text-left z-2" // Adjust z-index here
        ref={dropdownRef}
      >
        <div>
          <span className="rounded-md shadow-sm">
            {icon && (
              <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                <img src={icon} alt="" className="w-5 h-5" />
              </div>
            )}
            <button
              type="button"
              className="inline-flex justify-center w-48 pl-2 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent"
              onClick={toggleDropdown}
              aria-haspopup="listbox"
              aria-expanded={isOpen}
            >
              {selectedOption}
              <svg
                className="-mr-1 ml-2 h-5 w-5"
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
          <div className="origin-top-right mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 fixed">
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
                  className="relative px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer select-none"
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
  );
};

export default CustomDropdown;
