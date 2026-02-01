import React from "react"

export default function UploadForm() {
  return (
    <form className="p-6 w-2xl bg-white border border-gray-100 rounded-2xl flex flex-col gap-6 shadow-sm">

      <h2 className="text-center font-semibold text-2xl text-gray-800">
        დაამატე ახალი ივენთი
      </h2>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">
          ივენთის სურათი
        </label>
        <input
          type="file"
          className="block p-3 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">
          ივენთის სახელი
        </label>
        <input
          type="text"
          placeholder="მაგ: Front-end Meetup Tbilisi"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">
          ჩატარების თარიღი
        </label>
        <input
          type="date"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">
          აღწერა
        </label>
        <textarea
          rows={4}
          placeholder="ივენთის მოკლე აღწერა..."
          className="w-full resize-none border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-3">
        <input
          id="featured"
          type="checkbox"
          className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="featured" className="text-sm font-medium text-gray-700">
          რჩეული ივენთი (Featured)
        </label>
      </div>

      <button
        type="button"
        className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition"
      >
        დამატება
      </button>

    </form>
  )
}
