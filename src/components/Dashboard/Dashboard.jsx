import React from "react";
import calender from "../../assets/calender.png"; // Replace with your image paths
import fleetImage from "../../assets/fleet.png"; // Replace with your image paths
import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {

  const navigate = useNavigate();

  return (
    <Layout>
      <div className="max-w-screen w-full p-8">
        <h1 className="text-2xl font-black text-left mb-6">OVERVIEW</h1>
        <div className="flex flex-col xl:flex-row 2xl:flex-row gap-4">
          <div className="w-1/2 md:w-[630px] h-auto md:h-60 shadow-lg opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-r from-fuchsia-400 to-fuchsia-800 flex flex-col md:flex-row items-center justify-center md:justify-start cursor-pointer " onClick={() => navigate("bookings")}>
            <img
              src={calender}
              alt=""
              className="w-[200px] h-[160px]"
              style={{ position: "absolute" }}
            />
            <div className="mt-10 md:mt-0 ml-40 flex flex-col items-center">
              <p className="text-white font-medium text-xl md:text-xl">
                TOTAL BOOKING
              </p>
              <p className="text-white font-black text-3xl md:text-4xl mr-24">
                05
              </p>
            </div>
            <div className="p-4 ml-10 flex flex-col justify-between h-48">
              <div className="mr-4 flex flex-row w-36 justify-between">
                <p className="text-lg font-normal text-white">Today</p>
                <p className="text-xl font-extrabold text-white">10</p>
              </div>
              <div className="mr-4 flex flex-row w-36 justify-between">
                <p className="text-lg font-normal text-white">Upcoming</p>
                <p className="text-xl font-extrabold text-white">20</p>
              </div>
              <div className="mr-4 flex flex-row w-36 justify-between">
                <p className="text-lg font-normal text-white">Closed</p>
                <p className="text-xl font-extrabold text-white">30</p>
              </div>
            </div>
          </div>
          <div className="w-[630-px] lg:w-[630px]  h-auto md:h-60 overflow-hidden shadow-lg opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-r from-orange-400 to-orange-800 flex flex-col md:flex-row items-center justify-center md:justify-start cursor-pointer" onClick={() => navigate("fleets")}>
            <img
              src={fleetImage}
              alt=""
              className="w-[200px] h-[200px] mt-[-45px]"
              style={{ position: "absolute" }}
            />
            <div className="mt-10 md:mt-0 ml-40 flex flex-col items-center">
              <p className="text-white font-medium text-xl md:text-xl">
                TOTAL FLEET
              </p>
              <p className="text-white font-black text-3xl md:text-4xl mr-24">
                05
              </p>
            </div>
            <div className="p-4 ml-10 flex flex-col justify-between h-48">
              <div className="mr-4 flex flex-row w-36 justify-between">
                <p className="text-lg font-normal text-white">Today</p>
                <p className="text-xl font-extrabold text-white">10</p>
              </div>
              <div className="mr-4 flex flex-row w-36 justify-between">
                <p className="text-lg font-normal text-white">Upcoming</p>
                <p className="text-xl font-extrabold text-white">20</p>
              </div>
              <div className="mr-4 flex flex-row w-36 justify-between">
                <p className="text-lg font-normal text-white">Closed</p>
                <p className="text-xl font-extrabold text-white">30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashBoard;
