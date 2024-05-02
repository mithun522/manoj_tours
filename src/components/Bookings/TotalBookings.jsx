import React, { useState, useEffect, useRef } from "react";
import Layout from "../Layout/Main";
import { Link } from "react-router-dom";
import rightLeftIcon from '../../assets/right-left-arrow-icon.svg';
import rightArrowIcon from '../../assets/right-arrow-icon.svg';

const Bookings = () => {
  const [bookingsData, setBookingsData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('Bookings');
  const options = ['Total Bookings', 'Upcoming Bookings', 'Closed Bookings', 'Cancelled Bookings' ];
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchBookingsData = async () => {
      try {
        const response = await fetch("/Bookings.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setBookingsData(data);
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

  // Get today's date in yyyy-mm-dd format
  const today = new Date().toISOString().slice(0, 10);

  return (
    <>
      <Layout>
        <div className="max-w-screen mx-auto">
          <div className="flex flex-col">
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
              <div className="inline-block min-w-full align-middle">
                <div class="flex justify-between items-center p-4">
                    <h1 class="text-lg font-bold">Bookings</h1>
                    <div className="flex" >
                        <div class='max-w-xs mx-auto mr-10'>
                            <div class="relative flex items-center w-full h-10 rounded-2xl focus-within:shadow-lg overflow-hidden">
                                <input
                                class="peer h-full w-full outline-none text-sm text-gray-700 pr-2 pl-5 bg-gray-100"
                                type="text"
                                id="search"
                                placeholder="Search something.." /> 
                                <div class="grid place-items-center h-full w-12 text-gray-900 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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
                                                    role="option"
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
                        <th scope="col" className="p-4 tracking-wider text-gray-700 dark:text-gray-400">Customer Name</th>
                        <th scope="col" className="p-4 tracking-wider text-gray-700 dark:text-gray-400">Customer ID</th>
                        <th scope="col" className="p-4 tracking-wider text-gray-700 dark:text-gray-400">Location</th>
                        <th scope="col" className="p-4 tracking-wider text-gray-700 dark:text-gray-400">Duration</th>
                        <th scope="col" className="p-4 tracking-wider text-gray-700 dark:text-gray-400">No of People</th>
                        <th scope="col" className="p-4 tracking-wider text-gray-700 dark:text-gray-400">Fleet</th>
                        <th scope="col" className="p-4 tracking-wider text-gray-700 dark:text-gray-400">Paid</th>
                        <th scope="col" className="p-4 tracking-wider text-gray-700 dark:text-gray-400">Unpaid</th>
                        <th scope="col" className="p-4 tracking-wider text-gray-700 dark:text-gray-400">Edit</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                      {bookingsData.map((booking) => (
                        <tr key={booking.id} className={booking.raidType === 'cancelled' ? 'text-gray-100' : ''}>
                          <td className={`${booking.duration > today ? 'text-green-500' : 'p-4 text-sm font-medium text-gray-900 dark:text-white'}`}>{booking.customerName}</td>
                          <td className={`${booking.duration > today ? 'text-green-500' : 'p-4 text-sm font-medium text-gray-900 dark:text-white'}`}>{booking.customerId}</td>
                          <td className={`${booking.duration > today ? 'text-green-500' : 'p-4 text-sm font-medium text-gray-900 dark:text-white'}`}>
                            {booking.location.twoWay ? (
                              <>
                                {booking.location.from} <img src={rightLeftIcon} alt="right-left-icon" className="inline-block w-4 h-4" /> {booking.location.to}
                              </>
                            ) : (
                              <>
                                {booking.location.from} <img src={rightArrowIcon} alt="right-arrow-icon" className="inline-block w-4 h-4" /> {booking.location.to}
                              </>
                            )}
                          </td>
                          <td className="p-4 text-sm font-medium dark:text-white">
                            <span className={`${booking.duration === today ? 'text-red-500' : (booking.duration > today ? 'text-green-500' : 'text-gray-900')}`}>
                              {booking.duration === today ? "Today" : booking.duration}
                            </span>
                            {booking.duration !== today ? null : <div className="text-xs font-medium text-gray-600">{booking.duration}</div>}
                          </td>
                          <td className={`${booking.duration > today ? 'text-green-500' : 'p-4 text-sm font-medium text-gray-900 dark:text-white'}`}>{booking.numberOfPeople}</td>
                          <td className={`${booking.duration > today ? 'text-green-500' : 'p-4 text-sm font-medium text-gray-900 dark:text-white'}`}>{booking.fleet}</td>
                          <td className={`${booking.duration > today ? 'text-green-500' : 'p-4 text-sm font-medium text-gray-900 dark:text-white'}`}>{booking.paid}</td>
                          <td className={`${booking.duration > today ? 'text-green-500' : 'p-4 text-sm font-medium text-gray-900 dark:text-white'}`}>{booking.unpaid}</td>
                          <td className={`${booking.duration > today ? 'text-green-500' : 'p-4 text-sm font-medium text-gray-900 dark:text-white'}`}>
                            <Link href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
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

export default Bookings;
