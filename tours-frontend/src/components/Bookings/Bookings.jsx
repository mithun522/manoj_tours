import axios from "axios";
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import filterIcon from '../../assets/filter-icon.svg';
import Layout from '../Layout/Layout';
import { BOOKINGS } from '../shared/Api';
import TopLayer from '../shared/TopLayer';

const Bookings = () => {
    const [bookingsData, setBookingsData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedOption, setSelectedOption] = useState('Filter By');
    const options = ['Customer', 'Companies'];
    const currentPage = 1;
    const recordsPerPage = 10;

    useEffect(() => {
        const fetchBookingsData = async () => {
            try {
                const response = await axios.get(`${BOOKINGS}?page=${currentPage}&limit=${recordsPerPage}`);
                if (response.status === 200) {
                    setBookingsData(response.data.data);
                } else {
                    toast.error("Failed to fetch data");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchBookingsData();
    }, []);

    const calculateDays = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const diffTime = Math.abs(end - start);
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    };

    return (
        <Layout>
            <div className="max-w-screen mx-auto flex flex-col h-full p-4 sm:p-8">
                <div className="overflow-y-auto rounded-lg flex-grow bg-white">
                    <TopLayer
                        title={'Bookings'}
                        options={options}
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                        showButton={false}
                        routeForButton={'new-bookings'}
                        icon={filterIcon}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                        {bookingsData.map((booking, index) => (
                            <div key={index} className="border border-gray-300 rounded-lg p-6 bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
                                <div className='flex justify-between mb-4'>
                                    <h2 className="font-semibold text-lg text-gray-900">{booking.name}</h2>
                                    <p className="text-gray-500 font-medium">#b{booking.id}</p>
                                </div>
                                <p className="flex text-gray-700 text-sm mb-2">
                                    <span className='font-bold text-black'>{new Date(booking.startDate).toLocaleDateString()}</span> 
                                    <span className="px-2">to</span>
                                    <span className='font-bold text-black'>{new Date(booking.endDate).toLocaleDateString()}</span>
                                </p>
                                <div className='flex flex-col md:flex-row justify-between items-center mb-6'>
                                    <div className='flex flex-col mb-4 md:mb-0'>
                                        <span className="text-xs text-gray-400">KM Limit</span>
                                        <span className="text-sm text-gray-900">{booking.estimatedKms} Kms</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className="text-black font-bold">Days <span className="font-bold text-gray-900">{calculateDays(booking.startDate, booking.endDate)}</span></span>
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <p className="bg-green-600 w-48 h-12 text-white rounded-lg font-bold text-xl flex items-center justify-center">Rs. {booking.estimatedAmount} /-</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Bookings;
