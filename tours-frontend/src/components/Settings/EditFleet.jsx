import React, { useEffect, useRef, useState } from "react";
import Layout from "../Layout/Layout";
import editIcon from "../../assets/edit-icon-gray.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { FLEET, SERVER } from "../shared/Api";
import toast from "react-hot-toast";

const EditFleet = () => {
  const [fleetData, setFleetData] = useState(null);
  const [editField, setEditField] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null); // New state for file upload
  const [previewUrl, setPreviewUrl] = useState(null); // New state for preview URL
  const navigate = useNavigate();
  const location = useLocation();
  const fleetId = location.state;
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchFleetData = async () => {
      try {
        const response = await axios.get(`${FLEET}/${fleetId}`);
        setFleetData(response.data);
        if (response.data.fleetImage) {
          setPreviewUrl(`${SERVER}${response.data.fleetImage}`);
        }
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching fleet data:", error);
      }
    };

    if (fleetId) {
      fetchFleetData();
    }

    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setEditField(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [fleetId]);

  const handleEditClick = (field) => {
    setEditField(field);
  };

  const handleChange = (e) => {
    setFleetData({ ...fleetData, [editField]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setSelectedFile(file);
      setPreviewUrl(previewUrl);
    }
  };

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("fleetName", fleetData.fleetName);
    formData.append("fleetNumber", fleetData.fleetNumber);
    formData.append("numberOfSeats", fleetData.numberOfSeats);
    if (selectedFile) {
      formData.append("fleetImage", selectedFile);
    }

    try {
      const response = await axios.put(`${FLEET}/${fleetId}`, formData);
      if (response.status === 200) {
        setEditField(null);
        toast.success("Fleet successfully updated");
        navigate('/settings/fleets-information');
      }
    } catch (error) {
      console.error("Error updating fleet:", error);
    }
  };

  const handleRemoveImageClick = () => {
    setFleetData({ ...fleetData, fleetImage: null });
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  if (!fleetData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Layout>
        <div className="max-w-screen mx-auto">
          <div className="flex flex-col">
            <div className="overflow-y-auto shadow-md sm:rounded-lg h-[796px]">
              <div className="flex justify-start px-10 py-6">
                <h1 className="text-lg font-bold" style={{ fontSize: "30px" }}>
                  Edit Fleets
                </h1>
              </div>
              <div className="flex justify-center mb-4">
                <div className="cursor-pointer mr-4 font-semibold w-56 py-2 bg-black text-white rounded-lg">
                  Edit Fleet
                </div>
              </div>
              <div className="flex justify-center">
                <div
                  ref={containerRef}
                  className="rounded-lg p-4 h-96 relative"
                  style={{ width: "427px" }}
                >
                    <>
                      <div className="flex flex-col justify-between items-center p-6">
                        <img
                          src={previewUrl}
                          alt=""
                          className="max-h-[200px]"
                        />
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
                        <div className="flex-col">
                          <div className="flex justify-between py-3">
                            <span className="text-md text-gray-700">
                              Fleet Name
                            </span>
                            {editField === "fleetName" ? (
                              <input
                                type="text"
                                value={fleetData.fleetName}
                                onChange={handleChange}
                                onBlur={handleSave}
                                className="bg-slate-100 rounded-md p-2 w-40 text-center"
                              />
                            ) : (
                              <span className="flex text-md text-gray-700">
                                {fleetData.fleetName}
                                <img
                                  src={editIcon}
                                  alt=""
                                  className="w-4 h-4 ml-6 mt-1 cursor-pointer"
                                  onClick={() => handleEditClick("fleetName")}
                                />
                              </span>
                            )}
                          </div>
                          <div className="flex justify-between py-3">
                            <span className="text-md text-gray-700">
                              Fleet Number
                            </span>
                            {editField === "fleetNumber" ? (
                              <input
                                type="text"
                                value={fleetData.fleetNumber}
                                onChange={handleChange}
                                onBlur={handleSave}
                                className="bg-slate-100 rounded-md p-2 w-40 text-center"
                              />
                            ) : (
                              <span className="flex text-md text-gray-700">
                                {fleetData.fleetNumber}
                                <img
                                  src={editIcon}
                                  alt=""
                                  className="w-4 h-4 ml-6 mt-1 cursor-pointer"
                                  onClick={() => handleEditClick("fleetNumber")}
                                />
                              </span>
                            )}
                          </div>
                          <div className="flex justify-between py-3">
                            <span className="text-md text-gray-700">
                              Number of Seats
                            </span>
                            {editField === "numberOfSeats" ? (
                              <input
                                type="text"
                                value={fleetData.numberOfSeats}
                                onChange={handleChange}
                                onBlur={handleSave}
                                className="bg-slate-100 rounded-md p-2 w-40 text-center"
                              />
                            ) : (
                              <span className="flex text-md text-gray-700">
                                {fleetData.numberOfSeats}
                                <img
                                  src={editIcon}
                                  alt=""
                                  className="w-4 h-4 ml-6 mt-1 cursor-pointer"
                                  onClick={() =>
                                    handleEditClick("numberOfSeats")
                                  }
                                />
                              </span>
                            )}
                          </div>
                          <div className="flex justify-end mt-10">
                            <Link
                              to="/settings/fleets-information"
                              className="text-white font-bold bg-gray-500 rounded-xl px-10 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2 mr-8"
                              aria-current="page"
                            >
                              Back
                            </Link>
                            <button
                              className="text-white font-bold bg-green-600 rounded-xl px-5 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2"
                              aria-current="page"
                              onClick={handleSave}
                            >
                              Apply Changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default EditFleet;
