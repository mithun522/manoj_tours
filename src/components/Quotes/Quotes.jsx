import React, { useEffect, useState } from "react";
import filterIcon from "../../assets/filter-icon.svg";
import Layout from "../Layout/Layout";
import TopLayer from "../shared/TopLayer";

const Quotes = () => {
  const [quotesData, setQuotesData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Filter By");
  const options = ["Customer", "Companies"];

  useEffect(() => {
    const fetchBookingsData = async () => {
      try {
        const response = await fetch("/Bookings.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setQuotesData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBookingsData();
  }, []);

  return (
    <Layout>
      <div className="max-w-screen mx-auto flex flex-col h-full">
        <div className="overflow-y-auto shadow-md sm:rounded-lg flex-grow">
          <TopLayer
            title={"Quotations"}
            options={options}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            showButton={false}
            routeForButton={"/quotes/customer-new-quotations"}
            icon={filterIcon}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {quotesData.map((booking, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 bg-gray-100"
              >
                <div className="flex justify-between">
                  <h2 className="font-medium text-xl mb-0.5">
                    {booking.customerName}
                  </h2>
                  <p className="text-gray-600 text-xl font-bold">
                    {booking.customerId}
                  </p>
                </div>
                <p className="text-gray-600 text-sm text-start">
                  {booking.travelTime}
                </p>
                <div className="justify-start py-10">
                  <div className="flex mb-1">
                    <p className="text-gray-600 mr-2 font-extrabold">
                      {booking.vehicleType}
                    </p>
                    <p className="text-gray-600 font-extrabold">
                      {booking.vehicleNumber}
                    </p>
                  </div>
                  <div className="flex">
                    <p className="text-gray-600 flex flex-col">
                      KM LIMIT{" "}
                      <span className="font-bold ml-[-40px]">
                        {booking.distance}
                      </span>
                    </p>
                    <p className="text-gray-600 flex flex-col ml-5">
                      Days
                      <span className="font-bold ml-[-10px]">
                        {booking.numberOfDays}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <p className="bg-green-700 w-48 h-10 text-white rounded-lg font-bold text-xl flex items-center justify-center whitespace-nowrap">
                    Rs. {booking.amount} /-
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Quotes;
