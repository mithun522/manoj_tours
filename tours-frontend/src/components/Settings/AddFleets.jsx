import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import fileUploadIcon from '../../assets/file-upload-icon.svg';
import Layout from "../Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { FLEET } from "../shared/Api";
import closeIcon from "../../assets/close-icon.svg"

const AddFleets = () => {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);

  const [formData, setFormData] = useState({
    fleetName: '',
    fleetNumber: '',
    numberOfSeats: '',
    fleetImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      fleetImage: e.target.files[0],
    }));
    if (e.target.files && e.target.files[0]) {
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleAddFleet = async () => {
    // Create a FormData object to send the data including the file
    console.log(formData)
    const data = new FormData();
    data.append('fleetName', formData.fleetName);
    data.append('fleetNumber', formData.fleetNumber);
    data.append('numberOfSeats', formData.numberOfSeats);
    if (formData.fleetImage) {
      data.append('fleetImage', formData.fleetImage);
    }

    try {
      // Replace with your backend URL
      await axios.post(FLEET, data)
      .then((response) => {
        if(response.status === 201) {
          toast.success('Fleet Successfully added');
          navigate('/settings/fleets-information');
        }
      })
      .catch((error) => toast.error(error.message));

    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  const handleClearImage = () => {
    setImagePreview(null);
    setFormData((prevData) => ({
     ...prevData,
      fleetImage: null,
    }));
  }

  return (
    <>
      <Layout>
        <div className="mx-auto">
          <div className="flex flex-col">
            <div className="overflow-y-auto shadow-md sm:rounded-lg h-[696px]">
              <div className="flex justify-start px-10 py-6">
                <h1 className="text-lg font-bold" style={{ fontSize: '30px' }} >Add New Fleets</h1>
              </div>
              <div className="flex justify-center mb-4">
                <div className=" mr-4 font-semibold px-10 py-2 bg-black text-white rounded-lg">
                  Fleet Details
                </div>
              </div>
              <div className="flex justify-center">
                <div className="rounded-lg p-4 relative">
                  <div className="flex flex-col p-4 text-start">
                    <div className="flex justify-between">
                      <div className="flex flex-col">
                        <label htmlFor="fleetName" className="text-gray-600 mb-1">Fleet Name</label>
                        <input
                          type="text"
                          id="fleetName"
                          name="fleetName"
                          value={formData.fleetName}
                          onChange={handleChange}
                          placeholder="Enter Fleet Name"
                          className="bg-slate-100 rounded-md mb-4 p-2"
                        />
                      </div>
                      <div className="flex flex-col ml-5">
                        <label htmlFor="fleetNumber" className="text-gray-600 mb-1">Fleet Number</label>
                        <input
                          type="text"
                          id="fleetNumber"
                          name="fleetNumber"
                          value={formData.fleetNumber}
                          onChange={handleChange}
                          placeholder="Enter Fleet Number"
                          className="bg-slate-100 rounded-md mb-4 p-2"
                        />
                      </div>
                    </div>
                    <div className="flex justify-between mt-6">
                      <div className="flex flex-col">
                        <label htmlFor="numberOfSeats" className="text-gray-600 mb-1">No of Seats</label>
                        <input
                          type="text"
                          id="numberOfSeats"
                          name="numberOfSeats"
                          value={formData.numberOfSeats}
                          onChange={handleChange}
                          placeholder="Enter Number of Seats"
                          className="bg-slate-100 rounded-md mb-4 p-2"
                        />
                      </div>
                      <div className="relative lg:min-w-[300px] min-w-[400px]">
                        {imagePreview ? (
                          <div className="relative">
                            <img src={imagePreview} alt="Fleet Preview" className="absolute left-12 max-w-40 flex flex-grow object-cover" />
                            <img 
                              src={closeIcon} 
                              alt="Close" 
                              className="absolute lg:top-0 lg:right-0 top-0 right-28 w-6 h-6 cursor-pointer"
                              onClick={handleClearImage}
                            />
                          </div>
                        ) : (
                          <div className="flex flex-col ml-5">
                            <label htmlFor="fleetImage" className="text-gray-600 mb-1 whitespace-nowrap">Upload Fleet Image</label>
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
                                name="fleetImage"
                                className="cursor-pointer"
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                              />
                            </span>                        
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-10 ml-56">
                    <button
                      className="text-white font-bold bg-red-600 rounded-xl px-16 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2 mr-8"
                      aria-current="page"
                      onClick={() => navigate('/settings/fleets-information')}
                    >
                      Back
                    </button>
                    <button
                      className="text-white font-bold bg-green-600 rounded-xl px-16 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2"
                      aria-current="page"
                      onClick={handleAddFleet}
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
    </>
  );
};

export default AddFleets;
