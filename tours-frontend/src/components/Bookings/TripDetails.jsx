import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import locationIcon from "../../assets/location-icon-filled.svg";
import rightArrowIcon from "../../assets/right-arrow-icon.svg";
import rightLeftIcon from "../../assets/right-left-arrow-icon.svg";
import { FLEET } from "../shared/Api";
import CustomDropdown from "../shared/CustomDropdown";

const TripDetails = () => {
  const [tripDetailsData, setTripDetailsData] = useState(() => {
    const storedData = localStorage.getItem("tripDetailsData");
    return storedData
      ? JSON.parse(storedData)
      : {
          startDate: "",
          endDate: "",
          fleetName: "",
          fleetNumber: "",
          fleetImage: "",
          pickupLocation: "",
          dropLocation: "",
          timing: "",
          estimatedKms: "",
          estimatedAmount: "",
          tripType: "",
        };
  });
  const [fleetsData, setFleetsData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { customerData } = location.state || {};

  useEffect(() => {
    localStorage.setItem("tripDetailsData", JSON.stringify(tripDetailsData));

    const fetchFleetsData = async () => {
      const response = await axios.get(FLEET);
      setFleetsData(response.data);
    };

    fetchFleetsData();
  }, [tripDetailsData]);

  const handleChange = ({ target: { name, value, type } }) => {
    setTripDetailsData((prevData) => ({
      ...prevData,
      [name]: type === "radio" ? value : value,
    }));
  };

  const handleNext = () => {
    const { startDate, endDate } = tripDetailsData;

    if (Object.values(tripDetailsData).every((value) => value.trim() !== "") && new Date(endDate) > new Date(startDate)) {
      navigate("/bookings/new-bookings/payment-details", {
        state: { tripDetailsData, customerData },
      });
    } else {
      toast.error("Please fill in all fields correctly.");
    }
  };

  const handleSelectFleet = (fleetNumber) => {
    const selectedFleet = fleetsData.find((fleet) => fleet.fleetNumber === fleetNumber);
    setTripDetailsData((prevData) => ({
      ...prevData,
      fleetNumber,
      fleetName: selectedFleet?.fleetName || "",
      fleetImage: selectedFleet.fleetImage,
    }));
  };

  const options = fleetsData.map((fleet) => fleet.fleetNumber);
  const minEndDate = tripDetailsData.startDate ? new Date(tripDetailsData.startDate).toISOString().split("T")[0] : null;

  return (
    <div className="grid md:grid-cols-2 divide-x p-4 px-10 relative">
      <div className="flex flex-col mt-[-10px]">
        <div className="flex items-center" >
          <DateInput label="Start Date" name="startDate" value={tripDetailsData.startDate} onChange={handleChange} />
          <DateInput label="End Date" name="endDate" value={tripDetailsData.endDate} min={minEndDate} onChange={handleChange} />
        </div>

        <div className="flex items-center" >
          <LocationInput label="Pickup Location" name="pickupLocation" value={tripDetailsData.pickupLocation} onChange={handleChange} />
          <LocationInput label="Drop Location" name="dropLocation" value={tripDetailsData.dropLocation} onChange={handleChange} />
        </div>

        <TripTypeRadio value={tripDetailsData.tripType} onChange={handleChange} />

        <div className="flex items-center" >
          <Input label="TOTAL KM LIMIT" name="estimatedKms" value={tripDetailsData.estimatedKms} onChange={handleChange} type="number" />
          <Input label="TIME" name="timing" value={tripDetailsData.timing} onChange={handleChange} type="time" />
        </div>
      </div>

      <div className="p-4 mt-[-25px]">
        <div className="mb-4 w-full" >
          <CustomDropdown label="Fleet Number" options={options} selectedOption={tripDetailsData.fleetNumber ? tripDetailsData.fleetNumber : 'Select a Fleet'} onSelect={handleSelectFleet} />
        </div>
        <Input label="Fleet Name" name="fleetName" value={tripDetailsData.fleetName} onChange={handleChange} disabled />
        <Input label="Estimated Amount" name="estimatedAmount" value={tripDetailsData.estimatedAmount} onChange={handleChange} type="number" />
      </div>

      <div className="flex absolute bottom-8 right-5">
        <Button className="mr-5 bg-sky-400" onClick={handleNext}>Next</Button>
        <Button onClick={() => navigate("/bookings/new-bookings/personal-info")} className="bg-gray-400">Previous</Button>
      </div>
    </div>
  );
};

const DateInput = ({ label, name, value, onChange, min }) => (
  <div className="flex mb-6">
    <div className="flex flex-col mr-12">
      <span className="mb-1 text-left" style={{ fontSize: "14px" }}>{label}</span>
      <input
        className="bg-slate-100 px-2 py-2 mr-2 rounded-md w-32"
        style={{ fontSize: "12px" }}
        name={name}
        value={value}
        onChange={onChange}
        type="date"
        min={min}
        placeholder={label}
      />
    </div>
  </div>
);

const LocationInput = ({ label, name, value, onChange }) => (
  <div className="flex mb-3">
    <div className="flex flex-col mr-12">
      <span className="mb-1 text-left" style={{ fontSize: "14px" }}>{label}</span>
      <div className="flex items-center relative">
        <input
          className="bg-slate-100 px-2 py-2 mr-2 rounded-md w-32"
          style={{ fontSize: "12px" }}
          name={name}
          value={value}
          onChange={onChange}
          type="text"
          placeholder={label}
        />
        <img src={locationIcon} alt="" className="w-4 h-4 absolute right-3" />
      </div>
    </div>
  </div>
);

const TripTypeRadio = ({ value, onChange }) => (
  <div className="flex mb-6">
    <div className="flex flex-col mr-12">
      <span className="mb-1 text-left" style={{ fontSize: "14px" }}>Trip</span>
      <div className="bg-slate-200 px-2 py-0.5 w-72 flex justify-between mb-1 accent-black">
        <div>
          <input type="radio" name="tripType" id="single" value="single" checked={value === "single"} onChange={onChange} />
          <label className="ml-2" htmlFor="single">Single</label>
        </div>
        <img src={rightArrowIcon} alt="" className="w-4 h-4 mt-1" />
      </div>
      <div className="bg-slate-200 px-2 py-0.5 w-72 flex justify-between">
        <div>
          <input type="radio" name="tripType" id="rounded" value="rounded" checked={value === "rounded"} onChange={onChange} />
          <label className="ml-2" htmlFor="rounded">Rounded</label>
        </div>
        <img src={rightLeftIcon} alt="" className="w-4 h-4 mt-1" />
      </div>
    </div>
  </div>
);

const Input = ({ label, name, value, onChange, type = "text", disabled = false }) => (
  <div className="flex flex-col mr-12 mb-5">
    <span className="flex text-left mb-1" style={{ fontSize: "14px" }}>{label}</span>
    <input
      className={`bg-slate-100 px-2 py-2 mr-2 rounded-md ${disabled ? 'bg-gray-200' : ''}`}
      style={{ fontSize: "14px" }}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={label}
      disabled={disabled}
    />
  </div>
);

const Button = ({ children, onClick, className }) => (
  <button
    className={`text-white font-bold hover:scale-105 ease-in-out duration-300 rounded-xl px-10 py-2 shadow-lg shadow-slate-900/20 ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default TripDetails;
