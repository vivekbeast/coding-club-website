"use client"
import React, { useState } from 'react'
import NewProject from './NewProject'
import SideNav from '../dashboard/_components/SideNav'
import Header from '../dashboard/_components/Header'

const Page = () => {
  const [isSideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen(!isSideNavOpen);
  };
  return (
    <div>
        <div className='w-64 fixed top-0 left-0 right-0 z-50 md:block'>
        <SideNav isOpen={isSideNavOpen}/>
      </div>
      <div className='fixed top-0 left-0 right-0 z-40'>
      <Header isSideNavOpen={isSideNavOpen} toggleSideNav={toggleSideNav}/>
    </div>
    <div className='mt-[90px]'>
    <NewProject />
    </div>
    </div>
  )
}

export default Page
