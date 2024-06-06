import React, { useEffect, useState } from 'react';
import filterIcon from '../../assets/filter-icon.svg';
import Layout from '../Layout/Layout';
import TopLayer from '../shared/TopLayer';
import editIcon from '../../assets/edit-icon.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FLEET, SERVER } from '../shared/Api';

const FleetsInformation = () => {
    const navigate = useNavigate();
    const [fleetsData, setFleetsData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedOption, setSelectedOption] = useState('Filter By');
    const options = ['Customer', 'Companies'];

    useEffect(() => {
        const fetchFleetsData = async () => {
            try {
                const response = await axios.get(FLEET);
                setFleetsData(response.data);
                console.log(response)
            } catch (error) {
                console.log(error);
            }
        };
        fetchFleetsData();
        console.log(fleetsData)
    }, []);

    const filteredFleets = fleetsData.filter(fleet =>
        fleet.fleetName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fleet.fleetNumber.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-4">
                            {filteredFleets.map((fleet, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-100 relative max-h-[350px] min-w-[250px] flex flex-col justify-center items-center">
                                    <button onClick={() => navigate('/settings/edit-fleet', { state: fleet.id })} >
                                        <img src={editIcon} alt="" className='h-5 w-5 absolute top-2 right-2 cursor-pointer flex flex-grow object-cover' />
                                    </button>
                                    <img src={`${SERVER}${fleet.fleetImage}`} alt="" className='flex flex-grow object-cover max-h-[150px] min-h-[150px] min-w-[250px]' />
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
