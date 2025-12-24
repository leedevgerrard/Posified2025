import React from 'react';
import { useSelector } from 'react-redux';
import { formatDate, getAvatarName } from '../../utils/utils.js';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { getTotalPrice } from '../../redux/slices/cartSlice.js';
import { IoMdArrowRoundBack } from 'react-icons/io';

const Payment = () => {

  const customerData = useSelector(state => state.customer);
  const cartData = useSelector(state => state.cart);
  const scrollRef = useRef();

  const [date, setDate] = useState(new Date());
  const [paidAmount, setPaidAmount] = useState(0);

  const totalPrice = useSelector(getTotalPrice);
  const taxRate = 0.1;
  const tax = totalPrice * taxRate;
  const totalPriceWithTax = totalPrice + tax;

  const change = paidAmount - totalPriceWithTax;

  useEffect(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({
          top: scrollRef.current.scrollHeight,
          behavior: 'smooth'
        })
      }
    }, [cartData])

  return (
    <div className='px-4 py-2'>
      <h1 className='text-lg font-semibold tracking-wide'>
        Payment
      </h1>

      <div className='my-2 scrollbar-hide h-[150px] overflow-auto custom-scrollbar' ref={scrollRef}>
      
        {cartData?.length === 0 ? (
          <p className='opacity-50 text-sm flex justify-center items-center h-[150px]'>Your cart is empty</p>
        ) : cartData?.map((item) => {
          return (
            <div className='flex items-center justify-between px-3 pb-1 text-s'>
              <p>{item.name} (x{item.qty})</p>
              <p>Rp {item.price}</p>
            </div>
          )
        })}

      </div>

      <hr className='border-t-2' />

      <p className='py-2'>Payment Options</p>
      <div className='flex gap-2'>
        <button className='border-green-500 border-2 px-4 py-1 w-full rounded-lg font-semibold flex-2'>Cash</button>
        <button className='border-green-500 border-2 px-4 py-1 w-full rounded-lg font-semibold flex-2'>Transfer</button>
        <button className='border-green-500 border-2 px-4 py-1 w-full rounded-lg font-semibold flex-2'>QRIS</button>
      </div>

      <p className='py-2'>Paid Amount</p>
      <div className='flex items-center rounded-lg mb-3 p-1 px-2 bg-gray-100'>
        <input onChange={(e) => setPaidAmount(e.target.value)} type="number" className='w-full bg-transparent flex-1 focus:outline-none' />
      </div>

      <hr className='border-t-2' />

      <div className='flex items-center justify-between px-5 mt-2'>
        <p className='text-xs font-medium mt-2'>Items({cartData.length})</p>
        <h1 className='text-md font-bold'>Rp {totalPrice}</h1>
      </div>
      <div className='flex items-center justify-between px-5 mt-2'>
        <p className='text-xs font-medium mt-2'>Tax({taxRate * 100}%)</p>
        <h1 className='text-md font-bold'>Rp {tax}</h1>
      </div>
      <div className='flex items-center justify-between px-5 my-2'>
        <p className='text-xs font-medium mt-2'>Total Price</p>
        <h1 className='text-md font-bold'>Rp {totalPriceWithTax}</h1>
      </div>
      <div className='flex items-center justify-between px-5 my-2'>
        <p className='text-xs font-medium mt-2'>Paid Amount</p>
        <h1 className='text-md font-bold'>Rp {paidAmount}</h1>
      </div>
      <div className='flex items-center justify-between px-5 my-2'>
        <p className='text-xs font-medium mt-2'>Change</p>
        <h1 className='text-md font-bold'>Rp {change < 0 ? '0' : change}</h1>
      </div>

      <div className='flex items-center gap-3 mt-3'>
        <button className='bg-green-500 py-3 w-full rounded-lg font-semibold'>Print Receipt</button>
        <button className='bg-green-500 py-3 w-full rounded-lg font-semibold'>Finish</button>
      </div>

    </div>
  )
}

export default Payment;