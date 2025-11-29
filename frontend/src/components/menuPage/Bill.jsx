import React from 'react';

const Bill = ({isPaying, setIsPaying}) => {
  return (
    <div className='pb-2.5'>
      <div className='flex items-center justify-between px-5 mt-2'>
        <p className='text-xs font-medium mt-2'>Items(3)</p>
        <h1 className='text-md font-bold'>Rp 300000</h1>
      </div>
      <div className='flex items-center justify-between px-5 mt-2'>
        <p className='text-xs font-medium mt-2'>Tax(10%)</p>
        <h1 className='text-md font-bold'>Rp 30000</h1>
      </div>
      <div className='flex items-center justify-between px-5 mt-2'>
        <p className='text-xs font-medium mt-2'>Total Price</p>
        <h1 className='text-md font-bold'>Rp 330000</h1>
      </div>

      {isPaying ? (
        <div>
          <div className='flex items-center gap-3 px-5 mt-4'>
            <button className='border-green-500 border-2 px-4 py-3 w-full rounded-lg font-semibold'>Cash</button>
            <button className='border-green-500 border-2 px-4 py-3 w-full rounded-lg font-semibold'>Transfer</button>
            <button className='border-green-500 border-2 px-4 py-3 w-full rounded-lg font-semibold'>QRIS</button>
          </div>
          <div className='flex items-center gap-3 px-5 mt-3'>
            <button className='bg-green-500 px-4 py-3 w-full rounded-lg font-semibold'>Print Receipt</button>
            <button className='bg-green-500 px-4 py-3 w-full rounded-lg font-semibold'>Finish</button>
          </div>
        </div>
      ) : (
        <div>
          <div className='flex items-center gap-3 px-5 mt-4'>
            <button className='border-green-500 border-2 px-4 py-3 w-full rounded-lg font-semibold'>Print Receipt</button>
            <button className='border-green-500 border-2 px-4 py-3 w-full rounded-lg font-semibold'>Save Order</button>
          </div>
          <div className='flex items-center px-5 mt-3'>
            <button onClick={() => setIsPaying(true)} className='bg-green-500 px-4 py-3 w-full rounded-lg font-semibold'>Payment</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Bill;