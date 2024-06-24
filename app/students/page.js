"use client";
import React, { useEffect, useState } from 'react';
import SideNav from '../dashboard/_components/SideNav';
import NewProject from './components/NewProject';
import SearchProject from './components/SearchProject';
import { app } from '@/config/firebaseConfig';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import Header from '../dashboard/_components/Header';




function Students() {
  const storage = getStorage(app);
  const { user } = useKindeBrowserClient();
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    user && fetchProjectData();
  }, [user]);

  const fetchProjectData = async () => {

    const listRef = ref(storage, `projects/${user.email}/`);
    const res = await listAll(listRef);
    const files = res.items;

    const dataPromises = files.map(async (fileRef) => {
      const url = await getDownloadURL(fileRef);
      const response = await fetch(url);

      const data = await response.json();
      return data;
    });

    const allData = (await Promise.all(dataPromises)).filter(data => data !== null);
    console.log("All project data:", allData);
    setProjectData(allData);
  };
  const [isSideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen(!isSideNavOpen);
  };

  return (
    <div className=''>
      <div className='w-64 fixed top-0 left-0 right-0 z-50 md:block'>
        <SideNav isOpen={isSideNavOpen}/>
      </div>
      <div className='fixed top-0 left-0 right-0 z-40'>
      <Header isSideNavOpen={isSideNavOpen} toggleSideNav={toggleSideNav}/>
    </div>
      <div className='md:ml-64 mt-[90px] flex flex-col justify-center items-center'>
        <SearchProject projectData={projectData} />
        {/* <NewProject /> */}
      </div>
    </div>
  );
}

export default Students;
