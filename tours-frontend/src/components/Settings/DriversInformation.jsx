import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import TopLayer from '../shared/TopLayer';
import editIcon from '../../assets/edit-icon.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { DRIVER, SERVER } from '../shared/Api';
import deleteIcon from '../../assets/delete-icon.svg';
import noData from "../../assets/no-data.png";
import DeleteModal from '../shared/DeleteModal';
import toast from 'react-hot-toast';

const DriversInformation = () => {
    const navigate = useNavigate();
    const [driversData, setDriversData] = useState([]);
    const [deleteDriverId, setDeleteDriverId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        const fetchDriversData = async () => {
            try {
                const response = await axios.get(DRIVER);
                setDriversData(response.data);
            } catch (error) {
                console.error('Error fetching drivers data:', error);
            } finally {
                setLoading(false);
            }
        };
  
        fetchDriversData();
    }, []);

    const handleDeleteClick = (deleteId) => {
        setDeleteDriverId(deleteId);
        setShowModal(true);
    };

    const handleConfirmDelete = async () => {
        try {
            await axios.delete(`${DRIVER}/${deleteDriverId}`);
    
            const response = await axios.get(DRIVER);
            if(response.status === 200) {
                console.log(response)
                toast.success('Driver successfully deleted');
                setDriversData(response.data);
    
                setShowModal(false);
            }
        } catch (error) {
            console.error('Error deleting driver:', error);
        }
    };

    return (
        <Layout loading={loading}>
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
                        {driversData.length === 0 && !loading && (
                            <div className="flex flex-col text-center justify-center items-center px-10 md:py-0 py-48">
                                <img src={noData} alt="" className='flex flex-grow object-cover w-[800px]' />
                                <h2 className="font-black text-2xl">No Drivers Found</h2>
                            </div>
                        )}
                        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 p-4">
                            {driversData.map((driver, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg p-4 relative max-h-[350px] min-w-[250px] flex flex-col justify-center items-center">
                                    <div className='absolute top-2 right-2 flex' >
                                        <button onClick={() => navigate('/settings/edit-driver', { state: { driverId: driver.id } })}>
                                            <img src={editIcon} alt="" className='h-5 w-5 cursor-pointer mr-4' />
                                        </button>
                                        <button onClick={() => handleDeleteClick(driver.id)}>
                                            <img src={deleteIcon} alt="" className='h-5 w-5 cursor-pointer' />
                                        </button>
                                    </div>
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
            {showModal && (
                <DeleteModal
                    title="Confirm Delete"
                    onClose={() => setShowModal(false)}
                    onConfirm={handleConfirmDelete}
                    confirmText="Delete"
                    cancelText="Cancel"
                >
                    Are you sure you want to delete this driver?
                </DeleteModal>
            )}
        </Layout>
    );
}

export default DriversInformation;
