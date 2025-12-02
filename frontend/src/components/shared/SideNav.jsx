import React from 'react';
import { FaHome, FaClipboardList, FaUserCircle } from 'react-icons/fa';
import { MdTableBar } from 'react-icons/md';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SideNav = () => {

  const navigate = useNavigate();
  
  const userData = useSelector(state => state.user);

  return (
    <div className='absolute pt-10 bottom-0 left-0 top-[4rem] flex flex-col justify-between w-60 shadow-[5px_0_5px_rgba(0,0,0,0.05)]'>
      <div className='flex flex-col items-center justify-around pr-8'>
        <button onClick={() => navigate('/')} className='mb-5'><FaHome className='inline mr-4' size={20} /> Home</button>
        <button onClick={() => navigate('/order')} className='mb-5'><FaClipboardList className='inline mr-4' size={20} /> Orders</button>
        <button onClick={() => navigate('/table')} className='mb-5'><MdTableBar className='inline mr-4' size={20} /> Tables</button>
        <button><HiOutlineDotsCircleHorizontal className='inline mr-4' size={20} /> Others</button>
      </div>
      
      <div className='flex items-center py-5 px-5 gap-3 cursor-pointer hover:bg-gray-50 w-[89%]'>
        <FaUserCircle className='text-4xl' />
        <div className='flex flex-col items-start'>
          <h1 className='text-md font-semibold'>{userData.name || 'Test User'}</h1>
          <p className='text-x'>{userData.role || 'Role'}</p>
        </div>
      </div>
      
    </div>
  )
}

export default SideNav;