import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import fileUploadIcon from "../../assets/file-upload-icon.svg";
import Layout from "../Layout/Layout";

const AddDriver = () => {
  const navigate = useNavigate();

  const [driverData, setDriverData] = useState({
    name: "John Doe",
    mobile: "123456789",
    address: "123 abcd street, Albany, New york USA",
  });

  const handleAddDriver = () => {
    Swal.fire({
      title: "Driver Info!",
      text: "Driver Added Successfully",
      icon: "success",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDriverData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Layout>
        <div className="max-w-screen mx-auto">
          <div className="flex flex-col">
            <div className="overflow-y-auto shadow-md sm:rounded-lg h-[796px]">
              <div className="flex justify-start px-10 py-6">
                <h1 className="text-lg font-bold" style={{ fontSize: "30px" }}>
                  Add Driver Information
                </h1>
              </div>
              <div className="flex justify-center mb-4">
                <div className="cursor-pointer mr-4 font-semibold w-56 py-2 bg-black text-white rounded-lg">
                  Driver Details
                </div>
              </div>
              <div className="flex justify-center">
                <div
                  className="rounded-lg p-4 relative" 
                  style={{ width: "427px" }}
                >
                  <div className="flex flex-col p-4 text-start">
                    <div className="flex justify-between">
                      <div className="flex flex-col">
                        <label
                          htmlFor="driverName"
                          className="text-gray-600 mb-1"
                        >
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
                          style={{ fontSize: "12px" }}
                        />
                      </div>
                      <div className="flex flex-col ml-5">
                        <label
                          htmlFor="driverMobile"
                          className="text-gray-600 mb-1"
                        >
                          Mobile Number
                        </label>
                        <input
                          type="text"
                          id="driverMobile"
                          name="mobile"
                          value={driverData.mobile}
                          placeholder="Enter Mobile Number"
                          className="bg-slate-100 rounded-md mb-4 p-2"
                          onChange={handleChange}
                          style={{ fontSize: "12px" }}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="driverAddress"
                        className="text-gray-600 mb-1"
                      >
                        Address
                      </label>
                      <textarea
                        type="text"
                        id="driverAddress"
                        name="address"
                        value={driverData.address}
                        style={{ fontSize: "12px", resize: "none" }}
                        placeholder="Enter Address"
                        className="bg-slate-100 rounded-md mb-4 p-2 h-16"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="driverImage"
                        className="text-gray-600 mb-1 whitespace-nowrap"
                      >
                        Upload Driver Image
                      </label>
                      <span className="w-72 flex mt-5">
                        <img
                          src={fileUploadIcon}
                          alt="Upload File"
                          className="w-16 h-16 cursor-pointer"
                          onClick={() =>
                            document.getElementById("driverImage").click()
                          } // Trigger click on file input
                        />
                        <span
                          className="text-blue-500 ml-4 underline mt-4 cursor-pointer"
                          onClick={() =>
                            document.getElementById("driverImage").click()
                          }
                        >
                          upload
                        </span>
                        <input
                          type="file"
                          id="driverImage"
                          className="cursor-pointer"
                          style={{ display: "none" }}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="flex mt-10 ml-56">
                    <button
                      className="text-white font-bold bg-red-600 rounded-xl px-16 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2 mr-8"
                      aria-current="page"
                      onClick={() => navigate("/settings/drivers-information")}
                    >
                      Cancel
                    </button>
                    <button
                      className="text-white font-bold bg-green-600 rounded-xl px-16 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2"
                      aria-current="page"
                      onClick={() => handleAddDriver()}
                    >
                      Update
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

export default AddDriver;
