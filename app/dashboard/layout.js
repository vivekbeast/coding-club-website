import React from 'react'
import SideNav from './_components/SideNav'
import Header from './_components/Header'

function layout({ children }) {
  return (
    <div className=' '>
      {/* <div className='w-64 fixed hidden md:block'>
        <SideNav />
      </div> */}
      <div className=' md:ml-64'>
        {/* <Header /> */}
        
      </div>
      <div className=''>
      {children}
      </div>
    </div>
  )
}

export default layout



