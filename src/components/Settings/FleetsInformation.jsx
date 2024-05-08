import React, { useEffect, useState } from 'react';
import filterIcon from '../../assets/filter-icon.svg';
import Layout from '../Layout/Layout';
import TopLayer from '../shared/TopLayer';
import toyota from '../../assets/toyota.png';
import editIcon from '../../assets/edit-icon.svg';
import { useNavigate } from 'react-router-dom';

const FleetsInformation = () => {
    const navigate = useNavigate();
    const [fleetsData, setFleetsData] = useState([]);
    const [selectedOption, setSelectedOption] = useState('Filter By');
    const options = ['Customer', 'Companies'];
  
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
    }, []);

    return (
        <Layout>
            <div className="max-w-screen mx-auto relative">
                <div className="flex flex-col">
                    <div className="overflow-y-auto shadow-md sm:rounded-lg h-[796px]">
                        <TopLayer
                            title={'Fleets Information'}                                
                            options={options}
                            selectedOption={selectedOption}
                            setSelectedOption={setSelectedOption}
                            showButton={false}
                            icon={filterIcon}
                            isAddButton={true}
                            addButtonText={'Add Fleet'}
                            addButtonRoute='/settings/add-fleets'
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                            {fleetsData.map((fleet, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-100 relative">
                                    <img src={editIcon} alt="" className='h-5 w-5 absolute top-2 right-2 cursor-pointer' onClick={() => navigate('/settings/edit-fleet')} />
                                    <img src={toyota} alt="" className='w-72 lg:h-28 xl:h-32 2xl:h-36' />
                                    <h2 className="font-medium text-xl mb-0.5 text-start">{fleet.fleetName}</h2>
                                    <p className="text-gray-600 text-xl font-bold text-start">{fleet.fleetNumber}</p>
                                    <p className='text-start mt-6'>{fleet.numberOfSeats} seater</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default FleetsInformation;
