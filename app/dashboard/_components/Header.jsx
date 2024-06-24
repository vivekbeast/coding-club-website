"use client"
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image';
import React from 'react'
import { ModeToggle } from './DarkLight';
import { MenuIcon, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

function Header({ isSideNavOpen, toggleSideNav }) {

  const {user} = useKindeBrowserClient();
  const router = useRouter();


  return (
    <div className=' h-[90px] mix-blend-difference bg-white border-b-2 z-30 md:ml-64 md:p-5 p-3 pr-2 md:pr-10 flex justify-between items-center'>
      <div className='  flex flex-1 md:gap-11 justify-between md:justify-normal'>
        <div className=' justify-center flex'>
        <Image
        className='LOGOA h-full self-center'
        src="/Eastpointlogo.png"
        width={300}
        height={40}
        alt='EastpointLogo'
        />
        </div>
        <div className='oswald-hwlo font-semibold text-center justify-center md:p-[4px] md:gap-3 flex text-indigo-950 '>
        <button onClick={toggleSideNav} className='md:hidden self-center pl-auto'>
            {isSideNavOpen ? (
              <X className='h-[32px] font-semibold w-[32px] self-center' />
            ) : (
              <div className=' flex gap-3 text-center'>
                <h2 className=' text-sm self-center'>CSE (IoT & CSBT)</h2>
                <MenuIcon className='h-[32px] font-semibold w-[32px] self-center' />
              </div>
              
            )}
          </button>
        <h1 className=' hidden md:block'>
        Department Of CSE (IoT & CSBT)
        </h1>
      </div>
      </div>
      <div className=' gap-3 hidden md:flex'>
        <div>
          <ModeToggle />
        </div>
        <Image
        src={user?.picture}
        width={38}
        height={35}
        alt='user'
        className=' rounded-full hidden md:flex'
        />
      </div>
    </div>
  )
}

export default Header
