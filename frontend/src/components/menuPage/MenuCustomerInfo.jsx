import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { formatDate, getAvatarName } from '../../utils/utils';

const MenuCustomerInfo = () => {

  const customerData = useSelector(state => state.customer);

  const [date, setDate] = useState(new Date());

  return (
    <div className='flex items-center justify-between px-4 py-3'>
      <div className='flex flex-col items-start'>
        <h1 className='text-md font-semibold tracking-wide'>{customerData.customerName || 'Customer Name'}</h1>
        <p className='text-xs font-medium mt-1'>Dine in / {formatDate(date)}</p>
      </div>
      <button className='bg-green-500 px-3 py-2 text-xl font-bold rounded-lg'>
        {getAvatarName(customerData.customerName) || 'CN'}
      </button>
    </div>
  )
}

export default MenuCustomerInfo;