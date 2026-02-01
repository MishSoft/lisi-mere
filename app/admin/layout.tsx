import React from 'react'
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <Header/>
      <div className='flex '>
        <SideBar/>
        {children}
      </div>

      </div>
  )
}
