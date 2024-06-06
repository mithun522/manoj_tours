import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import TopLayer from '../shared/TopLayer';
import editIcon from '../../assets/edit-icon.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { DRIVER, SERVER } from '../shared/Api';

const DriversInformation = () => {
    const navigate = useNavigate();
    const [driversData, setDriversData] = useState([]);
  
    useEffect(() => {
        const fetchBookingsData = async () => {
            const response = await axios.get(DRIVER);
            setDriversData(response.data);
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
                            isAddButton={true}
                            addButtonText={'Add Driver'}
                            addButtonRoute='/settings/add-driver'
                        />
                        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 p-4">
                            {driversData.map((driver, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg p-4 relative max-h-[350px] min-w-[250px] flex flex-col justify-center items-center">
                                    <button onClick={() => navigate('/settings/edit-driver', { state: { driverId: driver.id } })}>
                                        <img src={editIcon} alt="" className='h-5 w-5 absolute top-2 right-2 cursor-pointer' />
                                    </button>
                                    <img src={`${SERVER}${driver.profileImage}`} alt="" className='w-32 h-32 bg-white rounded-full' />
                                    <div className='text-start mt-5' >
                                    <h2 className="font-medium text-xl mt-2 text-start">
                                    <span className='font-bold' >Name : </span>
                                    {driver.name}
                                    </h2>
                                    <p className="text-gray-600 text-sm text-left">
                                        <span className='font-bold' >Mobile : </span>
                                         {driver.mobile_number}
                                    </p>
                                    <p className='text-start mt-6'>
                                        <span className='font-bold' >Address : </span>
                                        {driver.address}
                                    </p>
                                    </div>
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
