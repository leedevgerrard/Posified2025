import React from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {

  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(-1)} className='border-2 rounded-lg p-2 text-xl font-bold cursor-pointer'>
      <IoArrowBackOutline />
    </div>
  )
}

export default BackButton;