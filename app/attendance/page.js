"use client"
import React, { useState } from 'react';
import SideNav from '../dashboard/_components/SideNav';
import Talk from './talk';
import Header from '../dashboard/_components/Header';

function AttenDance() {
  const [isSideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen(!isSideNavOpen);
  };
  return (
    <div className="h-screen">
      <div className='w-64 fixed top-0 left-0 right-0 z-50 md:block'>
        <SideNav isOpen={isSideNavOpen}/>
      </div>
      <div className='fixed top-0 left-0 right-0 z-40'>
      <Header isSideNavOpen={isSideNavOpen} toggleSideNav={toggleSideNav}/>
    </div>
      <Talk />
    </div>
  );
}

export default AttenDance;
