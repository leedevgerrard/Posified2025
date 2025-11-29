import React from 'react';

const MenuCustomerInfo = () => {
  return (
    <div className='flex items-center justify-between px-4 py-3'>
      <div className='flex flex-col items-start'>
        <h1 className='text-md font-semibold tracking-wide'>Customer Name</h1>
        <p className='text-xs font-medium mt-1'>#N/A / Dine in / date</p>
      </div>
      <button className='bg-green-500 px-3 py-2 text-xl font-bold rounded-lg'>
        LD
      </button>
    </div>
  )
}

export default MenuCustomerInfo;