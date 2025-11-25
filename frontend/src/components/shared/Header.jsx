import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import logo from './../../assets/images/posified-logo.png';
import Modal from './Modal';

const Header = () => {

  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [guestCount, setGuestCount] = useState(0);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const decrement = () => {
    if (guestCount <= 0) return;
    setGuestCount(prev => prev - 1);
  }
  const increment = () => {
    if (guestCount >= 10) return;
    setGuestCount(prev => prev + 1);
  }
  
  return (
    <header className='flex justify-between items-center py-3 px-8 bg-green-500'>

      {/* Logo */}
      <div>
        <img onClick={() => navigate('/')} src={logo} className='w-32 cursor-pointer' alt="posified logo" />
      </div>

      <div className="flex items-center gap-4">
        <button className='bg-white py-2 px-6 rounded-lg'>
          <span className='font-semibold text-green-500'>New Order</span>
        </button>
      </div>

      <Modal title='Create Order' isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <label className='block mb-2 text-sm font-medium'>Customer Name</label>
          <div className='flex items-center rounded-lg p-3 px-4 bg-gray-100'>
            <input type="text" name='' placeholder='Enter customer name' id='' className='bg-transparent flex-1 focus:outline-none' />
          </div>
        </div>
        <div>
          <label className='block mb-2 mt-3 text-sm font-medium'>
            Guest
          </label>
          <div className='flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg'>
            <button onClick={decrement} className='text-green-500 text-2xl'>&minus;</button>
            <span className=''>{guestCount} Person</span>
            <button onClick={increment} className='text-green-500 text-2xl'>&#43;</button>
          </div>
        </div>
        <button className='w-full bg-green-500 text-white rounded-lg py-3 mt-5 hover:bg-green-700'>
          Create Order  
        </button>
      </Modal>

    </header>
  )
}

export default Header;