import React from 'react'
import { FaSignOutAlt } from "react-icons/fa";


export default function SignOut() {
  return (
    <button className="bg-red-500/10 text-red-500 group text-center font-semibold px-4 py-2 rounded-md hover:bg-red-500/30 duration-200 cursor-pointer transition">
      <FaSignOutAlt className="text-xl group-hover:rotate-180 duration-200" />
    </button>
  )
}
