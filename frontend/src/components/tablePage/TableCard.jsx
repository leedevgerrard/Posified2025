import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { updateTable } from '../../redux/slices/customerSlice';

const TableCard = ({ tableNum, status }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (tableNum) => {
    dispatch(updateTable({tableNum}));
    navigate('/menu');
  }

  return (
    <div onClick={() => handleClick(tableNum)} className='bg-slate-50 h-[180px] shadow-md p-4 rounded-lg cursor-pointer'>
      <div className='flex items-center justify-between px-1'>
        <h1 className='text-xl font-semibold'>Table {tableNum}</h1>
        <p className='text-green-400 px-2 py-1 rounded-lg'>
          {status}
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