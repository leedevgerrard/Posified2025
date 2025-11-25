import React from 'react'
import OrderCard from './../components/orderPage/OrderCard';
import SideNav from '../components/shared/SideNav';
import BackButton from '../components/shared/BackButton';

const OrderPage = () => {
  return (
    <section className='flex'>
      {/* Side Nav */}
      <div className='w-60'>
        <SideNav />
      </div>

      <div className='flex flex-1 flex-col items-start justify-center'>
        <div className='flex items-center gap-4 pl-6 py-4'>
          <BackButton />
          <h1 className='text-3xl'>Orders List</h1>
        </div>
        <div className='flex flex-col items-center justify-center px-6 w-full pb-2'>
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </div>
      </div>
    </section>
  )
}

export default OrderPage