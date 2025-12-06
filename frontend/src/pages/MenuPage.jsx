import React, { useState } from 'react';
import { MdRestaurantMenu } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { categories, products } from '../constants/constants';

import SideNav from '../components/shared/SideNav';
import BackButton from '../components/shared/BackButton';
import Modal from '../components/shared/Modal';
import MenuCustomerInfo from '../components/menuPage/MenuCustomerInfo';
import MenuCartInfo from '../components/menuPage/MenuCartInfo';
import Bill from '../components/menuPage/Bill';
import { addItems } from '../redux/slices/cartSlice';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getAllCategories } from '../https';
import { enqueueSnackbar } from 'notistack';

const MenuPage = () => {

  const customerData = useSelector(state => state.customer);

  const dispatch = useDispatch();

  const [selected, setSelected] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaying, setIsPaying] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openCard = (categorySlug) => {
    setSelected(categorySlug);
    openModal();
  }

  const handleAddToCart = (item) => {
    const { name, price } = item;
    const newObj = {id: Date.now(), name, pricePerQty: price, qty: 1, price: price * 1};

    dispatch(addItems(newObj));
    closeModal();
  }

  const { data: resData, isError } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      return await getAllCategories();
    },
    placeholderData: keepPreviousData
  })
  if (isError) {
    enqueueSnackbar('Something went wrong!', { variant: 'error' });
  }

  return (
    <section className='flex'>
      {/* Side Nav */}
      <div className='w-60'>
        <SideNav />
      </div>

      <div className='flex flex-1'>

        {/* Left Div */}
        <div className="flex-[2]">

          <div className='flex items-center justify-between px-10 py-4'>
            <div className='flex items-center gap-4'>
              <BackButton />
              <h1 className='text-2xl font-bold tracking-wide'>Menu</h1>
            </div>
            <div className='flex items-center justify-around gap-3'>
              <MdRestaurantMenu className='text-4xl' />
              <div className='flex flex-col items-start'>
                <h1 className='text-md font-semibold tracking-wide'>
                  {customerData.customerName || 'Customer Name'}
                </h1>
                <p className='text-xs font-medium'>Table {customerData.tableNum || 'N/A'}</p>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-4 gap-4 px-10 py-4 w-[100%] overflow-y-auto'>
            {
              resData?.data.data.map((category) => {
                return (
                  <div key={category._id} onClick={() => openCard(category.slug)} className='flex items-center justify-center p-4 rounded-lg h-[100px] cursor-pointer bg-green-500 text-white shadow-md'>
                    <h1 className='text-lg font-semibold'>
                      {category.name}
                    </h1>
                  </div>
                )
              })
            }
          </div>

          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className='grid grid-cols-4 gap-4 px-2 py-4 w-[100%] h-[300px] overflow-auto'>
              {
                products?.map((item) => {
                  return (
                    <div key={item.id} onClick={() => handleAddToCart(item)} className='flex items-center justify-center p-4 rounded-lg h-[100px] cursor-pointer bg-green-500 text-white shadow-md'>
                      <h1 className='text-lg font-semibold'>
                        {item.name}
                      </h1>
                    </div>
                  )
                })
              }
            </div>
          </Modal>

        </div>

        {/* Right Div */}
        <div className="flex-[1] border-l-2">
          {/* Customer info */}
          <MenuCustomerInfo />
          <hr className='border-t-2 mx-3' />
          {/* Cart items */}
          <MenuCartInfo />
          <hr className='border-t-2 mx-3' />
          {/* Bills */}
          <Bill isPaying={isPaying} setIsPaying={setIsPaying} />
        </div>

      </div>
    </section>
  )
}

export default MenuPage;