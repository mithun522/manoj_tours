import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import fileUploadIcon from '../../assets/file-upload-icon.svg';
import Layout from "../Layout/Layout";

const AddFleets = () => {

  const navigate = useNavigate();

  const handleAddDriver = () => {
    Swal.fire({
        title: "Fleet Info!",
        text: "Fleet Added Successfully",
        icon: "success"
      });
  }

  return (
    <>
      <Layout>
        <div className="max-w-screen mx-auto">
          <div className="flex flex-col">
            <div className="overflow-y-auto shadow-md sm:rounded-lg h-[796px]">
              <div className="flex justify-start px-10 py-6">
                <h1 className="text-lg font-bold" style={{ fontSize: '30px' }} >Add New Fleets</h1>
              </div>
              <div className="flex justify-center mb-4">
                <div
                  className=" mr-4 font-semibold w-56 py-2 bg-black text-white rounded-lg"
                >
                  Fleet Details
                </div>
              </div>
              <div className="flex justify-center">
                <div
                  className="rounded-lg p-4 h-96 relative" // Add relative positioning
                  style={{ width: "427px" }}
                >
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
                            onClick={() => navigate('/settings/fleets-information')}
                            >
                            Back
                            </button>
                            <button
                            className="text-white font-bold bg-green-600 rounded-xl px-16 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2"
                            aria-current="page"
                            onClick={() => handleAddDriver()}
                            >
                            Add
                            </button>
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

export default AddFleets;
