import React, { useState } from 'react';
import { MdTableBar, MdCategory } from 'react-icons/md';
import { BiSolidDish } from 'react-icons/bi';

import AddTableModal from '../components/adminDash/AddTableModal';
import AddCategoryModal from '../components/adminDash/AddCategoryModal';
import AddProductModal from '../components/adminDash/AddProductModal';
import RemoveTableModal from '../components/adminDash/RemoveTableModal';
import RemoveCategoryModal from '../components/adminDash/RemoveCategoryModal';
import RemoveProductModal from '../components/adminDash/RemoveProductModal';

const AdminDash = () => {

  const buttons = [
    {
      label: 'Edit Table',
      icon: <MdTableBar />,
      action: 'table',
      dropdown: [
        { label: 'Add Table' },
        { label: 'Remove Table' }
      ]
    },
    {
      label: 'Edit Category',
      icon: <MdCategory />,
      action: 'category',
      dropdown: [
        { label: 'Add Category' },
        { label: 'Remove Category' }
      ]
    },
    {
      label: 'Edit Product',
      icon: <BiSolidDish />,
      action: 'product',
      dropdown: [
        { label: 'Add Product' },
        { label: 'Remove Product' }
      ]
    }
  ]

  const [ isDropdownOpen, setIsDropdownOpen ] = useState(null);

  const [ isAddTableModalOpen, setIsAddTableModalOpen ] = useState(false);
  const [ isAddCategoryModalOpen, setIsAddCategoryModalOpen ] = useState(false);
  const [ isAddProductModalOpen, setIsAddProductModalOpen ] = useState(false);

  const [ isRemoveTableModalOpen, setIsRemoveTableModalOpen ] = useState(false);
  const [ isRemoveCategoryModalOpen, setIsRemoveCategoryModalOpen ] = useState(false);
  const [ isRemoveProductModalOpen, setIsRemoveProductModalOpen ] = useState(false);

  const handleOpenAddModal = (action) => {
    if (action === 'table') setIsAddTableModalOpen(true);
    if (action === 'category') setIsAddCategoryModalOpen(true);
    if (action === 'product') setIsAddProductModalOpen(true);
  }

  const handleOpenRemoveModal = (action) => {
    if (action === 'table') setIsRemoveTableModalOpen(true);
    if (action === 'category') setIsRemoveCategoryModalOpen(true);
    if (action === 'product') setIsRemoveProductModalOpen(true);
  }

  return (
    <section className='h-[calc(100vh-4rem)]'>
      <div className='container flex items-start py-10 px-6'>
        <div className='flex items-start gap-5 w-100'>
          {
            buttons.map(({ label, icon, action, dropdown }) => {
              return (
                <div
                  className='relative'
                  onMouseEnter={() => setIsDropdownOpen(action)}
                  onMouseLeave={() => setIsDropdownOpen(null)}
                >
                  <button className='w-full bg-gray-50 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-md flex items-center gap-2'>
                    {icon} {label}
                  </button>

                  {
                    isDropdownOpen === action && (
                      <div className='absolute w-full rounded-lg bg-gray-50'>
                        <div onClick={() => handleOpenAddModal(action)} className='px-2 pt-2 pb-1 hover:bg-gray-100 hover:cursor-pointer'>
                          {dropdown[0].label}
                        </div>
                        <div onClick={() => handleOpenRemoveModal(action)} className='px-2 pb-2 pt-1 hover:bg-gray-100 hover:cursor-pointer'>
                          {dropdown[1].label}
                        </div>
                      </div>
                    )
                  }
                </div>
              )
            })
          }
        </div>
      </div>

      {isAddTableModalOpen && <AddTableModal setIsAddTableModalOpen={setIsAddTableModalOpen} />}
      {isAddCategoryModalOpen && <AddCategoryModal setIsAddCategoryModalOpen={setIsAddCategoryModalOpen} />}
      {isAddProductModalOpen && <AddProductModal setIsAddProductModalOpen={setIsAddProductModalOpen} />}

      {isRemoveTableModalOpen && <RemoveTableModal setIsRemoveTableModalOpen={setIsRemoveTableModalOpen} />}
      {isRemoveCategoryModalOpen && <RemoveCategoryModal setIsRemoveCategoryModalOpen={setIsRemoveCategoryModalOpen} />}
      {isRemoveProductModalOpen && <RemoveProductModal setIsRemoveProductModalOpen={setIsRemoveProductModalOpen} />}

    </section>
  )
}

export default AdminDash;