"use client"
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import Landing from './_components/Landing';
import MainPage from './_components/MainPage';
import { useRouter } from 'next/navigation';
import { PenBox, Plus } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Header from './_components/Header';
import { useInView } from 'react-intersection-observer';
import SideNav from './_components/SideNav';

function Dashboard() {
  const { setTheme } = useTheme();
  const router = useRouter();

  const { ref: landingRef, inView: landingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: mainPageRef, inView: mainPageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isSideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen(!isSideNavOpen);
  };

  useEffect(() => {
    setTheme('light');
  }, []);

  return (
    <div className='flex flex-col'>
      <div className='w-64 fixed top-0 left-0 right-0 z-20 md:block'>
        <SideNav isOpen={isSideNavOpen} />
      </div>
      <div className='fixed top-0 left-0 right-0 z-20'>
        <Header isSideNavOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />
      </div>
      <div ref={landingRef} className='mt-[90px] z-0'>
        <Landing />
      </div>
      <div ref={mainPageRef} className='mt-[350px] md:mt-[790px]'>
        <MainPage />
      </div>
      <div className='CART-POPUP fixed z-40 bottom-6 right-8 flex items-center'>
        <DropdownMenu>
          <DropdownMenuTrigger className='h-[48px] w-[48px] transition duration-500 ease-in-out transform hover:scale-110 bg-slate-900 rounded-full'>
            <Plus className='h-full w-full text-blue-500' />
          </DropdownMenuTrigger>
          <DropdownMenuContent className='right-8 w-[200px] h-[100px]'>
            <DropdownMenuLabel>Hello!!</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className='text-lg gap-2'
              onClick={() => {
                router.replace('/students#CREATEPRO');
              }}
            >
              <div>
                <PenBox />
              </div>
              <h1>Create Project</h1>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Dashboard;
