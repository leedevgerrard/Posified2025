import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getTotalPrice } from '../../redux/slices/cartSlice';
import { useMutation } from '@tanstack/react-query';
import { addOrder } from '../../https';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

const Bill = ({isPaying, setIsPaying}) => {

  const navigate = useNavigate();

  const cartData = useSelector(state => state.cart);
  const customerData = useSelector(state => state.customer);

  const totalPrice = useSelector(getTotalPrice);
  const taxRate = 0.1;
  const tax = totalPrice * taxRate;
  const totalPriceWithTax = totalPrice + tax;

  const handleSaveOrder = () => {
    const orderData = {
      orderId: customerData.orderId,
      customerName: customerData.customerName,
      bills: {
        total: totalPrice,
        tax: tax,
        totalAfterTax: totalPriceWithTax
      },
      items: cartData,
      table: customerData.tableId
    }
    orderMutation.mutate(orderData);
    navigate('/order');
  }

  const orderMutation = useMutation({
    mutationFn: (reqData) => addOrder(reqData),
    onSuccess: (res) => {
      enqueueSnackbar('Order successfully added!', { variant: 'success' });
    },
    onError: (error) => {
      const { response } = error;
      enqueueSnackbar(response.data.message, { variant: 'error' });
    }
  })

  return (
    <div className='pb-2.5'>
      <div className='flex items-center justify-between px-5 mt-2'>
        <p className='text-xs font-medium mt-2'>Items({cartData.length})</p>
        <h1 className='text-md font-bold'>Rp {totalPrice}</h1>
      </div>
      <div className='flex items-center justify-between px-5 mt-2'>
        <p className='text-xs font-medium mt-2'>Tax({taxRate * 100}%)</p>
        <h1 className='text-md font-bold'>Rp {tax}</h1>
      </div>
      <div className='flex items-center justify-between px-5 mt-2'>
        <p className='text-xs font-medium mt-2'>Total Price</p>
        <h1 className='text-md font-bold'>Rp {totalPriceWithTax}</h1>
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
            <button onClick={cartData && handleSaveOrder} className='border-green-500 border-2 px-4 py-3 w-full rounded-lg font-semibold'>Save Order</button>
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