"use client"
import { useState } from "react";
import SideNav from "../dashboard/_components/SideNav"
import Header from "../dashboard/_components/Header";

function page() {
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
      <div className=" flex flex-col text-sm md:text-lg font-bold self-center h-screen w-screen justify-center items-center ">
        <h1>Developer : </h1><img className=" rounded-lg" src="/in-my-opinion-maybe-this-is-something-we-can-work-on.gif" alt="" />
      </div>
    </div>
  )
}

export default page
