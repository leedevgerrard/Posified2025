import React from 'react';
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaClipboardList } from "react-icons/fa";
import dollarIllustration from '../../assets/images/dollar-illustration.png';
import orderIllustration from '../../assets/images/order-illustration.png';

const HomeCard = ({ title, total }) => {
  return (
    <div className='flex justify-between h-[75%] py-4 px-6 shadow-lg rounded-lg overflow-hidden flex-[1]'>
      <div>
        <h1 className='pb-1 text-md font-medium'>{title}</h1>
        <p className='text-2xl font-semibold'>{title === "Today's Revenue" && 'Rp'} {total ? total : '0'}</p>
      </div>
      <div className='text-green-500'>
        {
          title === "Today's Revenue" ?
          <img src={dollarIllustration} className='w-40' alt="dollar illustration" /> :
          <img src={orderIllustration} className='w-36' alt="order illustration" />
        }
      </div>
    </div>
  )
}

export default HomeCard;