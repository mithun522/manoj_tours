import React, { useState } from "react";
import Layout from "../Layout/Layout";
import CustomerQuotations from './CustomerQuotations';
import CompaniesQuotations from './CompaniesQuotations';

const NewQuotations = () => {
  const [activeTab, setActiveTab] = useState("customer"); // State to track active tab

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Layout>
        <div className="max-w-screen mx-auto">
          <div className="flex flex-col">
            <div className="overflow-y-auto shadow-md sm:rounded-lg h-[796px]">
              <div className="flex justify-between px-10 pt-2 mt-8">
                <h1 className="text-lg font-bold" style={{fontSize: '30px'}} >New Quotations</h1>
                <div className="flex">
                  <span>Customer ID: #MT234</span>
                </div>
              </div>
              <div className="flex justify-center mb-4">
                <div
                  onClick={() => handleTabChange("customer")}
                  className={`cursor-pointer mr-4 font-semibold w-56 py-2 ${
                    activeTab === "customer" ? "bg-black text-white rounded-lg" : "text-gray-500"
                  }`}
                >
                  Customer
                </div>
                <div
                  onClick={() => handleTabChange("companies")}
                  className={`cursor-pointer font-semibold ml-10 w-56 py-2 ${
                    activeTab === "companies" ? "bg-black text-white rounded-lg" : "text-gray-500"
                  }`}
                >
                 Companies
                </div>
              </div>
              <div className="flex justify-center bg-white">
                <div
                  className="border border-gray-300 rounded-lg p-4 h-96"
                  style={{width: '770px', height: '600px'}}
                >
                  {activeTab === "customer" && (
                    <CustomerQuotations />
                  )}
                  {activeTab === "companies" && (
                    <CompaniesQuotations />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NewQuotations;
