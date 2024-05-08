import React from 'react';
import CustomDropdown from './CustomDropdown';
import { useNavigate } from 'react-router-dom';
import plusIcon from '../../assets/plus-circle-icon.svg';

const TopLayer = ({ title, showDropdown = true, options, selectedOption, setSelectedOption, showButton = true, buttonTitle = "", routeForButton, icon, isAddButton=false, addButtonRoute = '', addButtonText = '' }) => {

    const navigate = useNavigate();

    return (
        <div className="flex justify-between items-center p-4">
            <h1 className="text-lg font-bold" style={{fontSize: '28px'}} >{title}</h1>
            <div className="flex" >
                <div className='max-w-xs mx-auto mr-10'>
                    <div className="relative flex items-center w-full h-10 rounded-2xl focus-within:shadow-lg overflow-hidden">
                        <input
                            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 pl-5 bg-gray-100"
                            type="text"
                            id="search"
                            placeholder="Search something.." /> 
                        <div className="grid place-items-center h-full w-12 text-gray-900 bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
                {showButton && (
                    <button
                        className="text-white bg-sky-400 rounded-xl px-4 py-2 shadow-lg shadow-slate-900/20 shadow-2 shadow-r-[3px] -shadow-spread-2 mr-8"
                        aria-current="page"
                        onClick={() => navigate(`${routeForButton}`)}
                    >
                        {buttonTitle}
                    </button>
                )}
                {showDropdown && <CustomDropdown options={options} selectedOption={selectedOption} onSelect={setSelectedOption} icon={icon} />}
                {isAddButton && (
                    <div className="flex cursor-pointer" onClick={() => navigate(addButtonRoute)} >
                        <span className="ml-5 flex underline mt-2" style={{ fontSize: "14px" }}>
                            <img src={plusIcon} alt="Add Driver" className="w-5 h-5 mr-1" />
                            {addButtonText}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TopLayer;
