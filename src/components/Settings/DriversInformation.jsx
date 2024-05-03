import React, { useEffect, useState } from 'react';
import filterIcon from '../../assets/filter-icon.svg';
import Layout from '../Layout/Layout';
import TopLayer from '../shared/TopLayer';
import profile from '../../assets/drivers-profile.png';
import editIcon from '../../assets/edit-icon.svg';
import { useNavigate } from 'react-router-dom';

const DriversInformation = () => {
    const navigate = useNavigate();
    const [driversData, setDriversData] = useState([]);
  
    useEffect(() => {
        const fetchBookingsData = async () => {
            try {
                const response = await fetch("/Drivers.json");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setDriversData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
  
        fetchBookingsData();
    }, []);

    return (
        <Layout>
            <div className="max-w-screen mx-auto relative">
                <div className="flex flex-col">
                    <div className="overflow-y-auto shadow-md sm:rounded-lg h-[796px]">
                        <TopLayer
                            title={'Drivers Information'}                                
                            showDropdown={false}
                            showButton={false}
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                            {driversData.map((driver, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg p-4 relative shadow-md">
                                    <img src={editIcon} alt="" className='h-5 w-5 absolute top-2 right-2 cursor-pointer' onClick={() => navigate('/settings/edit-driver')} />
                                    <img src={profile} alt="" className='w-20 h-20 bg-white rounded-full' />
                                    <h2 className="font-medium text-xl mb-0.5 text-start">{driver.name}</h2>
                                    <p className="text-gray-600 text-sm text-start">{driver.mobile_number}</p>
                                    <p className='text-start mt-6'>{driver.address}</p>
                                </div>                            
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default DriversInformation;
