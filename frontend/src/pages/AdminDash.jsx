import React, { useState } from 'react';
import { MdTableBar, MdCategory } from 'react-icons/md';
import { BiSolidDish } from 'react-icons/bi';

import AddTableModal from '../components/adminDash/AddTableModal';
import AddCategoryModal from '../components/adminDash/AddCategoryModal';
import AddProductModal from '../components/adminDash/AddProductModal';

const AdminDash = () => {

  const buttons = [
    { label: 'Edit Table', icon: <MdTableBar />, action: 'table'},
    { label: 'Edit Category', icon: <MdCategory />, action: 'category'},
    { label: 'Edit Product', icon: <BiSolidDish />, action: 'product'}
  ]

  const [ isTableModalOpen, setIsTableModalOpen ] = useState(false);
  const [ isCategoryModalOpen, setIsCategoryModalOpen ] = useState(false);
  const [ isProductModalOpen, setIsProductModalOpen ] = useState(false);

  const handleOpenModal = (action) => {
    if (action === 'table') setIsTableModalOpen(true);
    if (action === 'category') setIsCategoryModalOpen(true);
    if (action === 'product') setIsProductModalOpen(true);
  }

  return (
    <section className='h-[calc(100vh-4rem)]'>
      <div className='container flex flex-col items-start py-10 px-6 md:px-4'>
        <div className='flex flex-col items-start gap-3 w-100'>
          {
            buttons.map(({ label, icon, action }) => {
              return (
                <button onClick={() => handleOpenModal(action)} className='bg-gray-50 hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold text-md flex items-center gap-2'>
                  {icon} {label}
                </button>
              )
            })
          }
        </div>
      </div>

      {isTableModalOpen && <AddTableModal setIsTableModalOpen={setIsTableModalOpen} />}
      {isCategoryModalOpen && <AddCategoryModal setIsCategoryModalOpen={setIsCategoryModalOpen} />}
      {isProductModalOpen && <AddProductModal setIsProductModalOpen={setIsProductModalOpen} />}

    </section>
  )
}

export default AdminDash;