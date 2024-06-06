import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { customerData, tripDetailsData } = location.state;

  const initialPaymentDetails = {
    totalAmount: '',
    advanceAmount: '',
    paymentMode: '',
  };

  const [paymentDetails, setPaymentDetails] = useState(() => {
    // Retrieve from localStorage or set to initial values
    const savedPaymentDetails = localStorage.getItem("paymentDetails");
    return savedPaymentDetails ? JSON.parse(savedPaymentDetails) : initialPaymentDetails;
  });

  useEffect(() => {
    console.log(customerData, tripDetailsData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      localStorage.setItem("paymentDetails", JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const handlePreviewSend = () => {
    navigate("/bookings/new-booking-preview", {
      state: {
        customerData: customerData,
        tripDetailsData: tripDetailsData,
        paymentDetails: paymentDetails,
      },
    });
  };

  return (
    <div className="flex flex-col items-center text-start relative">
      <div className="mb-4 flex flex-col w-96">
        <span className="mb-2">Total Amount</span>
        <input
          type="number"
          className="text-gray-600 mb-5 bg-slate-200 w-96 px-5 py-1 rounded-md font-medium"
          name="totalAmount"
          value={paymentDetails.totalAmount}
          onChange={handleChange}
          placeholder="Enter Total Amount"
        />
      </div>
      <div className="mb-4 flex flex-col w-96">
        <span className="mb-2">Paid Advance</span>
        <input
          type="number"
          className="text-gray-600 mb-5 bg-slate-200 w-96 px-5 py-1 rounded-md font-medium"
          name="advanceAmount"
          value={paymentDetails.advanceAmount}
          onChange={handleChange}
          placeholder="Enter Paid Advance"
        />
      </div>
      <div className="mb-4 flex flex-col w-96">
        <span className="mb-2">Payment Mode</span>
        <select
          name="paymentMode"
          className="py-1.5 bg-slate-100"
          value={paymentDetails.paymentMode}
          onChange={handleChange}
        >
          <option value="">Select Payment Mode</option>
          {['Cash', 'Cheque', 'Credit Card', 'Debit Card', 'Net Banking', 'UPI'].map((mode, index) => (
            <option key={index} value={mode}>
              {mode}
            </option>
          ))}
        </select>
      </div>
      <div className="flex">
        <button
          className="text-white font-bold mt-8 bg-gray-500 hover:scale-105 ease-in-out duration-300 rounded-xl px-10 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2 mr-8"
          aria-current="page"
        >
          Previous
        </button>
        <button
          className="text-white font-bold mt-8 bg-green-600 hover:scale-105 ease-in-out duration-300 rounded-xl px-5 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2 mr-8"
          aria-current="page"
          onClick={handlePreviewSend}
        >
          Preview & Send
        </button>
      </div>
    </div>
  );
};

export default PaymentDetails;
