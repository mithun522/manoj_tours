import React, { useState, useEffect, useRef } from "react";
import Layout from "../Layout/Layout";
import rightLeftIcon from '../../assets/right-left-arrow-icon.svg';
import rightArrowIcon from '../../assets/right-arrow-icon.svg';

const Fleets = () => {
    const [fleetsData, setFleetsData] = useState([]);
    const [selectedOption, setSelectedOption] = useState('All Fleets');
    const options = ['Engaged', 'Available', 'Unavailable', 'clear'];
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      const fetchBookingsData = async () => {
        try {
          const response = await fetch("/Fleets.json");
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await response.json();
          setFleetsData(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchBookingsData();
  
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
      setSelectedOption(option);
      setIsOpen(false);
  };


  const handleStatusChange = (id, newStatus) => {
    setFleetsData(prevFleetsData => {
      return prevFleetsData.map(item => {
        if (item.id === id) {
          return { ...item, status: newStatus };
        }
        return item;
      });
    });
  };
  
  
  return (
      <>
          <Layout>
              <div className="max-w-screen mx-auto">
                  <div className="flex flex-col">
                      <div className="overflow-x-auto shadow-md sm:rounded-lg">
                          <div className="inline-block min-w-full align-middle">
                              <div className="flex justify-between items-center p-4">
                                  <h1 className="text-lg font-bold">{selectedOption}</h1>
                                  <div className="flex" >
                                      <div className='max-w-xs mx-auto mr-10'>
                                          <div className="relative flex items-center w-full h-10 rounded-2xl focus-within:shadow-lg overflow-hidden">
                                              <input
                                                  className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 pl-5 bg-gray-100"
                                                  type="text"
                                                  id="search"
                                                  placeholder="Search something.." /> 
                                              <div className="grid place-items-center h-full w-12 text-gray-900 bg-gray-100">
                                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                  </svg>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="relative inline-block text-left">
                                          <div className="relative inline-block text-left" ref={dropdownRef}>
                                              <div>
                                                  <span className="rounded-md shadow-sm">
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
                                                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
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
                              </div>
                              <div className="overflow-hidden ">
                                  <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                      <thead className="bg-sky-200 dark:bg-gray-700">
                                          <tr>
                                              <th scope="col" className="p-4 tracking-wider text-gray-700 dark:text-gray-400">Fleet</th>
                                              <th scope="col" className="p-4 tracking-wider text-gray-700 dark:text-gray-400">Fleet Number</th>
                                              <th scope="col" className="p-4 tracking-wider text-gray-700 dark:text-gray-400">Customer Id</th>
                                              <th scope="col" className="p-4 tracking-wider text-gray-700 dark:text-gray-400">Location</th>
                                              <th scope="col" className="p-4 tracking-wider text-gray-700 dark:text-gray-400">Routine</th>
                                              <th scope="col" className="p-4 tracking-wider text-gray-700 dark:text-gray-400">Date</th>
                                              <th scope="col" className="p-4 tracking-wider text-gray-700 dark:text-gray-400">Status</th>
                                              <th scope="col" className="p-4 tracking-wider text-gray-700 dark:text-gray-400">Edit</th>
                                          </tr>
                                      </thead>
                                      <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                            {fleetsData.map((item) => (
                                                <tr key={item.id}>
                                                <td className="p-4 text-gray-900 dark:text-white">{item.fleet}</td>
                                                <td className="p-4 text-gray-900 dark:text-white">{item.fleetNumber}</td>
                                                <td className="p-4 text-gray-900 dark:text-white">{item.customerId}</td>
                                                <td className="p-4 text-gray-900 dark:text-white">
                                                    {item.fleetLocation.twoWay ? (
                                                        <>
                                                        <img src={rightLeftIcon} alt="right-left-icon" className="inline-block w-6 h-6" />
                                                        </>
                                                    ) : (
                                                        <>
                                                        <img src={rightArrowIcon} alt="right-arrow-icon" className="inline-block w-6 h-6" />
                                                        </>
                                                    )}
                                                </td>
                                                <td className="p-4 text-gray-900 dark:text-white">{item.routine}</td>
                                                <td className="p-4 text-gray-900 dark:text-white">{item.date}</td>
                                                <td className='p-4 text-gray-900 dark:text-white'>
                                                    <select
                                                        value={item.status}
                                                        onChange={(e) => handleStatusChange(item.id, e.target.value)}
                                                        className="border border-gray-300 rounded-md px-2 py-2 bg-white focus:outline-none focus:ring focus:ring-gray-300 w-48"
                                                    >
                                                        <option value="Live" className="text-green-600 font-medium">Live</option>
                                                        <option value="Closed">Closed</option>
                                                        <option value="Canceled" className="text-red-600 font-medium" >Canceled</option>
                                                    </select>
                                                </td>
                                                <td className="p-4 text-gray-900 dark:text-white">
                                                    <button className="px-10 py-1.5 rounded-full text-white font-medium bg-sky-400" >Update</button>
                                                </td>
                                                </tr>
                                            ))}
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </Layout>
      </>
  );
  };

export default Fleets;
