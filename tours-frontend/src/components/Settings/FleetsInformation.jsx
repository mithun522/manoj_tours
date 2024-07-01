import React, { useEffect, useState } from 'react';
import filterIcon from '../../assets/filter-icon.svg';
import Layout from '../Layout/Layout';
import TopLayer from '../shared/TopLayer';
import editIcon from '../../assets/edit-icon.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FLEET, SERVER } from '../shared/Api';
import deleteIcon from "../../assets/delete-icon.svg";
import DeleteModal from '../shared/DeleteModal';
import toast from 'react-hot-toast';
import noData from "../../assets/no-data.png";

const FleetsInformation = () => {
    const navigate = useNavigate();
    const [fleetsData, setFleetsData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedOption, setSelectedOption] = useState('Filter By');
    const [showModal, setShowModal] = useState(false); // State to control modal visibility
    const [deleteFleetId, setDeleteFleetId] = useState(null); // State to store ID of fleet to delete
    const options = ['Customer', 'Companies'];
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFleetsData = async () => {
            try {
                const response = await axios.get(FLEET);
                setFleetsData(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchFleetsData();
    }, []);

    const filteredFleets = fleetsData.filter(fleet =>
        fleet.fleetName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fleet.fleetNumber.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleDeleteClick = (fleetId) => {
        setDeleteFleetId(fleetId);
        setShowModal(true);
    };

    const handleConfirmDelete = async () => {
        try {
            await axios.delete(`${FLEET}/${deleteFleetId}`);
    
            const response = await axios.get(FLEET);
            if(response.status === 200) {
                console.log(response)
                toast.success('Fleet successfully deleted');
                setFleetsData(response.data);
    
                setShowModal(false);
            }
        } catch (error) {
            console.error('Error deleting fleet:', error);
        }
    };
    

    return (
        <Layout loading={loading}>
            <div className="max-w-screen mx-auto relative">
                <div className="flex flex-col">
                    <div className="overflow-y-auto sm:rounded-lg max-h-[80vh]">
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
                                                {fleetsData.length === 0 && !loading && (
                            <div className="flex flex-col text-center justify-center items-center px-10 md:py-0 py-48">
                                <img src={noData} alt="" className='flex flex-grow object-cover w-[800px]' />
                                <h2 className="font-black text-2xl">No Drivers Found</h2>
                            </div>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-4">
                            {filteredFleets.map((fleet, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-100 relative max-h-[350px] min-w-[250px] flex flex-col justify-center items-center">
                                    <div className='absolute right-2 top-2' >
                                        <button onClick={() => navigate('/settings/edit-fleet', { state: fleet.id })} >
                                            <img src={editIcon} alt="" className='h-5 w-5 flex flex-grow object-cover mr-3' />
                                        </button>
                                        <button onClick={() => handleDeleteClick(fleet.id)} > {/* Add click handler for delete */}
                                            <img src={deleteIcon} alt="" className='h-5 w-5 flx flex-grow object-cover' />
                                        </button>
                                    </div>
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
            {/* Modal for delete confirmation */}
            {showModal && (
                <DeleteModal
                    title="Confirm Delete"
                    onClose={() => setShowModal(false)}
                    onConfirm={handleConfirmDelete}
                    confirmText="Delete"
                    cancelText="Cancel"
                >
                    Are you sure you want to delete this fleet?
                </DeleteModal>
            )}
        </Layout>
    );
}

export default FleetsInformation;
