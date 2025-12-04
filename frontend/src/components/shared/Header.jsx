import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import logo from './../../assets/images/posified-logo.png';
import Modal from './Modal';
import { MdDashboardCustomize } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { setCustomer } from '../../redux/slices/customerSlice';

const Header = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const userData = useSelector(state => state.user);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(0);
  const [name, setName] = useState();

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

  const isActivePage = path => location.pathname === path;

  const handleCreateOrder = () => {
    dispatch(setCustomer({name}));
    navigate('/table');
    closeModal();
  }
  
  return (
    <header className='flex justify-between items-center py-3 px-8 bg-green-500'>

      {/* Logo */}
      <div>
        <img onClick={() => navigate('/')} src={logo} className='w-32 cursor-pointer' alt="posified logo" />
      </div>

      <div className="flex items-center gap-4">
        {userData.role === 'Admin' && (
          <div>
            <MdDashboardCustomize onClick={() => navigate('/dashboard')} className='text-white text-2xl cursor-pointer'/>
          </div>
        )}
        
        <button disabled={isActivePage('/order') || isActivePage('/table') || isActivePage('/menu')} onClick={openModal} className='bg-white py-2 px-6 rounded-lg disabled:opacity-80'>
          <span className='font-semibold text-green-500'>New Order</span>
        </button>
      </div>

      <Modal title='Create Order' isOpen={isModalOpen} onClose={closeModal} maxWidth='large'>
        <div>
          <label className='block mb-2 text-sm font-medium'>Customer Name</label>
          <div className='flex items-center rounded-lg p-3 px-4 bg-gray-100'>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" name='' placeholder='Enter customer name' id='' className='bg-transparent flex-1 focus:outline-none' />
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
        <button onClick={handleCreateOrder} className='w-full bg-green-500 text-white rounded-lg py-3 mt-5 hover:bg-green-700'>
          Create Order  
        </button>
      </Modal>

    </header>
  )
}

export default Header;