import React from 'react';

const UnavailableFleets = ({ fleetsData, moveToAvailable }) => {
    return (
        <div className="overflow-hidden w-[vh-40px] mt-4">
            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                <thead className="bg-sky-200 dark:bg-gray-700">
                    <tr>
                        <th scope="col" className="p-4 tracking-wider text-gray-700 dark:text-gray-400">Fleet</th>
                        <th scope="col" className="p-4 tracking-wider text-gray-700 dark:text-gray-400">Fleet Number</th>
                        <th scope="col" className="p-4 tracking-wider text-gray-700 dark:text-gray-400">Move to Available</th>
                    </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {fleetsData.map((item) => (
                        <tr key={item.id}>
                            <td className="p-4 text-gray-900 dark:text-white">{item.fleet}</td>
                            <td className="p-4 text-gray-900 dark:text-white">{item.fleetNumber}</td>
                            <td className="p-4 text-gray-900 dark:text-white">
                                <button 
                                    className="px-4 py-2 rounded-full text-white font-medium bg-sky-400 hover:bg-sky-500 focus:outline-none focus:bg-sky-500"
                                    onClick={() => moveToAvailable(item.id)}
                                >
                                    Move to Available
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UnavailableFleets;
