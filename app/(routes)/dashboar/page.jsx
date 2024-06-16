"use client"
import { app } from '@/config/firebaseConfig';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect } from 'react'

const page = () => {

      const db = getFirestore(app);

  const {user} = useKindeBrowserClient();


  useEffect(()=>{
    user && isBuisnessRegistered();
  },[user])

  const isBuisnessRegistered= async ()=>{
    const docRef = doc(db, "BUSINESS", user.email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
//   docSnap.data() will be undefined in this case
    console.log("No such document!");
    }
  }





  return (
    <div>
      Page
    </div>
  )
}

export default page
