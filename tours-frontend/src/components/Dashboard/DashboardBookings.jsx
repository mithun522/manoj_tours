import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaArrowRightArrowLeft, FaArrowRightLong } from "react-icons/fa6";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { TiCancelOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import { BOOKINGS } from "../shared/Api";
import TopLayer from "../shared/TopLayer";

const DashboardBookings = () => {
  const [bookingsData, setBookingsData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Bookings");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const options = [
    "Total Bookings",
    "Upcoming Bookings",
    "Closed Bookings",
    "Cancelled Bookings",
  ];
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookingsData = async () => {
      try {
        const response = await axios.get(
          `${BOOKINGS}?page=${currentPage}&limit=${recordsPerPage}`
        );
        if (response.status === 200) {
          setBookingsData(response.data.data);
          setTotalPages(response.data.totalPages);
        } else {
          toast.error("Failed to fetch Bookings data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBookingsData();
  }, [currentPage, recordsPerPage]);

  const today = new Date().toISOString().slice(0, 10);

  const handleEditClick = (bookingId) => {
    const booking = bookingsData.find((booking) => booking.id === bookingId);
    navigate("/dashboard/edit-bookings", { state: { booking } });
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleRecordsPerPageChange = (event) => {
    setRecordsPerPage(parseInt(event.target.value));
    setCurrentPage(1); // Reset to first page on records per page change
  };

  return (
    <Layout>
      <div className="max-w-screen mx-auto">
        <div className="flex flex-col">
          <div className="shadow-md sm:rounded-lg flex-grow flex flex-col">
            <div className="inline-block align-middle">
              <TopLayer
                title={selectedOption}
                options={options}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                showButton={false}
              />
              <div className="overflow-auto min-h-[70vh] max-h-[70vh]">
                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                  <thead className="bg-sky-200 dark:bg-gray-700">
                    <tr>
                      <th
                        scope="col"
                        className="p-4 text-sm lg:text-md tracking-wider text-gray-700 dark:text-gray-400"
                      >
                        Customer Name
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-sm lg:text-md tracking-wider text-gray-700 dark:text-gray-400"
                      >
                        Customer ID
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-sm lg:text-md tracking-wider text-gray-700 dark:text-gray-400"
                      >
                        Location
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-sm lg:text-md tracking-wider text-gray-700 dark:text-gray-400"
                      >
                        Duration
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-sm lg:text-md tracking-wider text-gray-700 dark:text-gray-400"
                      >
                        No of People
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-sm lg:text-md tracking-wider text-gray-700 dark:text-gray-400"
                      >
                        Fleet
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-sm lg:text-md tracking-wider text-green-500 dark:text-green-500"
                      >
                        Paid
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-sm lg:text-md tracking-wider text-red-600 dark:text-red-600"
                      >
                        Unpaid
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-sm lg:text-md tracking-wider text-gray-700 dark:text-gray-700"
                      >
                        Total Amount
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-sm lg:text-md tracking-wider text-gray-700 dark:text-gray-700"
                      >
                        Edit
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {bookingsData &&
                      bookingsData.map((booking) => (
                        <tr
                          key={booking.id}
                          className={`dark:text-white ${
                            booking.duration === today
                              ? "text-green-600 dark:text-green-700"
                              : ""
                          } ${
                            booking.raidType === "cancelled"
                              ? "text-gray-400"
                              : ""
                          }`}
                        >
                          <td className="p-4 text-sm font-bold">
                            {booking.name}
                          </td>
                          <td className="p-4 text-sm font-bold">
                            {booking.customerId}
                          </td>
                          <td className="p-4 text-sm font-bold">
                            {booking.tripType === "Rounded" ? (
                              <>
                                <div className="flex flex-col items-center">
                                  <span>{booking.pickupLocation}</span>
                                  <FaArrowRightArrowLeft
                                    alt="right-left-icon"
                                    className="w-4 h-4"
                                  />
                                  <span>{booking.dropLocation}</span>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="flex flex-col items-center">
                                  <span>{booking.pickupLocation}</span>
                                  <FaArrowRightLong
                                    alt="right-arrow-icon"
                                    className="w-4 h-4"
                                  />
                                  <span>{booking.dropLocation}</span>
                                </div>
                              </>
                            )}
                          </td>
                          <td className="p-4 text-sm font-bold">
                            {booking.duration === today &&
                            booking.raidType !== "cancelled" ? (
                              <span className="text-red-500">Today</span>
                            ) : (
                              <span
                                className={`${
                                  booking.duration > today
                                    ? "text-green-500"
                                    : ""
                                }`}
                              >
                                {booking.duration}
                              </span>
                            )}
                            {booking.duration === today &&
                              booking.raidType !== "cancelled" && (
                                <div className="text-xs font-bold text-gray-600">
                                  {booking.duration}
                                </div>
                              )}
                          </td>
                          <td className="p-4 text-sm font-bold">
                            {booking.noOfPeople}
                          </td>
                          <td className="p-4 text-sm font-bold">
                            {booking.fleetName}
                          </td>
                          <td
                            className={`p-4 text-sm font-bold ${
                              booking.duration > today ? "text-green-500" : ""
                            }`}
                          >
                            {booking.advanceAmount === "0"
                              ? "-"
                              : booking.advanceAmount}
                          </td>
                          <td className="p-4 text-sm font-bold text-red-600">
                            {booking.advanceAmount - booking.totalAmount === "0"
                              ? "-"
                              : booking.advanceAmount - booking.totalAmount}
                          </td>
                          <td className="p-4 text-sm font-bold">
                            {booking.totalAmount}
                          </td>
                          <td
                            className={`p-4 text-sm font-bold ${
                              booking.raidType === "cancelled"
                                ? "text-gray-300"
                                : ""
                            }`}
                          >
                            {booking.raidType === "today" ? (
                              <IoCheckmarkCircleSharp className="w-5 cursor-pointer ml-2" />
                            ) : (
                              <button
                                onClick={() => handleEditClick(booking.id)}
                                className="text-blue-600 dark:text-blue-500 hover:underline"
                              >
                                <div>
                                  {booking.raidType === "cancelled" ? (
                                    <TiCancelOutline className="cursor-pointer w-7" />
                                  ) : (
                                    <MdEdit className="cursor-pointer w-5" />
                                  )}
                                </div>
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800">
              <div className="flex justify-between items-center p-4">
                <div>
                  <label htmlFor="recordsPerPage" className="mr-2 text-sm">
                    Records per page:
                  </label>
                  <select
                    id="recordsPerPage"
                    value={recordsPerPage}
                    onChange={handleRecordsPerPageChange}
                    className="border rounded p-1 w-20 bg-gray-300 text-center"
                  >
                    <option className="p-1 w-20 bg-gray-300" value={10}>10</option>
                    <option className="p-1 w-20 bg-gray-300" value={20}>20</option>
                    <option className="p-1 w-20 bg-gray-300" value={50}>50</option>
                  </select>
                </div>
              </div>
              <span className="text-sm">
                Page {currentPage} of {totalPages}
              </span>
              <div className="flex">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 border rounded-lg bg-gray-300 mr-2 text-sm"
                >
                  Previous
                </button>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 border rounded-lg bg-gray-300 ml-2 flex text-sm"
                >
                  <span>Next</span>
                  <FaArrowRightLong style={{ marginTop: "2px", marginLeft: "8px" }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardBookings;
