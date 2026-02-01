import React from "react"
import { FaStar } from "react-icons/fa"
import { MdDelete, MdEdit } from "react-icons/md"

export default function EventTable() {
  return (
    <section className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">

      {/* Header */}
      <div className="p-5 border-b border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800">
          განთავსებული ივენთები
        </h2>
        <p className="text-sm text-gray-500">
          აქ ჩანს ყველა დამატებული პოსტი
        </p>
      </div>

      {/* Table */}
      <table className="w-full border-collapse">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">
              ივენთი
            </th>
            <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">
              თარიღი
            </th>
            <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">
              სტატუსი
            </th>
            <th className="text-right px-4 py-3 text-sm font-medium text-gray-600">
              ქმედებები
            </th>
          </tr>
        </thead>

        <tbody>
          {/* Row */}
          <tr className="border-t hover:bg-gray-50 transition">
            <td className="px-4 py-3 font-medium text-gray-800">
              Front-end Meetup Tbilisi
            </td>

            <td className="px-4 py-3 text-gray-600">
              2025-03-12
            </td>

            <td className="px-4 py-3">
              <span className="inline-flex items-center gap-1 text-sm text-yellow-600 font-medium">
                <FaStar className="text-yellow-500" />
                რჩეული
              </span>
            </td>

            <td className="px-4 py-3">
              <div className="flex justify-end gap-3 text-xl">
                <button className="text-blue-500 hover:text-blue-600">
                  <MdEdit />
                </button>
                <button className="text-red-500 hover:text-red-600">
                  <MdDelete />
                </button>
              </div>
            </td>
          </tr>

          {/* Row 2 */}
          <tr className="border-t hover:bg-gray-50 transition">
            <td className="px-4 py-3 font-medium text-gray-800">
              JavaScript Workshop
            </td>

            <td className="px-4 py-3 text-gray-600">
              2025-04-01
            </td>

            <td className="px-4 py-3">
              <span className="text-sm text-gray-500">
                ჩვეულებრივი
              </span>
            </td>

            <td className="px-4 py-3">
              <div className="flex justify-end gap-3 text-xl">
                <button className="text-blue-500 hover:text-blue-600">
                  <MdEdit />
                </button>
                <button className="text-red-500 hover:text-red-600">
                  <MdDelete />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
