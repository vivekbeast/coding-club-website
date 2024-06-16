"use client"
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image';
import React from 'react'
import { ModeToggle } from './DarkLight';

function Header() {

  const {user} = useKindeBrowserClient();

  return (
    <div className='p-4 border-b-2 border-l-0 h-[80px] shadow-md flex justify-between items-center'>
      <div className=' flex flex-1 gap-11'>
        <div>
        <Image
        className=' h-full'
        src="/Eastpointlogo.png"
        width={300}
        height={40}
        alt='EastpointLogo'
        />
        </div>
        <div className='oswald-hwlo font-semibold  p-[4px] gap-3 flex text-indigo-950 '>
        <h1>
        Department Of CSE - (IoT & CSBT)
        </h1>
      </div>
      </div>
      
      <div className=' flex gap-2'>
        <Image
        src={user?.picture}
        width={38}
        height={35}
        alt='user'
        className=' rounded-full'
        />
        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}

export default Header
