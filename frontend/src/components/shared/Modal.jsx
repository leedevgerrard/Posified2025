import React from 'react';

const Modal = ({title, isOpen, onClose, children}) => {

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-20 border-2 flex items-center justify-center z-50'>
      <div className='bg-white shadow-lg w-full max-w-lg mx-4 rounded-lg p-4'>
        <div className='flex justify-between items-center px-6 py-4 border-b border-[#333]'>
          <h2 className='text-xl font-semibold'>
            {title}
          </h2>
          <button className='text-2xl' onClick={onClose}>
            &times;
          </button>
        </div>

        <div className='p-6'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal;