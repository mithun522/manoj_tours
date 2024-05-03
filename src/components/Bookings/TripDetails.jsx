import React from "react";
import CalenderIcon from "../../assets/calender-icon.svg";
import rightArrowIcon from "../../assets/right-arrow-icon.svg";
import rightLeftIcon from "../../assets/right-left-arrow-icon.svg";
import plusIcon from "../../assets/plus-circle-icon.svg";

const TripDetails = () => {
  return (
    <div className="grid grid-cols-2 divide-x p-4 relative">
        <div className="flex flex-col text-start mt-[-10px]">
            <div className="flex mb-6 flex-1">
                <div className="flex flex-col mr-12">
                    <span className="mb-1" style={{ fontSize: "14px" }}>
                    Start Date
                    </span>
                    <div className="flex items-center">
                        <span
                            className="bg-slate-100 px-2 py-0.5 mr-2 flex rounded-md"
                            style={{ fontSize: "12px" }}
                        >
                            15 FEB 2024
                            <img
                            src={CalenderIcon}
                            alt="Calendar"
                            className="w-4 h-4 ml-2"
                            />
                        </span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="mb-2" style={{ fontSize: "14px" }}>
                    End Date
                    </span>
                    <div className="flex items-center">
                        <span
                            className="bg-slate-100 px-2 py-0.5 mr-2 flex rounded-md"
                            style={{ fontSize: "12px" }}
                        >
                            15 FEB 2024
                            <img
                            src={CalenderIcon}
                            alt="Calendar"
                            className="w-4 h-4 ml-2 mt-0.5"
                            />
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col text-start">
                <div className="flex mb-6 flex-1">
                    <div className="flex flex-col mr-12">
                        <span className="mb-1" style={{ fontSize: "14px" }}>
                            Pickup Location
                        </span>
                        <div className="flex items-center">
                            <span
                            className="bg-slate-100 px-2 py-0.5 mr-2 flex rounded-md w-28"
                            style={{ fontSize: "12px" }}
                            >
                            Coimbatore
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="mb-2 whitespace-nowrap" style={{ fontSize: "14px" }}>
                            Drop Location
                        </span>
                        <div className="flex items-center">
                            <span
                            className="bg-slate-100 px-2 py-0.5 mr-2 flex rounded-md w-28"
                            style={{ fontSize: "12px" }}
                            >
                            Theni
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex mb-6">
                <div className="flex flex-col mr-12">
                    <span className="mb-2" style={{ fontSize: "14px" }}>
                        Trip
                    </span>
                    <div className="bg-slate-200 px-2 py-0.5 w-72 flex justify-between mb-1 accent-black">
                        <div>
                            <input type="radio" name="trip-type" id="single" />
                            <label className="ml-2" htmlFor="single">Single</label>
                        </div>
                        <img src={rightArrowIcon} alt="" className="w-4 h-4 mt-1" />
                    </div>
                    <div className="bg-slate-200 px-2 py-0.5 w-72 flex justify-between">
                        <div>
                            <input type="radio" name="trip-type" id="rounded" className="accent-black" />
                            <label className="ml-2" htmlFor="rounded">Rounded</label>
                        </div>
                        <img src={rightLeftIcon} alt="" className="w-4 h-4 mt-1" />
                    </div>
                </div>
            </div>

            <div className="flex mb-6 flex-1">
                <div className="flex flex-col mr-12">
                    <span className="mb-1" style={{ fontSize: "14px" }}>
                        TOTAL KM LIMIT
                    </span>
                    <div className="flex items-center">
                        <span
                        className="bg-slate-100 px-2 py-0.5 mr-2 flex rounded-md w-28"
                        style={{ fontSize: "12px" }}
                        >
                        106
                        </span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="mb-2" style={{ fontSize: "14px" }}>
                        TIME
                    </span>
                    <div className="flex items-center">
                        <span
                        className="bg-slate-100 px-2 py-0.5 mr-2 flex rounded-md w-28"
                        style={{ fontSize: "12px" }}
                        >
                        9:00 AM
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex-1 p-4 text-start mt-[-25px]">
            <div className="flex flex-col mr-12 mb-5">
                <span className="mb-1" style={{ fontSize: "14px" }}>
                Fleet Name
                </span>
                <div className="flex items-center">
                    <span
                        className="bg-slate-100 px-2 mr-2 flex rounded-md w-96 py-2"
                        style={{ fontSize: "14px" }}
                    >
                        Ertiga
                    </span>
                </div>
            </div>
            <div className="flex flex-col mr-12 mb-5">
                <span className="mb-1" style={{ fontSize: "14px" }}>
                Fleet Number
                </span>
                <div className="flex items-center">
                    <span
                        className="bg-slate-100 px-2 mr-2 flex rounded-md w-96 py-2"
                        style={{ fontSize: "14px" }}
                    >
                        TN37 CD4567 AC
                    </span>
                </div>
            </div>
            <div className="flex flex-col mr-12 mb-5">
                <span className="mb-1" style={{ fontSize: "14px" }}>
                Driver Name
                </span>
                <div className="flex items-center">
                    <span
                        className="bg-slate-100 px-2 mr-2 flex rounded-md w-96 py-2"
                        style={{ fontSize: "14px" }}
                    >
                        John Doe
                    </span>
                </div>
            </div>
            <div className="flex mb-6">
                <span className="mb-1 flex underline" style={{ fontSize: "14px" }}>
                    <img src={plusIcon} alt="Add Fleet" className="w-5 h-5 mr-2" />
                    Add Fleet
                </span>
                <span className="mb-1 ml-5 flex underline" style={{ fontSize: "14px" }}>
                    <img src={plusIcon} alt="Add Driver" className="w-5 h-5 mr-2" />
                    Add Driver
                </span>
            </div>
        </div>
        <div className="flex" >
            <button
            className="text-white font-bold absolute bottom-4 right-0 bg-sky-400 rounded-xl px-10 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2 mr-8"
            aria-current="page"
            >
                Next
            </button>
            <button
            className="text-white font-bold absolute bottom-4 right-32 bg-gray-400 rounded-xl px-5 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2 mr-8"
            aria-current="page"
            >
                Previous
            </button>
        </div>
    </div>
  );
};

export default TripDetails;
