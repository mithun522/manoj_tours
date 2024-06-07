import React from "react";

const LoadingSpinner = () => {
  return (
    <div class="flex items-center justify-center space-x-2 animate-pulse">
      <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
      <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
      <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
    </div>
  );
};

export default LoadingSpinner;
