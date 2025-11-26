import React from 'react'
import { useNavigate } from 'react-router-dom'

const TableCard = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/menu');
  }

  return (
    <div onClick={handleClick} className='bg-slate-50 h-[180px] shadow-md p-4 rounded-lg cursor-pointer'>
      <div className='flex items-center justify-between px-1'>
        <h1 className='text-xl font-semibold'>Table 3</h1>
        <p className='text-green-300 px-2 py-1 rounded-lg'>
          Booked
        </p>
      </div>
      <div className='flex items-center justify-center my-4'>
        <h1 className='bg-green-500 text-white rounded-full p-5 text-xl'>
          LD
        </h1>
      </div>
    </div>
  )
}

export default TableCard