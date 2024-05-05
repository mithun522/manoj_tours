import React, { useState } from "react";
import Swal from "sweetalert2";
import fileUploadIcon from "../../assets/file-upload-icon.svg";
import plusIcon from "../../assets/plus-circle-icon.svg";
import Layout from "../Layout/Layout";

const ShareLinksInfo = () => {
  const [customerData, setCustomerData] = useState({
    name: "Vishnu",
    email: "abcd@abcd.com",
    mobile: "1234567890",
    position: "CEO",
    links: {
      Email: "abcd@abcd.com",
      instagram: "http://www.instagram.com",
      facebook: "http://www.facebook.com",
      twitter: "http://www.twitter.com",
    },
    bio: "my name is abce bla bla",
    address: "123 abcd street, peelamedu, coimbatore",
  });

  const handleUpload = () => {
    Swal.fire({
      title: "Profile!",
      text: "Profile Uploaded Successfully",
      icon: "success",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLinksChange = (e, linkName) => {
    const { value } = e.target;
    setCustomerData((prevData) => ({
      ...prevData,
      links: {
        ...prevData.links,
        [linkName]: value,
      },
    }));
  };

  return (
    <>
      <Layout>
        <div className="flex justify-center bg-white h-[calc(100vh-200px)] w-[calc(100vw-350px)] overflow-auto">
          <h1 className="text-start mb-2 mt-2 text-xl font-bold absolute left-10">
            Share Links Information
          </h1>
          <div className="flex flex-col w-full max-w-screen-md mx-auto mt-12">
            <div className="border border-gray-300 rounded-lg p-4 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-20 relative">
                <div className="flex flex-col text-start">
                  <label style={{ fontSize: "14px" }}>Name</label>
                  <input
                    type="text"
                    className="input-field bg-slate-100 px-2.5 py-1.5 w-full rounded-md"
                    name="name"
                    value={customerData.name}
                    style={{ fontSize: "12px" }}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col text-start">
                  <label style={{ fontSize: "14px" }}>Email ID</label>
                  <input
                    type="text"
                    className="input-field bg-slate-100 px-2.5 py-1.5 w-full rounded-md"
                    name="email"
                    value={customerData.email}
                    style={{ fontSize: "12px" }}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col text-start">
                  <label style={{ fontSize: "14px" }}>Mobile Number</label>
                  <input
                    type="number"
                    className="input-field bg-slate-100 px-2.5 py-1.5 w-full rounded-md"
                    name="mobile"
                    value={customerData.mobile}
                    style={{ fontSize: "12px" }}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col text-start">
                  <label style={{ fontSize: "14px" }}>Position</label>
                  <input
                    type="text"
                    className="input-field bg-slate-100 px-2.5 py-1.5 w-full rounded-md"
                    name="position"
                    value={customerData.position}
                    style={{ fontSize: "12px" }}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col text-start">
                  <label style={{ fontSize: "14px" }}>Links</label>
                  <div className="relative flex">
                    <input
                      type="text"
                      className="input-field bg-slate-100 px-2.5 py-1.5 w-full rounded-md"
                      name="Email"
                      value={customerData.links.Email}
                      style={{ fontSize: "12px" }}
                      placeholder="Website"
                      onChange={(e) => handleLinksChange(e, "Email")}
                    />
                  </div>
                </div>
                <div className="flex flex-col text-start">
                  <div className="relative flex mt-5">
                    <input
                      type="text"
                      className="input-field bg-slate-100 px-2.5 py-1.5 w-full rounded-md"
                      name="facebook"
                      value={customerData.links.facebook}
                      style={{ fontSize: "12px" }}
                      placeholder="Website"
                      onChange={(e) => handleLinksChange(e, "facebook")}
                    />
                  </div>
                </div>
                <div className="flex flex-col text-start">
                  <div className="relative flex">
                    <input
                      type="text"
                      className="input-field bg-slate-100 px-2.5 py-1.5 w-full rounded-md"
                      name="instagram"
                      value={customerData.links.instagram}
                      style={{ fontSize: "12px" }}
                      placeholder="Website"
                      onChange={(e) => handleLinksChange(e, "instagram")}
                    />
                  </div>
                </div>
                <div className="flex flex-col text-start">
                  <div className="relative flex">
                    <input
                      type="text"
                      className="input-field bg-slate-100 px-2.5 py-1.5 w-full rounded-md"
                      name="twitter"
                      value={customerData.links.twitter}
                      style={{ fontSize: "12px" }}
                      placeholder="Website"
                      onChange={(e) => handleLinksChange(e, "twitter")}
                    />
                  </div>
                </div>
              </div>
              <div className="flex mt-0.5">
                <div className="flex items-center ml-96 cursor-pointer">
                  <img src={plusIcon} alt="" className="w-4 h-4 ml-48" />
                  <span className="text-green-700 underline text-xs ml-1">
                    Add Link
                  </span>
                </div>
              </div>
              <div className="flex flex-col text-start px-20 py-2">
                <label style={{ fontSize: "14px" }}>Bio</label>
                <div className="relative flex">
                  <textarea
                    type="text"
                    className="input-field bg-slate-100 px-2.5 py-1.5 w-full rounded-md"
                    name="bio"
                    value={customerData.bio}
                    style={{ fontSize: "12px", resize: "none" }}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col text-start px-20 py-2">
                <label style={{ fontSize: "14px" }}>Address</label>
                <div className="relative flex">
                  <textarea
                    type="text"
                    className="input-field bg-slate-100 px-2.5 py-1.5 w-full rounded-md"
                    name="address"
                    value={customerData.address}
                    style={{ fontSize: "12px", resize: "none" }}
                    onChange={handleChange}
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
                    className="w-16 h-16 cursor-pointer hover:scale-105 ease-in-out duration-300"
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
              <div className="mt-0">
                <button
                  className="text-white absolute hover:scale-105 ease-in-out duration-300 bottom-0 right-10 mr-4 mb-4 font-bold bg-green-600 rounded-xl px-10 py-2 shadow-lg"
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
