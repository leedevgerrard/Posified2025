import React from 'react';
import SideNav from '../components/shared/SideNav';
import Greetings from './../components/homePage/Greetings';

const HomePage = () => {
  return (
    <section className='flex'>
      {/* Side Nav */}
      <div className='w-60'>
        <SideNav />
      </div>

      <div className='flex flex-1'>
        {/* Left Div */}
        <div className="flex-[3]">
          <Greetings />
        </div>
        {/* Right Div */}
        <div className="flex-[2] border-l-2"></div>
      </div>
    </section>
  )
}

export default HomePage