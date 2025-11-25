import React from 'react';
import SideNav from '../components/shared/SideNav';

const HomePage = () => {
  return (
    <section className='flex'>
      {/* Left Div */}
      <div className='w-60'>
        <SideNav />
      </div>

      <div className='flex'>
        {/* Center Div */}
        <div className="flex-[4]"></div>
        {/* Right Div */}
        <div className="flex-[2] border-l-2"></div>
      </div>
    </section>
  )
}

export default HomePage