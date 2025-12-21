import React from 'react';
import OrderCard from './../components/orderPage/OrderCard';
import SideNav from '../components/shared/SideNav';
import BackButton from '../components/shared/BackButton';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getAllOrders } from '../https';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

const OrderPage = () => {

  const navigate = useNavigate();

  const { data: resData, isError } = useQuery({
    queryKey: ['order'],
    queryFn: async () => {
      return await getAllOrders();
    },
    placeholderData: keepPreviousData
  })
  if (isError) {
    enqueueSnackbar('Something went wrong!', { variant: 'error' });
  }

  const handleOrderCardClick = (order) => {
    navigate('/menu', {
      state: order
    });
  }

  return (
    <section className='flex'>
      {/* Side Nav */}
      <div className='w-60'>
        <SideNav />
      </div>

      <div className='flex flex-1 flex-col items-center'>
        <div className='flex items-start gap-4 pl-6 py-4 w-full'>
          <BackButton />
          <h1 className='text-2xl font-bold tracking-wide'>Orders List</h1>
        </div>
        <div className='flex flex-col items-center px-6 w-[95%] h-[calc(100vh-10rem)] overflow-auto custom-scrollbar'>
          {
            resData?.data.data.map((order) => {
              return (
                <OrderCard
                  handleOrderCardClick={handleOrderCardClick}
                  order={order}
                />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default OrderPage;