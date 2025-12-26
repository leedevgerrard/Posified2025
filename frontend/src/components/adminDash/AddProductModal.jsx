import { keepPreviousData, useMutation, useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { addProduct, getAllCategories } from '../../https';
import { enqueueSnackbar } from 'notistack';

const AddProductModal = ({setIsAddProductModalOpen}) => {

  // Fetching categories
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

  const [productData, setProductData] = useState({
    name: '',
    category: resData?.data.data[0]._id,
    price: ''
  })

  const handleCloseModal = () => {
    setIsAddProductModalOpen(false);
  }

  const handleChange = (e) => {
    setProductData({...productData, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    productMutation.mutate(productData);
  }

  const productMutation = useMutation({
    mutationFn: (reqData) => addProduct(reqData),
    onSuccess: (res) => {
      setIsAddProductModalOpen(false);
      enqueueSnackbar(res.data.message, { variant: 'success' });
    },
    onError: (error) => {
      const { response } = error;
      enqueueSnackbar(response.data.message, { variant: 'error' });
    }
  })

  return (
    <div className='fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50'>
      <div className='p-6 bg-white rounded-lg shadow-lg w-96'>

        {/* Modal header */}
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-semibold'>
            Add Product
          </h2>
          <button onClick={handleCloseModal} className='hover:text-red-500'>
            <IoMdClose size={24} />
          </button>
        </div>

        {/* Modal body */}
        <form onSubmit={handleSubmit} className='space-y-4 mt-10'>

          <div>
            <label className='block mb-2 mt-3 text-sm font-medium'>
              Product Name
            </label>
            <div className='flex items-center rounded-lg p-3 px-4 bg-gray-100'>
              <input
                type="text"
                name='name'
                value={productData.name}
                onChange={handleChange}
                className='bg-transparent flex-1 focus:outline-none'
                required
              />
            </div>
          </div>
          <div>
            <label className='block mb-2 mt-3 text-sm font-medium'>
              Product Category
            </label>
            <div className='flex items-center rounded-lg p-3 px-4 bg-gray-100'>
              <select className='bg-transparent w-full outline-none' value={productData.category} name='category' onChange={handleChange}>
                {resData?.data.data.map((category) => {
                  return (
                    <option key={category._id} value={category._id}>{category.name}</option>
                  )
                })}
              </select>
            </div>
          </div>
          <div>
            <label className='block mb-2 mt-3 text-sm font-medium'>
              Product Price
            </label>
            <div className='flex items-center rounded-lg p-3 px-4 bg-gray-100'>
              <input
                type="number"
                name='price'
                value={productData.price}
                onChange={handleChange}
                className='bg-transparent flex-1 focus:outline-none'
                required
              />
            </div>
          </div>

          <button type='submit' className='w-full mt-6 py-3 rounded-lg text-lg bg-green-500 text-white font-bold'>
            Add Table
          </button>

        </form>

      </div>
    </div>
  )
}

export default AddProductModal;