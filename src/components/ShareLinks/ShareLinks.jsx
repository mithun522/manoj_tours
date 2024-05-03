import React from "react";
import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";
import fileUploadIcon from "../../assets/file-upload-icon.svg";
import plusIcon from '../../assets/plus-circle-icon.svg';

const ShareLinks = () => {
  const navigate = useNavigate();

  return (
    <>
      <Layout>
        <div className="max-w-screen mx-auto">
          <div className="flex flex-col">
            <div className="overflow-y-auto shadow-md sm:rounded-lg h-[796px]">
              <div className="flex justify-between px-10 pt-2 mt-8">
                <h1 className="text-lg font-bold" style={{ fontSize: "30px" }}>
                  New Quotations
                </h1>
              </div>
              <div className="flex justify-center bg-white">
                <div
                  className="border border-gray-300 rounded-lg p-4 h-96"
                  style={{ width: "770px", height: "600px" }}
                >
                  <div className="grid grid-cols-1 divide-x p-6 relative justify-center">
                    <div className="flex flex-col text-start mt-[-10px] px-10 py-1">
                      <div className="flex">
                        <div>
                          <label htmlFor="name" className="mb-1" style={{ fontSize: "14px" }}>
                            Name
                          </label>
                          <div className="flex items-center">
                            <input
                              id="name"
                              type="text"
                              className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72"
                              style={{ fontSize: "12px" }}
                              value="John Doe"
                            />
                          </div>
                        </div>
                        <div className=" ml-5">
                          <label htmlFor="email" className="mb-1" style={{ fontSize: "14px" }}>
                            Email
                          </label>
                          <div className="flex items-center">
                            <input
                              id="email"
                              type="email"
                              className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72"
                              style={{ fontSize: "12px" }}
                              value="john.doe@gmail.com"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex mt-2">
                        <div className="flex flex-col mt-3">
                          <label htmlFor="mobileNumber" className="mb-1" style={{ fontSize: "14px" }}>
                            Mobile Number
                          </label>
                          <div className="flex items-center">
                            <input
                              id="mobileNumber"
                              type="text"
                              className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72 justify-between"
                              style={{ fontSize: "12px" }}
                              value="1234567890"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col mt-3 ml-5">
                          <label htmlFor="position" className="mb-1" style={{ fontSize: "14px" }}>
                            Position
                          </label>
                          <div className="flex items-center">
                            <input
                              id="position"
                              type="text"
                              className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72 justify-between"
                              style={{ fontSize: "12px" }}
                              value="CEO"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex mt-2">
                        <div className="flex flex-col mt-3">
                          <label htmlFor="website" className="mb-1" style={{ fontSize: "14px" }}>
                            Website
                          </label>
                          <div className="flex items-center">
                            <input
                              id="website"
                              type="text"
                              className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72 justify-between"
                              style={{ fontSize: "12px" }}
                              value="www.example.com"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col mt-3 ml-5">
                          <label htmlFor="instagram" className="mb-1" style={{ fontSize: "14px" }}>
                            Instagram
                          </label>
                          <div className="flex items-center">
                            <input
                              id="instagram"
                              type="text"
                              className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72 justify-between"
                              style={{ fontSize: "12px" }}
                              value="example_instagram"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex mt-2">
                        <div className="flex flex-col mt-3">
                          <div className="flex items-center">
                            <input
                              id="website"
                              type="text"
                              className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72 justify-between"
                              style={{ fontSize: "12px" }}
                              value="www.Facebook.com"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col mt-3 ml-5">
                          <div className="flex items-center">
                            <input
                              id="instagram"
                              type="text"
                              className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-72 justify-between"
                              style={{ fontSize: "12px" }}
                              value="abcd@facebook.com"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex mt-4">
                          <div className="flex items-center ml-96 cursor-pointer">
                            <img src={plusIcon} alt="" className="w-4 h-4 ml-36" />
                            <span  className="text-gray-700 underline text-xs ml-2">Add Link</span>
                          </div>
                      </div>
                      <div className="flex mt-4">
                        <div>
                          <label htmlFor="bio" className="mb-1" style={{ fontSize: "14px" }}>
                            Bio
                          </label>
                          <div className="flex items-center">
                            <input
                              id="bio"
                              type="text"
                              className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-[600px]"
                              style={{ fontSize: "12px" }}
                              value="abcd efgh ijklm nop qrst uv wxyz"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex mt-4">
                        <div>
                          <label htmlFor="address" className="mb-1" style={{ fontSize: "14px" }}>
                            Address
                          </label>
                          <div className="flex items-center">
                            <input
                              id="address"
                              type="text"
                              className="bg-slate-100 px-2 py-2 mr-2 flex rounded-md w-[600px]"
                              style={{ fontSize: "12px" }}
                              value="abcd efgh ijklm nop qrst uv wxyz"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex mt-4">
                        <div className="flex flex-col mt-2">
                            <label htmlFor="fleetNumber2" className="text-gray-600 mb-1 whitespace-nowrap">Upload Driver Image</label>
                            <span className="w-72 flex">
                                <img
                                src={fileUploadIcon}
                                alt="Upload File"
                                className="w-12 h-12 cursor-pointer"
                                onClick={() => document.getElementById('fileUpload').click()} // Trigger click on file input
                                />
                                <span className="text-blue-500 ml-4 underline mt-2 cursor-pointer" onClick={() => document.getElementById('fileUpload').click()} >Upload Image</span>
                                <input type="file" id="fileUpload" className="cursor-pointer" style={{display: 'none'}} />
                            </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex ml-96">
                      <button
                        className="text-white font-bold ml-20 absolute -mt-14 whitespace-nowrap bg-green-600 rounded-xl px-10 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2"
                        aria-current="page"
                        onClick={() =>
                          navigate("/quotes/customer-new-quotation-preview")
                        }
                      >
                        Upload
                      </button>
                    </div>
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

export default ShareLinks;
