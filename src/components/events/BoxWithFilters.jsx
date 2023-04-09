import React, { useState } from "react";

const BoxWithFilters = () => {
  const [filters, setFilters] = useState([]);

  const toggleFilter = (filter) => {
    if (filters.includes(filter)) {
      setFilters(filters.filter((f) => f !== filter));
    } else {
      setFilters([...filters, filter]);
    }
  };

  return (
    <div className="flex flex-wrap justify-content-center w-[150vw] ml-10">
      <div className="flex flex-row space-x-4">
          <button
            className={`text-sm font-medium rounded-lg px-2 py-1 ${
              filters.includes("day1") ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
            }`}
            onClick={() => toggleFilter("day1")}
          >
            Day 1
          </button>
          <button
            className={`text-sm font-medium rounded-lg px-2 py-1 ${
              filters.includes("day2") ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
            }`}
            onClick={() => toggleFilter("day2")}
          >
            Day 2
          </button>
          <button
            className={`text-sm font-medium rounded-lg px-2 py-1 ${
              filters.includes("day3") ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
            }`}
            onClick={() => toggleFilter("day3")}
          >
            Day 3
          </button>
          <button
            className={`text-sm font-medium rounded-lg px-2 py-1 ${
              filters.includes("iot") ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
            }`}
            onClick={() => toggleFilter("iot")}
          >
            IoT
          </button>
          <button
            className={`text-sm font-medium rounded-lg px-2 py-1 ${
              filters.includes("cyber") ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
            }`}
            onClick={() => toggleFilter("cyber")}
          >
            Cyber
          </button>
          <button
            className={`text-sm font-medium rounded-lg px-2 py-1 ${
              filters.includes("drone") ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
            }`}
            onClick={() => toggleFilter("drone")}
          >
            Drone
          </button>
          <button
            className={`text-sm font-medium rounded-lg px-2 py-1 ${
              filters.includes("cse") ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
            }`}
            onClick={() => toggleFilter("cse")}
          >
            CSE
          </button>
          {/* Add more filters as needed */}
        </div>
    </div>
  );
};

export default BoxWithFilters;
