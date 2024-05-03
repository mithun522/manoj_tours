import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import rightLeftIcon from '../../assets/right-left-arrow-icon.svg';
import rightArrowIcon from '../../assets/right-arrow-icon.svg';
import { useNavigate } from 'react-router-dom';
import CustomAlert from '../shared/CustomAlert';

const EditBookings = () => {
  const [editedBookings, setEditedBookings] = useState([]);
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const list = [...editedBookings];
    list[index][name] = value;
    setEditedBookings(list);
  };

  const bookingsData =     {
    "id": 1,
    "customerName": "John Doe",
    "customerId": "C12345",
    "location": {
      "from": "coimbatore",
      "to": "ooty",
      "twoWay": true
    },
    "duration": "2024-05-02",
    "numberOfPeople": 2,
    "fleet": "Standard",
    "paid": "$500",
    "unpaid": "$0",
    "raidType": "alive"
  }

  useEffect(() => {
    setShowAlert(showAlert); // Update showAlert state based on the close prop
  }, [showAlert]);
  

  // TODO: use thie when the actual api is available
//   useEffect(() => {
//     const fetchBookingsData = async () => {
//       try {
//         const response = await fetch("/Bookings.json");
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const data = await response.json();
//         setBookingsData(data[0]);
//         console.log(bookingsData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchBookingsData();
//   }, []);

const handleSave = () => {
  setShowAlert(!showAlert);  
};

  return (
    <Layout>
      <div className="max-w-screen mx-auto">
        <div className="flex flex-col">
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="flex justify-between items-center p-4">
                <h1 className="text-lg font-bold">EDIT TOTAL BOOKING</h1>
                <div className="flex">
                    <button className='bg-red-600 hover:bg-red-700 px-6 py-2.5 rounded-2xl font-bold text-white shadow-md' onClick={() => navigate("/dashboard/bookings")} >Cancel Ride</button>
                </div>
              </div>
              <div className="overflow-hidden ">
                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                  <thead className="bg-sky-200 dark:bg-gray-700">
                    <tr>
                      <th scope="col" className="p-4 tracking-wider text-gray-700 dark:text-gray-400">Customer Name</th>
                      <th scope="col" className="p-4 tracking-wider text-gray-700 dark:text-gray-400">Customer ID</th>
                      <th scope="col" className="p-4 tracking-wider text-gray-700 dark:text-gray-400">Location</th>
                      <th scope="col" className="p-4 tracking-wider text-gray-700 dark:text-gray-400">Duration</th>
                      <th scope="col" className="p-4 tracking-wider text-gray-700 dark:text-gray-400">No of People</th>
                      <th scope="col" className="p-4 tracking-wider text-gray-700 dark:text-gray-400">Fleet</th>
                      <th scope="col" className="p-4 tracking-wider text-gray-700 dark:text-gray-400">Paid</th>
                      <th scope="col" className="p-4 tracking-wider text-gray-700 dark:text-gray-400">Unpaid</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                      <tr key={bookingsData.id}>
                        <td className='p-4 text-sm font-medium text-gray-900 dark:text-white'>{bookingsData.customerName}</td>
                        <td className='p-4 text-sm font-medium text-gray-900 dark:text-white'>{bookingsData.customerId}</td>
                        <td className='p-4 text-sm font-medium text-gray-900 dark:text-white'>
                          {bookingsData.location.twoWay ? (
                            <>
                              {bookingsData.location.from} <img src={rightLeftIcon} alt="right-left-icon" className="inline-block w-4 h-4" /> {bookingsData.location.to}
                            </>
                          ) : (
                            <>
                              {bookingsData.location.from} <img src={rightArrowIcon} alt="right-arrow-icon" className="inline-block w-4 h-4" /> {bookingsData.location.to}
                            </>
                          )}
                        </td>
                        <td className="p-4 text-md font-medium dark:text-white">{bookingsData.duration}</td>
                        <td className='p-4 text-md font-medium text-gray-900 dark:text-white'>{bookingsData.numberOfPeople}</td>
                        <td className='p-4 text-md font-medium text-gray-900 dark:text-white'>
                          <input
                            type="text"
                            name="fleet"
                            value={editedBookings[bookingsData.id]?.fleet || bookingsData.fleet}
                            onChange={(e) => handleInputChange(bookingsData.id, e)}
                            className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring focus:ring-gray-400 w-48"
                          />
                        </td>
                        <td className='p-4 text-md font-medium text-gray-900 dark:text-white'>
                          <input
                            type="text"
                            name="paid"
                            value={editedBookings[bookingsData.id]?.paid || bookingsData.paid}
                            onChange={(e) => handleInputChange(bookingsData.id, e)}
                            className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring focus:ring-gray-400 w-48"
                          />
                        </td>
                        <td className='p-4 text-md font-medium text-gray-900 dark:text-white'>
                          <input
                            type="text"
                            name="unpaid"
                            value={editedBookings[bookingsData.id]?.unpaid || bookingsData.unpaid}
                            onChange={(e) => handleInputChange(bookingsData.id, e)}
                            className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring focus:ring-gray-400 w-48"
                          />
                        </td>
                      </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex justify-end my-4 pt-16 pr-16 pb-10">
                <button onClick={handleSave} className="bg-sky-400 text-white px-4 py-2 rounded-full mr-4 hover:bg-sky-500 focus:outline-none focus:ring focus:ring-blue-400 w-48">Save Changes</button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-full mr-4 hover:bg-green-700 focus:outline-none focus:ring focus:ring-blue-400 w-48">Mark as saved</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showAlert && <CustomAlert close={() => setShowAlert(false)} />}
    </Layout>
  );
};

export default EditBookings;
