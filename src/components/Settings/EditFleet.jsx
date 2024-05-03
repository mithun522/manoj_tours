import React, { useState } from "react";
import Layout from "../Layout/Layout";
import toyota from '../../assets/toyota.png';
import editIcon from '../../assets/edit-icon-gray.svg';
import fileUploadIcon from '../../assets/file-upload-icon.svg';

const EditFleet = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <>
      <Layout>
        <div className="max-w-screen mx-auto">
          <div className="flex flex-col">
            <div className="overflow-y-auto shadow-md sm:rounded-lg h-[796px]">
              <div className="flex justify-start px-10 py-6">
                <h1 className="text-lg font-bold" style={{ fontSize: '30px' }} >Edit Fleets</h1>
              </div>
              <div className="flex justify-center mb-4">
                <div
                  className="cursor-pointer mr-4 font-semibold w-56 py-2 bg-black text-white rounded-lg"
                  onClick={handleEditClick}
                >
                  Edit Fleet
                </div>
              </div>
              <div className="flex justify-center">
                <div
                  className="rounded-lg p-4 h-96 relative" // Add relative positioning
                  style={{ width: "427px" }}
                >
                  {isEditing ? (
                    <>
                        <div className="flex flex-col p-4 text-start">
                            <div className="flex justify-between">
                                <div className="flex flex-col">
                                    <label htmlFor="fleetName1" className="text-gray-600 mb-1">Fleet Name</label>
                                    <input type="text" id="fleetName1" value='Ertiga' placeholder="Enter Fleet Name" className="bg-slate-100 rounded-md mb-4 p-2" />
                                </div>
                                <div className="flex flex-col ml-5">
                                    <label htmlFor="fleetNumber1" className="text-gray-600 mb-1">Fleet Number</label>
                                    <input type="text" id="fleetNumber1" value='123456789' placeholder="Enter Fleet Number" className="bg-slate-100 rounded-md mb-4 p-2" />
                                </div>
                                </div>
                                <div className="flex justify-between mt-6">
                                    <div className="flex flex-col">
                                    <label htmlFor="fleetName2" className="text-gray-600 mb-1">No of Seats</label>
                                    <input type="text" id="fleetName2" value='06' placeholder="Enter Fleet Name" className="bg-slate-100 rounded-md mb-4 p-2" />
                                </div>
                                <div className="flex flex-col ml-5">
                                    <label htmlFor="fleetNumber2" className="text-gray-600 mb-1 whitespace-nowrap">Upload Fleet Image</label>
                                    <span className="w-72 flex">
                                        <img
                                        src={fileUploadIcon}
                                        alt="Upload File"
                                        className="w-10 h-10 ml-4 cursor-pointer"
                                        onClick={() => document.getElementById('fileUpload').click()} // Trigger click on file input
                                        />
                                        <span className="text-blue-500 ml-4 underline mt-1 cursor-pointer" onClick={() => document.getElementById('fileUpload').click()} >upload</span>
                                        <input type="file" id="fileUpload" className="cursor-pointer" style={{display: 'none'}} />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-10 ml-56">
                            <button
                            className="text-white font-bold bg-red-600 rounded-xl px-16 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2 mr-8"
                            aria-current="page"
                            onClick={() => setIsEditing(false)}
                            >
                            Cancel
                            </button>
                            <button
                            className="text-white font-bold bg-green-600 rounded-xl px-16 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2"
                            aria-current="page"
                            >
                            Update
                            </button>
                        </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-between items-center p-6">
                        <img src={toyota} alt="" className="w-60 h-32" />
                        <div className="flex flex-col items-center">
                          <div className="text-blue-400 flex whitespace-nowrap underline">
                            <img src={editIcon} alt="" className="w-4 h-4 mr-2 mt-1" />
                            Change Image
                          </div>
                          <div className="text-red-600 flex whitespace-nowrap underline">
                            <img src={editIcon} alt="" className="w-4 h-4 mr-2 mt-1" />
                            Remove Image
                          </div>
                        </div>
                      </div>
                      <div className="flex-col" >
                        <div className="flex justify-between py-3" >
                          <span className="text-md text-gray-700" >Fleet Name</span>
                          <span className="flex text-md text-gray-700" >Toyota Etios
                            <img src={editIcon} alt="" className="w-4 h-4 ml-6 mt-1" />
                          </span>
                        </div>
                        <div className="flex justify-between py-3" >
                          <span className="text-md text-gray-700" >Fleet Name</span>
                          <span className="flex text-md text-gray-700" >Toyota Etios
                            <img src={editIcon} alt="" className="w-4 h-4 ml-6 mt-1" />
                          </span>
                        </div>
                        <div className="flex justify-between py-3" >
                          <span className="text-md text-gray-700" >Fleet Name</span>
                          <span className="flex text-md text-gray-700" >Toyota Etios
                            <img src={editIcon} alt="" className="w-4 h-4 ml-6 mt-1" />
                          </span>
                        </div>
                        <div className="flex justify-end mt-10">
                            <button
                            className="text-white font-bold bg-gray-500 rounded-xl px-10 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2 mr-8"
                            aria-current="page"
                            >
                            Back
                            </button>
                            <button
                            className="text-white font-bold bg-green-600 rounded-xl px-5 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2"
                            aria-current="page"
                            >
                            Apply Changes
                            </button>
                        </div>
                      </div>
                    </>
                  )}
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
