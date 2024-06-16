import React from 'react';
import SideNav from '../dashboard/_components/SideNav';
import Talk from './talk';

function AttenDance() {
  return (
    <div className="h-screen">
      <div className="w-64 fixed hidden md:block">
        <SideNav />
      </div>
      <Talk />
    </div>
  );
}

export default AttenDance;
