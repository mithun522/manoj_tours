import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import fileUploadIcon from "../../assets/file-upload-icon.svg";
import plusIcon from "../../assets/plus-circle-icon.svg";
import Layout from "../Layout/Layout";

const ShareLinksInfo = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('Vishnu');
  const [email, setEmail] = useState('abcd@abcd.com');
  const [mobile, setMobile] = useState('1234567890');
  const [position, setPosition] = useState('CEO');
  const [links, setLinks] = useState({
    Email: 'abcd@abcd.com',
    instagram: 'http://www.instagram.com',
    facebook: 'http://www.facebook.com',
    twitter: 'http://www.twitter.com',
  });
  const [bio, setBio] = useState('my name is abce bla bla');
  const [address, setAddress] = useState('123 abcd street, peelamedu, coimbatore');

  const handleUpload = () => {
    Swal.fire({
      title: "Profile!",
      text: "Profile Uploaded Successfully",
      icon: "success"
    });
  }

  return (
    <>
      <Layout>
        <div className="flex justify-center bg-white h-[calc(100vh-200px)] w-[calc(100vw-350px)] overflow-auto">
        <h1 className="text-start mb-2 mt-2 text-xl font-bold absolute left-10">Share Links Information</h1>
          <div className="flex flex-col w-full max-w-screen-md mx-auto mt-12">
            <div className="border border-gray-300 rounded-lg p-4 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-20 relative">
                <div className="flex flex-col text-start">
                  <label style={{ fontSize: "14px" }}>
                    Name
                  </label>
                  <input
                    type="text"
                    className="input-field bg-slate-100 px-2.5 py-1.5 w-full rounded-md"
                    value={name}
                    style={{fontSize: '12px'}}
                  />
                </div>
                <div className="flex flex-col text-start">
                  <label style={{ fontSize: "14px" }}>
                    Email ID
                  </label>
                  <input
                    type="text"
                    className="input-field bg-slate-100 px-2.5 py-1.5 w-full rounded-md"
                    value={email}
                    style={{fontSize: '12px'}}
                  />
                </div>
                <div className="flex flex-col text-start">
                  <label style={{ fontSize: "14px" }}>
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    className="input-field bg-slate-100 px-2.5 py-1.5 w-full rounded-md"
                    value={mobile}
                    style={{fontSize: '12px'}}
                  />
                </div>
                <div className="flex flex-col text-start">
                  <label style={{ fontSize: "14px" }}>
                    Postion
                  </label>
                  <input
                    type="text"
                    className="input-field bg-slate-100 px-2.5 py-1.5 w-full rounded-md"
                    value={position}
                    style={{fontSize: '12px'}}
                  />
                </div>
                <div className="flex flex-col text-start">
                  <label style={{ fontSize: "14px" }}>
                    Links
                  </label>
                  <div className="relative flex">
                    <input
                      type="text"
                      className="input-field bg-slate-100 px-2.5 py-1.5 w-full rounded-md"
                      value={links.Email}
                      style={{fontSize: '12px'}}
                      placeholder="Website"
                    />
                  </div>
                </div>
                <div className="flex flex-col text-start">
                  <div className="relative flex mt-5">
                    <input
                      type="text"
                      className="input-field bg-slate-100 px-2.5 py-1.5 w-full rounded-md"
                      value={links.facebook}
                      style={{fontSize: '12px'}}
                      placeholder="Website"
                    />
                  </div>
                </div>
                <div className="flex flex-col text-start">
                  <div className="relative flex">
                    <input
                      type="text"
                      className="input-field bg-slate-100 px-2.5 py-1.5 w-full rounded-md"
                      value={links.instagram}
                      style={{fontSize: '12px'}}
                      placeholder="Website"
                    />
                  </div>
                </div>
                <div className="flex flex-col text-start">
                  <div className="relative flex">
                    <input
                      type="text"
                      className="input-field bg-slate-100 px-2.5 py-1.5 w-full rounded-md"
                      value={links.twitter}
                      style={{fontSize: '12px'}}
                      placeholder="Website"
                    />
                  </div>
                </div>
              </div>
              <div className="flex mt-0.5">
                  <div className="flex items-center ml-96 cursor-pointer">
                    <img src={plusIcon} alt="" className="w-4 h-4 ml-48" />
                    <span  className="text-green-700 underline text-xs ml-1">Add Link</span>
                  </div>
              </div>
              <div className="flex flex-col text-start px-20 py-2">
                  <label style={{ fontSize: "14px" }}>
                    Bio
                  </label>
                  <div className="relative flex">
                    <textarea
                      type="text"
                      className="input-field bg-slate-100 px-2.5 py-1.5 w-full rounded-md"
                      value={bio}
                      style={{fontSize: '12px', resize: 'none'}}
                    />
                  </div>
                </div>
                <div className="flex flex-col text-start px-20 py-2">
                  <label style={{ fontSize: "14px" }}>
                    Address
                  </label>
                  <div className="relative flex">
                    <textarea
                      type="text"
                      className="input-field bg-slate-100 px-2.5 py-1.5 w-full rounded-md"
                      value={address}
                      style={{fontSize: '12px', resize: 'none'}}
                    />
                  </div>
                </div>
                <div className="flex flex-col text-start px-20 py-2">
                      <label
                        htmlFor="fleetNumber2"
                        className="text-gray-600 mb-1 whitespace-nowrap"
                      >
                        Upload Fleet Image
                      </label>
                      <span className="w-72 flex">
                        <img
                          src={fileUploadIcon}
                          alt="Upload File"
                          className="w-16 h-16 cursor-pointer"
                          onClick={() =>
                            document.getElementById("fileUpload").click()
                          } // Trigger click on file input
                        />
                        <span
                          className="text-blue-500 ml-4 underline mt-4 cursor-pointer"
                          onClick={() =>
                            document.getElementById("fileUpload").click()
                          }
                        >
                          upload
                        </span>
                        <input
                          type="file"
                          id="fileUpload"
                          className="cursor-pointer"
                          style={{ display: "none" }}
                        />
                      </span>
                    </div>
                <div className="mt-0" >
                <button
                  className="text-white absolute bottom-0 right-10 mr-4 mb-4 font-bold bg-green-600 rounded-xl px-10 py-2 shadow-lg"
                  onClick={() => handleUpload()}
                >
                  Upload
                </button>
                </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ShareLinksInfo;
