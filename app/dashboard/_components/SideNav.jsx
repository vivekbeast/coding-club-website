"use client"
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { GraduationCap, Hand, LayoutIcon, LogOutIcon, PenBox, Settings } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

function SideNav({ isOpen }) {
  const { user } = useKindeBrowserClient();
  const [activeMenu, setActiveMenu] = useState(null);
  const router = useRouter();

  const menuList = [
    {
      id: 1,
      name: 'Dashboard',
      icon: LayoutIcon,
      path: '/dashboard'
    },
    {
      id: 2,
      name: 'Create Project',
      icon: PenBox,
      path: '/create'
    },
    {
      id: 3,
      name: 'Projects',
      icon: GraduationCap,
      path: '/students'
    },
    {
      id: 4,
      name: 'Attendance',
      icon: Hand,
      path: '/attendance'
    },
    {
      id: 5,
      name: 'Settings',
      icon: Settings,
      path: '/settings'
    }
  ];

  useEffect(() => {
    // Set active menu based on current path
    const activeItem = menuList.find(item => item.path === router.pathname);
    if (activeItem) {
      setActiveMenu(activeItem.id);
    }
  }, [router.pathname]);

  const handleMenuClick = (id) => {
    setActiveMenu(id);
  };

  return (
    <div id='sideNavigation' className={`border-2 mix-blend-difference bg-white h-screen p-5 relative md:translate-x-0 md:static transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>     
     <div className='flex items-center gap-2 font-bold'>
        <Image 
          src={'/SYNTAX SOCIETY.png'}
          width={55}
          height={55}
          style={{ borderRadius: "50%" }}
          alt='logo'
        />
        <h1>SYNTAX SOCIETY</h1>
      </div>

      <hr className='my-3 border-2' />

      {menuList.map((menu) => (
        <Link href={menu.path} key={menu.id}>
          <h2
          onClick={() => handleMenuClick(menu.id)}
            className={`flex items-center gap-3 text-md p-4 rounded-md text-slate-700 cursor-pointer my-3
            ${activeMenu === menu.id ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
            
          >
            <menu.icon />
            {menu.name}
          </h2>
        </Link>
      ))}

      <div className='flex flex-col gap-2 items-center absolute bottom-5'>
        <div className='flex gap-2 items-center bg-slate-200 p-2 rounded-lg'>
          <Image src={user?.picture} width={35} height={35} alt='Loading...' className='rounded-full' />
          <div>
            <h2 className='text-sm font-bold'>{user?.given_name} {user?.family_name}</h2>
            <h2 className='text-xs text-slate-600 slide-animation h-3' data-text={user?.email}>_______________________</h2>
          </div>
        </div>

        <div className="text-white bg-red-600 hover:bg-red-700 w-full items-center flex justify-center font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
          <LogoutLink className='flex gap-2'>
            <LogOutIcon />
            <h2>Log out</h2>
          </LogoutLink>
        </div>
      </div>
      
    </div>
  );
}

export default SideNav;
