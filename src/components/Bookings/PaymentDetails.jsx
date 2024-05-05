import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentDetails = () => {

    const navigate = useNavigate();
    const paymentDetails = {
      totalAmount: 45000,
      advanceAmount: 8000,
      paymentMode: ['Cash', 'Cheque', 'Credit Card','Debit Card', 'Net Banking', 'UPI'],
    }

  return (
    <div className="flex flex-col items-center text-start relative">
      <div className="mb-4 flex flex-col w-96">
        <span className="mb-2">Total Amount</span>
        <input
          type="number"
          className="text-gray-600 mb-5 bg-slate-200 w-96 px-5 py-1 rounded-md font-medium"
          value={paymentDetails.totalAmount}
        />
      </div>
      <div className="mb-4 flex flex-col w-96">
        <span className="mb-2">Advance Amount</span>
        <input
          type="number"
          className="text-gray-600 mb-5 bg-slate-200 w-96 px-5 py-1 rounded-md font-medium"
          value={paymentDetails.advanceAmount}
        />
      </div>
      <div className="mb-4 flex flex-col w-96">
        <span className="mb-2">Payment Mode</span>
        <select name="" id="" className="py-1.5 bg-slate-100">
          {
            paymentDetails.paymentMode.map((paymentMode) => {
              return (
                <option className="py-1.5" value={paymentMode}>{paymentMode}</option>
              );
            })
          }
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
          onClick={() => navigate("/bookings/new-booking-preview")}
        >
          Preiview & Send
        </button>
      </div>
    </div>
  );
};

export default PaymentDetails;
