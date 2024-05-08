import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";
import rightLeftIcon from '../../assets/right-left-arrow-icon.svg';
import rightArrowIcon from '../../assets/right-arrow-icon.svg';
import editIcon from '../../assets/edit-icon.svg';
import TopLayer from "../shared/TopLayer";
import cancelledIcon from "../../assets/cancel-icon.svg";
import checkmarkCircle from "../../assets/checkmark-circle.svg";

const DashboardBookings = () => {
  const [bookingsData, setBookingsData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('Bookings');
  const options = ['Total Bookings', 'Upcoming Bookings', 'Closed Bookings', 'Cancelled Bookings' ];
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookingsData = async () => {
      try {
        const response = await fetch("/DashboardBookings.json");
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

  }, []);

const today = new Date().toISOString().slice(0, 10);

const handleEditClick = (bookingId) => {
  const booking = bookingsData.find(booking => booking.id === bookingId);
  navigate('/dashboard/edit-bookings', { state: { booking } });
};

return (
    <>
        <Layout>
            <div className="max-w-screen mx-auto">
                <div className="flex flex-col">
                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
                        <div className="inline-block min-w-full align-middle">
                            <TopLayer
                                title={selectedOption}                                
                                options={options}
                                selectedOption={selectedOption}
                                setSelectedOption={setSelectedOption}
                                showButton={false}
                            />
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
                                            <th scope="col" className="p-4 tracking-wider text-green-500 dark:text-green-500">Paid</th>
                                            <th scope="col" className="p-4 tracking-wider text-red-600 dark:text-red-600">Unpaid</th>
                                            <th scope="col" className="p-4 tracking-wider text-gray-700 dark:text-gray-700">Total Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                        {bookingsData.map((booking) => (
                                            <tr key={booking.id} className={` dark:text-white ${booking.duration === today ? 'text-green-600 dark:text-green-700' : ''} ${booking.raidType === 'cancelled' ? 'text-gray-400' : ''}`}>
                                                <td className="p-4 text-sm font-bold">{booking.customerName}</td>
                                                <td className="p-4 text-sm font-bold">{booking.customerId}</td>
                                                <td className="p-4 text-sm font-bold">
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
                                                <td className="p-4 text-sm font-bold">
                                                    {booking.duration === today && booking.raidType !== 'cancelled' ? (
                                                        <span className="text-red-500">Today</span>
                                                    ) : (
                                                        <span className={`${booking.duration > today ? 'text-green-500' : ''}`}>
                                                            {booking.duration}
                                                        </span>
                                                    )}
                                                    {booking.duration === today && booking.raidType !== 'cancelled' && (
                                                        <div className="text-xs font-bold text-gray-600">{booking.duration}</div>
                                                    )}
                                                </td>
                                                <td className="p-4 text-sm font-bold">{booking.numberOfPeople}</td>
                                                <td className="p-4 text-sm font-bold">{booking.fleet}</td>
                                                <td className={`p-4 text-sm font-bold ${booking.duration > today ? 'text-green-500' : ''}`}>
                                                    {booking.paid === '0' ? '-' : booking.paid}
                                                </td>
                                                <td className='p-4 text-sm font-bold text-red-600'>
                                                    {booking.unpaid === '0' ? '-' : booking.unpaid}
                                                </td>
                                                <td className="p-4 text-sm font-bold">{booking.fleet}</td>
                                                <td className={`p-4 text-sm font-bold ${booking.raidType === 'cancelled' ? 'text-gray-300' : ''}`}>
                                                    {booking.raidType === 'today' ? (
                                                        <img src={checkmarkCircle} alt="" className="w-6 cursor-pointer ml-10" />
                                                    ) : (
                                                        <button onClick={() => handleEditClick(booking.id)} className="text-blue-600 dark:text-blue-500 hover:underline">
                                                            <img src={booking.raidType === 'cancelled' ? cancelledIcon : editIcon} alt="" className="w-5 cursor-pointer" />
                                                        </button>
                                                    )}
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

export default DashboardBookings;
