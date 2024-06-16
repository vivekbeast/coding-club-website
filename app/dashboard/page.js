"use client"
import { useTheme } from 'next-themes'
import React, { useEffect } from 'react'
import Landing from './_components/Landing';
import MainPage from './_components/MainPage';
import RoundOption from './_components/MainPage';
import { useRouter } from 'next/navigation';
import { Plus } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Dashboard() {
  const { setTheme } = useTheme();
  const router = useRouter();

  useEffect(()=>{
    setTheme('light');
  },[])
  return (
    <div className=' '>
      <div className=''>
        <Landing />
      </div>
      
    </div>
  )
}

export default Dashboard


