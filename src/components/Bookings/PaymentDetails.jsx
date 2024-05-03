import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentDetails = () => {

    const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center text-start relative">
      <div className="mb-4 flex flex-col w-96">
        <span className="mb-2">Total Amount</span>
        <span className="bg-slate-100 w-96 px-2 py-1.5">45000</span>
      </div>
      <div className="mb-4 flex flex-col w-96">
        <span className="mb-2">Advance Amount</span>
        <span className="bg-slate-100 w-96 px-2 py-1.5">45000</span>
      </div>
      <div className="mb-4 flex flex-col w-96">
        <span className="mb-2">Payment Mode</span>
        <select name="" id="" className="py-1.5 bg-slate-100">
            <option value="Cash">Cash</option>
            <option value="Cheque">Cheque</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Net Banking">Net Banking</option>
            <option value="UPI">UPI</option>
        </select>
      </div>
      <div className="flex">
        <button
          className="text-white font-bold mt-8 bg-gray-500 rounded-xl px-10 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2 mr-8"
          aria-current="page"
        >
          Previous
        </button>
        <button
          className="text-white font-bold mt-8 bg-green-600 rounded-xl px-5 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2 mr-8"
          aria-current="page"
          onClick={() => navigate("/bookings/new-booking-preview")}
        >
          Preiview & Send
        </button>
      </div>
    </div>
  );
};

export default PaymentDetails;
