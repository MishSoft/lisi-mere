import React from 'react'
import { IoIosPeople } from "react-icons/io";

export default function ViewerCount({ thisMonth = 400, total = 2450 }) {
  const monthPercent = Math.min((thisMonth / total) * 100, 100);

  return (
    <div className="flex flex-col items-center p-6 border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition w-72 bg-white">

      <div className="flex items-center justify-center bg-blue-100 p-3 rounded-full shadow mb-4">
        <IoIosPeople className="w-8 h-8 text-blue-600" />
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Website Visitors
      </h2>

      <div className="flex justify-between w-full mb-2">
        <span className="text-gray-500 text-sm">This Month</span>
        <span className="font-bold text-gray-900">{thisMonth}</span>
      </div>

      <div className="flex justify-between w-full mb-4">
        <span className="text-gray-500 text-sm">Total</span>
        <span className="font-bold text-gray-900">{total}</span>
      </div>

      {/* mini progress bar for this month */}
      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-2">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${monthPercent}%` }}
        ></div>
      </div>

      <p className="text-gray-500 text-xs text-center">Percentage of total visitors this month</p>
    </div>
  )
}
