import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fileUploadIcon from '../../assets/file-upload-icon.svg';
import Layout from '../Layout/Layout';
import axios from 'axios';
import { DRIVER } from '../shared/Api';
import toast from 'react-hot-toast';

const AddDriver = () => {
    const navigate = useNavigate();

    const [driverData, setDriverData] = useState({
        name: '',
        mobileNumber: '',
        address: '',
    });
    const [profileImage, setDriverImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const handleAddDriver = async () => {
        try {
            const formData = new FormData();
            formData.append('name', driverData.name);
            formData.append('mobileNumber', driverData.mobileNumber);
            formData.append('address', driverData.address);
            formData.append('profileImage', profileImage);

            const response = await axios.post(DRIVER, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.status === 201) {
                toast.success(response.message);
                navigate('/settings/drivers-information');
            } else {
                toast.error('Failed to add driver');
            }
        } catch (error) {
            console.error('Error adding driver:', error);
            toast.error(error.response?.data?.message);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDriverData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setDriverImage(e.target.files[0]);
        setImagePreview(URL.createObjectURL(e.target.files[0])); // Set image preview
    };

    return (
        <Layout>
            <div className="max-w-screen mx-auto">
                <div className="flex flex-col">
                    <div className="overflow-y-auto sm:rounded-lg max-h-[80vh]">
                        <div className="flex justify-start px-10 py-6">
                            <h1 className="text-lg font-bold" style={{ fontSize: '30px' }}>
                                Add Driver Information
                            </h1>
                        </div>
                        <div className="flex justify-center mb-4">
                            <div className="cursor-pointer mr-4 font-semibold w-56 py-2 bg-black text-white rounded-lg">
                                Driver Details
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="rounded-lg p-4 relative" style={{ width: '427px' }}>
                                <div className="flex flex-col p-4 text-start">
                                    <div className="flex justify-between">
                                        <div className="flex flex-col">
                                            <label htmlFor="driverName" className="text-gray-600 mb-1">
                                                Driver Name
                                            </label>
                                            <input
                                                type="text"
                                                id="driverName"
                                                name="name"
                                                value={driverData.name}
                                                placeholder="Enter Driver Name"
                                                className="bg-slate-100 rounded-md mb-4 p-2"
                                                onChange={handleChange}
                                                style={{ fontSize: '12px' }}
                                            />
                                        </div>
                                        <div className="flex flex-col ml-5">
                                            <label htmlFor="driverMobile" className="text-gray-600 mb-1">
                                                Mobile Number
                                            </label>
                                            <input
                                                type="number"
                                                id="driverMobile"
                                                name="mobileNumber"
                                                value={driverData.mobileNumber}
                                                placeholder="Enter Mobile Number"
                                                className="bg-slate-100 rounded-md mb-4 p-2"
                                                onChange={handleChange}
                                                style={{ fontSize: '12px' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="driverAddress" className="text-gray-600 mb-1">
                                            Address
                                        </label>
                                        <textarea
                                            type="text"
                                            id="driverAddress"
                                            name="address"
                                            value={driverData.address}
                                            style={{ fontSize: '12px', resize: 'none' }}
                                            placeholder="Enter Address"
                                            className="bg-slate-100 rounded-md mb-4 p-2 h-16"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="flex flex-col ml-5">
                                        <label htmlFor="driverImage" className="text-gray-600 mb-1 whitespace-nowrap">
                                            Upload Driver Image
                                        </label>
                                        <span className="w-72 flex">
                                            <img
                                                src={fileUploadIcon}
                                                alt="Upload File"
                                                className="w-10 h-10 ml-4 cursor-pointer"
                                                onClick={() => document.getElementById('fileUpload').click()} // Trigger click on file input
                                            />
                                            <span
                                                className="text-blue-500 ml-4 underline mt-1 cursor-pointer"
                                                onClick={() => document.getElementById('fileUpload').click()}
                                            >
                                                upload
                                            </span>
                                            <input
                                                type="file"
                                                id="fileUpload"
                                                name="driverImage"
                                                className="cursor-pointer"
                                                style={{ display: 'none' }}
                                                onChange={handleFileChange}
                                            />
                                        </span>
                                    </div>
                                    {/* Image Preview */}
                                    {imagePreview && (
                                        <div className="mt-4">
                                            <img src={imagePreview} alt="Preview" className="max-w-full h-auto" />
                                        </div>
                                    )}
                                </div>
                                <div className="flex mt-10 ml-56">
                                    <button
                                        className="text-white font-bold bg-red-600 rounded-xl px-16 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2 mr-8"
                                        aria-current="page"
                                        onClick={() => navigate('/settings/drivers-information')}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="text-white font-bold bg-green-600 rounded-xl px-16 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2"
                                        aria-current="page"
                                        onClick={handleAddDriver}
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AddDriver;
