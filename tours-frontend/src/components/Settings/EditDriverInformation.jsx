import React, { useEffect, useRef, useState } from "react";
import Layout from "../Layout/Layout";
import editIcon from '../../assets/edit-icon-gray.svg';
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { DRIVER, SERVER } from "../shared/Api";
import toast from "react-hot-toast";

const EditDriverInformation = () => {
  const [driverData, setDriverData] = useState({
    name: '',
    mobile_number: '',
    address: '',
  });
  const [previewUrl, setPreviewUrl] = useState(null);
  const [editingField, setEditingField] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const location = useLocation();  
  const { driverId } = location.state;
  const navigate = useNavigate();
  const containerRef = useRef();

  useEffect(() => {
    const fetchDriverData = async () => {
      try {
        const response = await axios.get(`${DRIVER}/${driverId}`);
        setDriverData(response.data);
        if (response.data.profileImage) {
          setPreviewUrl(`${SERVER}${response.data.profileImage}`);
          setSelectedFile(response.data.profileImage);
        }
      } catch (error) {
        console.error("Error fetching driver data:", error);
      }
    };

    if (driverId) {
      fetchDriverData();
    }

    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setEditingField(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [driverId]);

  const handleRemoveImageClick = () => {
    setDriverData(prevState => ({
      ...prevState,
      profileImage: '',
    }));
    setPreviewUrl(null);
    setSelectedFile(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDriverData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEditClick = (field) => {
    setEditingField(field);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setSelectedFile(file);
      setPreviewUrl(previewUrl);
    }
    console.log(file)
  };

  const handleUpdateClick = async () => {
    const formData = new FormData();
    formData.append('name', driverData.name);
    formData.append('mobile_number', driverData.mobile_number);
    formData.append('address', driverData.address);
    if (selectedFile) {
        formData.append('profileImage', selectedFile);
    }

    try {
        const response = await axios.put(`${DRIVER}/${driverId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        if (response.status === 200) {
            toast.success(response.data.message);
            navigate('/settings/drivers-information');
            setEditingField(null);
        }
    } catch (error) {
        console.error("Error updating driver data:", error);
    }
};

  return (
    <Layout>
      <div className="max-w-screen-lg mx-auto p-6">
        <div className="flex flex-col bg-white rounded-lg overflow-hidden">
          <div className="px-10 py-6">
            <h1 className="text-3xl font-bold text-gray-900 text-start">
              Edit Driver
            </h1>
          </div>
          <div className="flex justify-center py-4">
            <div className="font-semibold py-2 px-20 bg-gray-800 text-white rounded-lg">
              Edit Driver
            </div>
          </div>
          <div className="flex justify-center px-6 py-6" ref={containerRef}>
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <div className="flex justify-between items-center mb-6">
              {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="Driver Profile"
                    className="w-48 h-40 rounded-lg min-w-[200px] min-h-[200px]"
                  />
                ) : (
                  <div className="min-w-[200px] h-40 flex items-center justify-center bg-gray-200 rounded-lg">
                    <span className="text-gray-500">No Driver Image found</span>
                  </div>
                )}
                <div className="flex flex-col items-center">
                  <span className="w-72 flex">
                    <img
                      src={editIcon}
                      alt="Edit File"
                      className="w-5 h-5 ml-4 cursor-pointer"
                      onClick={() =>
                        document.getElementById("fileUpload").click()
                      }
                    />
                    <span
                      className="text-blue-500 ml-4 underline mt-1 cursor-pointer"
                      onClick={() =>
                        document.getElementById("fileUpload").click()
                      }
                    >
                      Change Image
                    </span>
                    <input
                      type="file"
                      id="fileUpload"
                      className="cursor-pointer"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                  </span>
                  <div className="text-red-600 w-72 flex whitespace-nowrap underline cursor-pointer">
                    <div
                      className="text-red-600 w-72 flex whitespace-nowrap underline cursor-pointer"
                      onClick={handleRemoveImageClick}
                    >
                      <img
                        src={editIcon}
                        alt=""
                        className="w-5 h-5 ml-4 mt-1"
                      />
                      <span className="ml-4">Remove Image</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center relative">
                  <span className="text-md text-gray-700 w-1/3">
                    Driver Name :{" "}
                  </span>
                  {editingField === "name" ? (
                    <input
                      type="text"
                      name="name"
                      value={driverData.name}
                      onChange={handleInputChange}
                      className="text-md text-gray-700 border px-2 py-1 flex-grow border-gray-300 focus:outline-none focus:border-blue-500 rounded"
                    />
                  ) : (
                    <span className="flex items-center text-md text-gray-700 flex-grow pl-20">
                      {driverData.name}
                      <img
                        src={editIcon}
                        alt="Edit Icon"
                        className="w-4 h-4 ml-2 cursor-pointer absolute right-0"
                        onClick={() => handleEditClick("name")}
                      />
                    </span>
                  )}
                </div>
                <div className="flex items-center relative">
                  <span className="text-md text-gray-700 w-1/3">
                    Driver Mobile :{" "}
                  </span>
                  {editingField === "mobile_number" ? (
                    <input
                      type="text"
                      name="mobile_number"
                      value={driverData.mobile_number}
                      onChange={handleInputChange}
                      className="text-md text-gray-700 border px-2 py-1 flex-grow border-gray-300 focus:outline-none focus:border-blue-500 rounded"
                    />
                  ) : (
                    <span className="flex items-center text-md text-gray-700 flex-grow pl-20">
                      {driverData.mobile_number}
                      <img
                        src={editIcon}
                        alt="Edit Icon"
                        className="w-4 h-4 ml-2 cursor-pointer absolute right-0"
                        onClick={() => handleEditClick("mobile_number")}
                      />
                    </span>
                  )}
                </div>
                <div className="flex items-center">
                  <span className="text-md text-gray-700 w-1/3">
                    Address :{" "}
                  </span>
                  {editingField === "address" ? (
                    <textarea
                      name="address"
                      value={driverData.address}
                      onChange={handleInputChange}
                      className="text-md text-gray-700 border px-2 py-1 flex-grow border-gray-300 focus:outline-none focus:border-blue-500 rounded resize-none"
                    />
                  ) : (
                    <span className="flex items-center text-md text-gray-700 flex-grow pl-20 text-start">
                      {driverData.address}
                      <img
                        src={editIcon}
                        alt="Edit Icon"
                        className="w-4 h-4 ml-2 cursor-pointer"
                        onClick={() => handleEditClick("address")}
                      />
                    </span>
                  )}
                </div>
              </div>
              <div className="flex justify-end mt-10 space-x-4">
                <button
                  className="text-white font-bold bg-gray-500 rounded-lg px-6 py-2"
                  aria-current="page"
                  onClick={() => navigate("/settings/drivers-information")}
                >
                  Back
                </button>
                <button
                  className="text-white font-bold bg-green-600 rounded-lg px-6 py-2"
                  aria-current="page"
                  onClick={handleUpdateClick}
                >
                  Apply Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditDriverInformation;
