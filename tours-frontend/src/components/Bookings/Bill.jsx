import React, { useRef } from "react";
import innovaImage from "../../assets/innova.png";
import leftSideImage from '../../assets/bill-right-side.png';
import rightSideImage from '../../assets/bill-left-side.png';
import logo from "../../assets/logo.png";
import { useCallback } from "react";
import { toPng } from 'html-to-image';

const Bill = () => {

  const ref = useRef(null)

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return
    }

    toPng(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'my-image-name.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])

  return (
    <div className="max-w-md justify-center items-center" > 
    <div ref={ref} className="bg-white rounded-lg shadow-lg mx-auto overflow-x-hidden relative">
      <div className="flex flex-col text-center mb-6"  >
        <div className="flex" >
          <img src={leftSideImage} alt="" className="h-28 w-28 absolute" />
          <img src={logo} alt="" className="w-48 h-16 ml-24 mt-10"/>
          <img src={rightSideImage} alt="" className="h-28 w-44 absolute -right-10"/>
        </div>
        <div className="mt-5 flex flex-col" >
          <h1 className="text-green-600 italic" style={{fontWeight: 700}} >Hey Vishnu</h1>
          <h1 className="text-green-600 italic" style={{fontWeight: 400}} >Congratulations your trip has been confirmed</h1>
        </div>
      </div>
      <hr className="w-full border-b-4 border-green-600" />
      <h1 className="text-start p-3 font-bold" >#MT234</h1>
      <div className="mb-8">
        <img src={innovaImage} alt="" className="h-28 w-56 ml-28" />
        <h2 className="text-gray-600 font-bold mt-5"  style={{fontSize: '18px'}}>Vehicle</h2>
        <div className="text-gray-700 text-sm mb-2">Innova crysta TN99 S1000 AC 12+1 Seat</div>
        <hr />
        <div className="text-gray-700 mt-5 font-bold" style={{fontSize: '18px'}}>Trip Dates</div>
        <div className="text-gray-700 text-sm">10th March @ 09:00 Am to 15th March 09:00 Pm</div>
        <hr />
        <div className="text-gray-700 mt-5 font-bold" style={{fontSize: '18px'}}>No of Days</div>
        <div className="text-gray-700 text-sm" >06 Days</div>
        <hr />
        <div className="text-gray-700 mt-5 font-bold" style={{fontSize: '18px'}}>Total KM Limit</div>
        <div className="text-gray-700 text-sm" >8000 KM</div>
        <hr />
        <div className="mt-10">
          <span className="font-bold text-2xl text-white bg-green-700 px-4 py-2 border rounded-xl border-gray-400 shadow-lg shadow-slate-900/20">
            TOTAL AMOUNT Rs. 45000 /-
          </span>
        </div>
        <div className="text-blue-600 underline mt-8 text-md font-bold">Use this link for payment</div>
      </div>
      <div className="px-10 py-2 rounded-lg text-start">
        <ul className="text-gray-700">
          <li className="list-disc text-sm">Above 800 Km Rates: Rs.25/- Per kms</li>
          <li className="list-disc text-sm">Above 11:30 Pm on the last day rates Rs 2500/-</li>
          <li className="list-disc text-sm">Parking, Tollgate: Included*</li>
          <li className="list-disc text-sm">Driver Bata : Inch</li>
          <li className="list-disc text-sm">Other states permit, Taxes(Kerala, Karnataka, Andhara)</li>
        </ul>
      </div>
      <div className="bg-gray-600 px-2 py-4 rounded-lg mt-8">
        <h2 className="text-white text-lg font-bold">TERMS AND CONDITIONS</h2>
        <ul className="text-white text-start px-6 py-2">
          <li className="list-disc mt-2 text-sm">Parking fee and tollgate charge applicable for additional visits to the spots already visited</li>
          <li className="list-disc mt-2 text-sm">Opening Km and closing Km - Our office to office (Coimbatore to Coimbatore)</li>
          <li className="list-disc mt-2 text-sm">Decent driver provided who can speak Tamil and English</li>
          <li className="list-disc mt-2 text-sm">Booking Advance Rs.500/- G pay 98947-89000</li>
          <li className="list-disc mt-2 text-sm">Balance payment settlement : Cash to driver</li>
          <li className="list-disc mt-2 text-sm">AC will not be Provided at Hill station and at Ghat Roads</li>
          <li className="list-disc mt-2 text-sm">The company is not responsible for any Road diversion</li>
        </ul>
      </div>
      <button  onClick={() => onButtonClick()}>click me</button>
    </div>
    </div>
  );
};

export default Bill;
