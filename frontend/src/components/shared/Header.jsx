import React from 'react';
import { useNavigate } from 'react-router';
import logo from './../../assets/images/posified-logo.png';

const Header = () => {

  const navigate = useNavigate();

  return (
    <header className='flex justify-between items-center py-3 px-8 bg-green-500'>

      {/* Logo */}
      <div>
        <img onClick={() => navigate('/')} src={logo} className='w-32 cursor-pointer' alt="posified logo" />
      </div>

      {/* User Details */}
      <div className="flex items-center gap-4"></div>

    </header>
  )
}

export default Header;