import React from 'react';

function Talk() {
  return (
    <div>
      <div className="justify-center h-screen w-screen flex items-center text-center">
        <div className="flex flex-col items-left text-left">
          <div className=' items-center'>
          <h1 className=' md:text-lg text-md font-semibold'>Developer: Attendance will be recorded based on your login information, so theres no need to come here!</h1>
          <video autoPlay loop className="mt-4 ml-5 rounded-lg w-[330px] md:w-[500px]" style={{ maxWidth: '100%' }}>
            <source src="/explain.mp4" type="video/mp4" />
          </video>
          </div>
          <br />
          <div>
          <h1 className=' md:text-lg text-md  font-semibold'>USER : </h1>
          <img className="mt-4 w-[330px] ml-5 rounded-lg md:w-[500px]" style={{ maxWidth: '100%' }} src="/pucha-kisi-ne-aman-dhattarwal.gif" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Talk;
