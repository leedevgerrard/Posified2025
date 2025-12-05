import React, { useState } from 'react';
import { MdTableBar, MdCategory } from 'react-icons/md';
import { BiSolidDish } from 'react-icons/bi';

import AddTableModal from '../components/adminDash/AddTableModal';
import AddCategoryModal from '../components/adminDash/AddCategoryModal';

const AdminDash = () => {

  const buttons = [
    { label: 'Add Table', icon: <MdTableBar />, action: 'table'},
    { label: 'Add Category', icon: <MdCategory />, action: 'category'},
    { label: 'Add Item', icon: <BiSolidDish />, action: 'item'}
  ]

  const [ isTableModalOpen, setIsTableModalOpen ] = useState(false);
  const [ isCategoryModalOpen, setIsCategoryModalOpen ] = useState(false);
  const [ isItemModalOpen, setIsItemModalOpen ] = useState(false);

  const handleOpenModal = (action) => {
    if (action === 'table') setIsTableModalOpen(true);
    if (action === 'category') setIsCategoryModalOpen(true);
    if (action === 'item') setIsItemModalOpen(true);
  }

  return (
    <section className='h-[calc(100vh-4rem)]'>
      <div className='container mx-auto flex items-center py-10 px-6 md:px-4'>
        <div className='flex items-center gap-3'>
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
      {isItemModalOpen && <AddItemModal setIsItemModalOpen={setIsItemModalOpen} />}

    </section>
  )
}

export default AdminDash;