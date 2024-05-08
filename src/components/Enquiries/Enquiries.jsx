import React, { useEffect, useState } from "react";
import filterIcon from "../../assets/filter-icon.svg";
import Layout from "../Layout/Layout";
import TopLayer from "../shared/TopLayer";

const Enquiries = () => {
  const [enquiriesData, setEnquiriesDate] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Filter By");
  const options = ["Date"];

  useEffect(() => {
    const fetchEnquiriesData = async () => {
      try {
        const response = await fetch("/Enquiries.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setEnquiriesDate(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchEnquiriesData();
  }, []);

  return (
    <>
    <Layout>
      <div className="max-w-screen mx-auto flex flex-col h-full">
        <div className="overflow-y-auto shadow-md sm:rounded-lg flex-grow">
          <TopLayer
            title={selectedOption}
            options={options}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            showButton={false}
            icon={filterIcon}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 h-80">
            {enquiriesData.map((enquiry, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg px-8 py-4 bg-gray-100 text-start"
              >
                <h2 className="font-bold text-xl mb-0.5">
                  {enquiry.customerName}
                </h2>
                <p className="text-gray-600 text-sm text-start">
                  {enquiry.mobileNumber}
                </p>
                <p className="font-medium text-md mt-5">No of Passengers</p>
                <p className="text-sm font-bold">
                  {enquiry.numberOfPassengers}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
    </>
  );
};

export default Enquiries;
