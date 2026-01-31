import React from 'react'
import SignOut from '../SignOut/SignOut'

export default function Header() {
  return (
    <div className=" p-4 flex items-center border-b border-gray-100 bg-white/30 backdrop-blur-xl fixed w-full top-0 left-0 justify-between">
      <h1 className="text-2xl font-bold">Lisi Mere Admin</h1>

     <div className='flex items-center gap-5'>
        <SignOut />
     </div>
    </div>
  )
}
