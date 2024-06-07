import React, { useEffect, useState } from "react";
import filterIcon from "../../assets/filter-icon.svg";
import Layout from "../Layout/Layout";
import TopLayer from "../shared/TopLayer";
import AddEnquiries from "./AddEnquiries";
import axios from "axios";
import { ENQUIRY } from "../shared/Api";
import toast from "react-hot-toast";

const Enquiries = () => {
  const [enquiriesData, setEnquiriesData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Filter By");
  const [showAddEnquiryModal, setShowAddEnquiryModal] = useState(false);
  const options = ["Date"];

  const fetchEnquiriesData = async () => {
    try {
      const response = await axios.get(ENQUIRY);
      if (response.status === 200) {
        setEnquiriesData(response.data);
      } else {
        toast.error("Error while fetching Enquiries");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchEnquiriesData();
  }, []);

  const handleAddEnquiry = (newEnquiry) => {
    setEnquiriesData([...enquiriesData, newEnquiry]);
  };

  return (
    <Layout>
      <div className="max-w-screen mx-auto flex flex-col h-full">
        <div className="overflow-y-auto shadow-md sm:rounded-lg flex-grow">
          <TopLayer
            title={"Enquiries"}
            options={options}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            showButton={false}
            icon={filterIcon}
            isAddButton={true}
            addButtonText={"Add Enquiry"}
            onAddButtonClick={() => setShowAddEnquiryModal(true)}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 h-80">
            {enquiriesData.map((enquiry, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg px-8 py-4 bg-slate-100 text-start"
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
      {showAddEnquiryModal && (
        <AddEnquiries
          onClose={() => setShowAddEnquiryModal(false)}
          onAddEnquiry={handleAddEnquiry}
        />
      )}
    </Layout>
  );
};

export default Enquiries;
