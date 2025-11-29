import React from 'react';
import { RiDeleteBin2Fill } from 'react-icons/ri';

const MenuCartInfo = () => {
  return (
    <div className='px-4 py-2'>
      <h1 className='text-lg font-semibold tracking-wide'>
        Order Details
      </h1>
      <div className='mt-4 overflow-y-scroll scrollbar-hide h-[300px]'>

      <div className='rounded-lg border-2 px-4 py-2 mb-2'>
        <div className='flex items-center justify-between'>
          <h1 className='font-semibold tracking-wide text-md'>
            Kwetiau Siram
          </h1>
          <div className='flex items-center justify-between bg-gray-100 px-2 py-1 w-[20%] rounded-lg'>
            <button className='text-green-500 text-lg'>&minus;</button>
            <span className=''>1</span>
            <button className='text-green-500 text-lg'>&#43;</button>
          </div>
        </div>
        <div className='flex items-center justify-between mt-1'>
          <RiDeleteBin2Fill className='text-red-500 cursor-pointer' size={20} />
          <p className='text-md font-bold'>Rp 26000</p>
        </div>
      </div>

      </div>
    </div>
  )
}

export default MenuCartInfo;