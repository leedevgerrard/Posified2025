import React from 'react';
import Header from './Header';

const Loading = () => {
  return (
    <div className='flex flex-col h-[100vh]'>
      <Header />
      <p className='flex items-center justify-center text-md opacity-70 h-full'>Fetching data...</p>
    </div>
  )
}

export default Loading;