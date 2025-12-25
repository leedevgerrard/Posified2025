import React, { useEffect, useState } from 'react';
import SideNav from '../components/shared/SideNav';
import Greetings from './../components/homePage/Greetings';
import HomeCard from '../components/homePage/HomeCard';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getAllTransactions, getTodaysTransactions } from '../https';
import { enqueueSnackbar } from 'notistack';

const HomePage = () => {

  const [revenue, setRevenue] = useState(0);
  const [orders, setOrders] = useState(0);

  const { data: resData, isError } = useQuery({
    queryKey: ['transaction'],
    queryFn: async () => {
      return await getTodaysTransactions();
    },
    placeholderData: keepPreviousData
  })
  if (isError) {
    enqueueSnackbar('Something went wrong!', { variant: 'error' });
  }

  useEffect(() => {
    let sum = 0
    resData?.data.data.forEach((transaction) => {
      sum += transaction.bills.totalAfterTax;
    })
    setRevenue(sum);
    setOrders(resData?.data.data.length);
  }, [resData])

  return (
    <section className='flex h-[calc(100vh-4rem)]'>
      {/* Side Nav */}
      <div className='w-60'>
        <SideNav />
      </div>

      <div className='flex flex-1'>

        {/* Left Div */}
        <div className="flex-[3] flex flex-col">
          <Greetings />
          <div className='flex gap-5 py-5 px-5 flex-[1]'>
            <HomeCard title="Today's Revenue" total={revenue} />
            <HomeCard title="Today's Order" total={orders} />
          </div>
          <div className='py-5 px-5 flex-[6]'>
            <div className='h-full py-4 px-6 shadow-lg rounded-lg overflow-hidden'></div>
          </div>
        </div>

        {/* Right Div */}
        <div className="flex-[2] border-l-2"></div>
      </div>
    </section>
  )
}

export default HomePage