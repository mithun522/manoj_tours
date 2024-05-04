import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import linksIcon from '../../assets/chain-icon.svg';
import editIcon from '../../assets/edit-icon.svg';
import emailIcon from '../../assets/email-icon.svg';
import facebookIcon from '../../assets/facebook-icon.svg';
import instagramIcon from '../../assets/instagram-icon.svg';
import locationIcon from '../../assets/location-icon-filled.svg';
import phoneIcon from '../../assets/phone-icon.svg';
import profilePic from '../../assets/profile.jpeg';
import shareIcon from '../../assets/share-icon.svg';
import youtubeIcon from '../../assets/youtube-icon.svg';
import Layout from "../Layout/Layout";

const ShareLinks = () => {

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate()

  const uploadedInfo = {
    name: "Vishnu",
    email: "abcd@abcd.com",
    mobile: "1234567890",
    position: "CEO",
    links: {
      Email: "manojtoursandtravels.com",
      instagram: "https:www.instagra.com/manojtoursandtravels",
      facebook: "https:www.facebook.com/manojtoursandtravels",
      youtube: "https:www.youtube.com/manojtoursandtravels",
    },
    bio: "Discover the world with Manoj Tours and Travels, your trusted partner in creating bespoke travel experiences. Founded on the principles of excellence and personalized service, we specialize in curating unforgettable journeys tailored to your unique preferences.",
    address: "123 abcd street, peelamedu, coimbatore",
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Layout>
        <div className="flex justify-center bg-white h-[calc(100vh-200px)] w-[calc(100vw-350px)] overflow-auto relative">
          <div className="flex flex-col w-full max-w-screen-md mx-auto mt-12">
            <h1 className="text-xl font-bold mb-4 text-start absolute top-3 left-3">Uploaded Information</h1>
            <div className="border border-gray-300 rounded-lg mt-4 relative">
              <div className="absolute top-5 right-5 flex flex-col cursor-pointer" onClick={() => navigate('/share-links/edit')} >
                <img src={editIcon} alt="" className="w-4 h-4 ml-12" />
                <span className="text-xs text-gray-600" >Edit Account Info</span>
              </div>
              <div className="bg-slate-100 p-4">
                <div className="flex justify-center items-center mb-2">
                  <img src={profilePic} alt="Profile" className="w-20 h-20 rounded-full" />
                </div>
                <div className="text-center mb-4">
                  <h2 className="font-bold text-lg">{uploadedInfo.name}</h2>
                  <p className="text-gray-600">{uploadedInfo.position}</p>
                </div>
              </div>
              <div className="col-span-2 px-10 py-2">
                  <div className="flex flex-col text-start">
                    <label className="font-bold" style={{fontSize: '16px'}} >Bio</label>
                    <span style={{fontSize: 12}} >{uploadedInfo.bio}</span>
                  </div>
                </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5 px-10 mb-14">
                <div className="flex flex-col text-start">
                  <div className="flex items-center mb-2">
                    <img src={emailIcon} alt="" className="w-4 h-4 mr-2" />
                    <span style={{ fontSize: 12 }}>{uploadedInfo.email}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <img src={phoneIcon} alt="" className="w-4 h-4 mr-2" />
                    <span style={{ fontSize: 12 }}>{uploadedInfo.mobile}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <img src={locationIcon} alt="" className="w-4 h-4 mr-2" />
                    <span style={{fontSize: 12}} >{uploadedInfo.address}</span>
                  </div>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <div className="flex flex-col text-start">
                    <ul>
                      <li className="flex items-center mb-2">
                        <img src={facebookIcon} alt="" className="w-6 h-6 mr-2" />
                        <a style={{fontSize: 12}}  href={uploadedInfo.links.facebook} target="_blank" rel="noopener noreferrer">{uploadedInfo.links.facebook}</a>
                      </li>
                      <li className="flex items-center mb-2 mt-5 ml-1">
                        <img src={instagramIcon} alt="" className="w-4 h-4 mr-2" />
                        <a style={{fontSize: 12}}  href={uploadedInfo.links.instagram} target="_blank" rel="noopener noreferrer">{uploadedInfo.links.instagram}</a>
                      </li>
                      <li className="flex items-center mb-2 mt-5 ml-1">
                        <img src={youtubeIcon} alt="" className="w-4 h-4 mr-2" />
                        <a style={{fontSize: 12}}  href={uploadedInfo.links.youtube} target="_blank" rel="noopener noreferrer">{uploadedInfo.links.youtube}</a>
                      </li>
                      <li className="flex items-center mb-2 mt-5 ml-1">
                        <img src={linksIcon} alt="" className="w-4 h-4 mr-2" />
                        <a style={{fontSize: 12}}  href={uploadedInfo.links.Email} target="_blank" rel="noopener noreferrer">{uploadedInfo.links.Email}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 p-4">
                <button
                  className="text-white flex font-bold bg-green-600 rounded-lg px-8 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2"
                  aria-current="page"
                  onClick={() => openModal()}
                >
                  <img src={shareIcon} alt="" className="w-6 h-6 mr-2" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      {showModal && (
        <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
          <div className="w-full max-w-md bg-white shadow-lg rounded-md p-24 relative">
            <div className="flex text-start pb-3">
              <h3 className="text-xl font-bold flex-1 text-[#333]">Share Account Details</h3>
            </div>
            <div>
              <div className="flex flex-col mt-6">
                <label htmlFor="contact-info" className="text-start mb-2 text-sm">Contact Number/Email ID</label>
                <input 
                  id="contact-info"
                  type="text" 
                  className="bg-slate-100 border border-gray-300 rounded-md py-1 px-5 text-gray-700 text-sm"
                  placeholder="Email/Contact"
                />
              </div>
            </div>
            <div className='flex mt-14 justify-between px-10' >
              <button className="bg-red-500 px-4 py-2 text-white rounded-2xl" onClick={() => closeModal()} >Cancel</button>
              <button className="bg-green-600 px-4 py-2 text-white rounded-2xl">Send</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ShareLinks;
