import React from 'react';

const OrderCard = ({customerName, tableNum, total, itemsQty}) => {
  return (
    <div className='flex items-center bg-slate-50 shadow-md rounded-lg gap-5 w-full px-4 py-2 mb-4 cursor-pointer'>
      <button className='bg-green-500 p-5 text-xl font-bold rounded-lg'>LD</button>
      <div className='flex items-center justify-between w-[100%]'>
        <div className='flex flex-col items-start gap-1'>
          <h1 className='text-lg font-semibold tracking-wide'>{customerName}</h1>
          <p className='text-[#8b8b8b] text-sm'>Table No: {tableNum}</p>
        </div>
        <div className='flex flex-col items-start gap-2'>
          <p className='font-semibold'>
            Rp {total}
          </p>
          <p className='text-[#8b8b8b] text-sm'>
            {itemsQty} Items
          </p>
        </div>
      </div>
    </div>
  )
}

export default OrderCard;