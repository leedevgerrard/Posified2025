import { useMutation } from '@tanstack/react-query';
import { enqueueSnackbar } from 'notistack';
import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { deleteProduct } from '../../https';

const RemoveProductModal = ({ setIsRemoveProductModalOpen }) => {
  const [ productName, setProductName ] = useState('');

  const handleCloseModal = () => {
    setIsRemoveProductModalOpen(false);
  }

  const handleChange = (e) => {
    setProductName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    removeProductMutation.mutate(productName);
  }

  const removeProductMutation = useMutation({
    mutationFn: (reqData) => deleteProduct(reqData),
    onSuccess: (res) => {
      setIsRemoveProductModalOpen(false);
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
            Remove Product
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
                value={productName}
                onChange={handleChange}
                className='bg-transparent flex-1 focus:outline-none'
                required
              />
            </div>
          </div>

          <button type='submit' className='w-full mt-6 py-3 rounded-lg text-lg bg-green-500 text-white font-bold'>
            Remove Product
          </button>

        </form>

      </div>
    </div>
  )
}

export default RemoveProductModal;