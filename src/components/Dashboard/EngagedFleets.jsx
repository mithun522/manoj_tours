import React, { useState } from 'react';
import rightLeftIcon from '../../assets/right-left-arrow-icon.svg';
import rightArrowIcon from '../../assets/right-arrow-icon.svg';

const EngagedFleets = ({ engagedFleetsData }) => {

    const [fleetsData, setFleetsData] = useState();

    const handleStatusChange = (id, newStatus) => {
        setFleetsData((prevFleetsData) => {
          return prevFleetsData.map((item) => {
            if (item.id === id) {
              return { ...item, status: newStatus };
            }
            return item;
          });
        });
      };
    
    return (
<div className="overflow-hidden w-[vh-40px]">
                  <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                    <thead className="bg-sky-200 dark:bg-gray-700">
                      <tr>
                        <th
                          scope="col"
                          className="p-4 tracking-wider text-gray-700 dark:text-gray-400"
                        >
                          Fleet
                        </th>
                        <th
                          scope="col"
                          className="p-4 tracking-wider text-gray-700 dark:text-gray-400"
                        >
                          Fleet Number
                        </th>
                        <th
                          scope="col"
                          className="p-4 tracking-wider text-gray-700 dark:text-gray-400"
                        >
                          Customer Id
                        </th>
                        <th
                          scope="col"
                          className="p-4 tracking-wider text-gray-700 dark:text-gray-400"
                        >
                          Location
                        </th>
                        <th
                          scope="col"
                          className="p-4 tracking-wider text-gray-700 dark:text-gray-400"
                        >
                          Routine
                        </th>
                        <th
                          scope="col"
                          className="p-4 tracking-wider text-gray-700 dark:text-gray-400"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="p-4 tracking-wider text-gray-700 dark:text-gray-400"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="p-4 tracking-wider text-gray-700 dark:text-gray-400"
                        >
                          Edit
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                      {engagedFleetsData.map((item) => (
                        <tr key={item.id}>
                          <td className="p-4 text-gray-900 dark:text-white">
                            {item.fleet}
                          </td>
                          <td className="p-4 text-gray-900 dark:text-white">
                            {item.fleetNumber}
                          </td>
                          <td className="p-4 text-gray-900 dark:text-white">
                            {item.customerId}
                          </td>
                          <td className="p-4 text-gray-900 dark:text-white">
                            {item.fleetLocation.twoWay ? (
                              <>
                                <img
                                  src={rightLeftIcon}
                                  alt="right-left-icon"
                                  className="inline-block w-6 h-6"
                                />
                              </>
                            ) : (
                              <>
                                <img
                                  src={rightArrowIcon}
                                  alt="right-arrow-icon"
                                  className="inline-block w-6 h-6"
                                />
                              </>
                            )}
                          </td>
                          <td className="p-4 text-gray-900 dark:text-white">
                            {item.routine}
                          </td>
                          <td className="p-4 text-gray-900 dark:text-white">
                            {item.date}
                          </td>
                          <td className="p-4 text-gray-900 dark:text-white">
                            <select
                              value={item.status}
                              onChange={(e) =>
                                handleStatusChange(item.id, e.target.value)
                              }
                              className="border border-gray-300 rounded-md px-2 py-2 bg-white focus:outline-none focus:ring focus:ring-gray-300 w-48"
                            >
                              {engagedFleetsData
                                .reduce((statuses, item) => {
                                  if (!statuses.includes(item.status)) {
                                    statuses.push(item.status);
                                  }
                                  return statuses;
                                }, [])
                                .map((status) => (
                                  <option
                                    key={status}
                                    value={status}
                                    className={
                                      status === "Live"
                                        ? "text-green-600 font-medium"
                                        : status === "Cancel"
                                        ? "text-red-600 font-medium"
                                        : ""
                                    }
                                  >
                                    {status}
                                  </option>
                                ))}
                            </select>
                          </td>
                          <td className="p-4 text-gray-900 dark:text-white">
                            <button className="px-10 py-1.5 rounded-full text-white font-medium bg-sky-400">
                              Update
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
    );
}

export default EngagedFleets;
