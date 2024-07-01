import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import calender from "../../assets/calender.png";
import fleetImage from "../../assets/fleet.png";
import Layout from "../Layout/Layout";
import axios from "axios";

const DashBoard = () => {
  const navigate = useNavigate();
  const [tripsDetails, setTripDetails] = useState({ todaysTrips: 0, upcomingTrips: 0, closedTrips: 0, totalTrips: 0 });

  useEffect(() => {
    const fetchTripCounts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/tripcounts');
        setTripDetails(response.data);
      } catch (error) {
        console.error("Error fetching trip counts:", error);
      }
    };

    fetchTripCounts();
  }, []);

  return (
    <Layout>
      <div className="max-w-screen p-8 text-start ">
        <h1 className="text-left mb-6" style={{ fontSize: '28px', fontWeight: 900 }}>OVERVIEW</h1>
        <div className="flex flex-col xl:flex-row 2xl:flex-row gap-4">
          <div
            className="w-xl h-auto md:h-60 overflow-hidden shadow-lg opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-r from-fuchsia-400 to-fuchsia-800 flex flex-col md:flex-row items-center justify-center md:justify-start cursor-pointer"
            onClick={() => navigate("bookings")}
          >
            <img src={calender} alt="" className="w-24 h-32 object-cover" />
            <div className="mt-10 md:mt-0 flex flex-col text-start ml-3">
              <p className="text-white font-medium text-lg md:text-xl whitespace-nowrap">
                TOTAL BOOKING
              </p>
              <p className="text-white font-black text-3xl md:text-4xl">{tripsDetails.totalTrips}</p>
            </div>

            <div className="p-4 flex flex-col justify-between h-48 xl:ml-2 lg:ml-8 md:ml-4 mr-10">
              <div className="flex flex-row w-36 justify-between">
                <p className="text-lg font-normal text-white">Today</p>
                <p className="text-xl font-extrabold text-white">{tripsDetails.todaysTrips}</p>
              </div>
              <div className="flex flex-row w-36 justify-between">
                <p className="text-lg font-normal text-white">Upcoming</p>
                <p className="text-xl font-extrabold text-white">{tripsDetails.upcomingTrips}</p>
              </div>
              <div className="flex flex-row w-36 justify-between">
                <p className="text-lg font-normal text-white">Closed</p>
                <p className="text-xl font-extrabold text-white">{tripsDetails.closedTrips}</p>
              </div>
            </div>
          </div>
          <div
            className="w-xl h-60 overflow-hidden shadow-lg opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-r from-orange-400 to-orange-800 flex flex-col md:flex-row items-center justify-center md:justify-start cursor-pointer"
            onClick={() => navigate("fleets")}
          >
            <img src={fleetImage} alt="" className="w-24 h-40 object-cover -mt-5 ml-2" />
            <div className="flex flex-col text-start ml-8">
              <p className="text-white font-medium whitespace-nowrap text-xl md:text-xl">
                TOTAL FLEET
              </p>
              <p className="text-white font-black text-3xl md:text-4xl">05</p>
            </div>
            <div className="p-4 flex flex-col justify-between h-48 xl:ml-2 lg:ml-2 md:ml-2 mr-10">
              <div className="flex flex-row w-36 justify-between">
                <p className="text-lg font-normal text-white">Today</p>
                <p className="text-xl font-extrabold text-white">10</p>
              </div>
              <div className="flex flex-row w-36 justify-between">
                <p className="text-lg font-normal text-white">Upcoming</p>
                <p className="text-xl font-extrabold text-white">20</p>
              </div>
              <div className="flex flex-row w-36 justify-between">
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
