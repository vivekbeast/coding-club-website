"use client";
import React, { useEffect, useState } from 'react';
import SideNav from '../dashboard/_components/SideNav';
import NewProject from './components/NewProject';
import SearchProject from './components/SearchProject';
import { app } from '@/config/firebaseConfig';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';




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

  return (
    <div className=''>
      <div className='w-64 fixed hidden md:block'>
        <SideNav />
      </div>
      <div className='md:ml-64 flex flex-col justify-center items-center'>
        <SearchProject projectData={projectData} />
        <NewProject />
      </div>
    </div>
  );
}

export default Students;
