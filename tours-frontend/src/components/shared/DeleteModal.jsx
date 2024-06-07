import React from 'react';

const DeleteModal = ({ title, children, onClose, onConfirm, confirmText, cancelText }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>X</button>
                </div>
                <div className="mt-4">{children}</div>
                <div className="mt-6 flex justify-end">
                    <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 mr-2 rounded" onClick={onConfirm}>{confirmText}</button>
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded" onClick={onClose}>{cancelText}</button>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;
