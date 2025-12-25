import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdArrowRoundBack } from "react-icons/io";
import { getTotalPrice } from '../../redux/slices/cartSlice';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { cancelOrder, updateOrder } from '../../https';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import Modal from '../shared/Modal';
import { removeCustomer } from '../../redux/slices/customerSlice';

const Bill = ({isPaying, setIsPaying}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const cartData = useSelector(state => state.cart);
  const customerData = useSelector(state => state.customer);

  const totalPrice = useSelector(getTotalPrice);
  const taxRate = 0.1;
  const tax = totalPrice * taxRate;
  const totalPriceWithTax = totalPrice + tax;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pin, setPin] = useState('')

  const closeModal = () => setIsModalOpen(false);

  const handleSaveOrder = async () => {
    const orderData = {
      orderId: customerData.orderId,
      customerName: customerData.customerName,
      bills: {
        total: totalPrice,
        tax: tax,
        totalAfterTax: totalPriceWithTax
      },
      items: cartData,
      table: customerData.tableId,
      tableNum: customerData.tableNum
    }

    try {
      await orderMutation.mutateAsync({ orderId: customerData.orderId, orderData });
      await queryClient.invalidateQueries(['order']);
      navigate('/order');
    } catch (error) {
      enqueueSnackbar('Something went wrong!', { variant: 'error' });
    }
  }

  const handleCancelOrder = async () => {
    cancelOrderMutation.mutate({ orderId: customerData.orderId, pin });
  }

  const orderMutation = useMutation({
    mutationFn: ({ orderId, orderData }) => updateOrder(orderId, orderData),
    onSuccess: (res) => {
      enqueueSnackbar('Order successfully added!', { variant: 'success' });
    },
    onError: (error) => {
      const { response } = error;
      enqueueSnackbar(response.data.message, { variant: 'error' });
    }
  })

  const cancelOrderMutation = useMutation({
    mutationFn: ({ orderId, pin }) => cancelOrder(orderId, { pin }),
    onSuccess: (res) => {
      enqueueSnackbar('Order successfully cancelled!', { variant: 'success' });
      dispatch(removeCustomer());
      navigate('/');
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
      
      <div>
        <div className='flex items-center gap-3 px-5 mt-4'>
          <button className='border-green-500 border-2 px-4 py-3 w-full rounded-lg font-semibold'>Print Receipt</button>
          <button onClick={cartData && handleSaveOrder} className='border-green-500 border-2 px-4 py-3 w-full rounded-lg font-semibold'>Save Order</button>
        </div>
        <div className='flex items-center gap-3 px-5 mt-3'>
          <button onClick={() => setIsModalOpen(true)} className='border-green-500 border-2 px-4 py-3 w-full rounded-lg font-semibold flex-[1] hover:bg-red-500 hover:border-red-500'>Cancel</button>
          <button onClick={() => setIsPaying(true)} className='bg-green-500 px-4 py-3 w-full rounded-lg font-semibold flex-[3]'>Payment</button>
        </div>
      </div>

      <Modal title='Cancel Order' isOpen={isModalOpen} onClose={closeModal} maxWidth='large'>
        <div>
          <label className='block mb-2 text-sm font-medium'>Enter Manager PIN</label>
          <div className='flex items-center rounded-lg p-3 px-4 bg-gray-100'>
            <input value={pin} onChange={(e) => setPin(e.target.value)} type="password" name='' placeholder='Enter manager PIN' id='' className='bg-transparent flex-1 focus:outline-none' />
          </div>
        </div>
        <button onClick={handleCancelOrder} className='w-full bg-green-500 text-white rounded-lg py-3 mt-5 hover:bg-green-700'>
          Cancel Order
        </button>
      </Modal>

    </div>
  )
}

export default Bill;