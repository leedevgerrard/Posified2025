import React from 'react';
import { useSelector } from 'react-redux';

const Greetings = () => {

  const userData = useSelector(state => state.user);

  return (
    <div className='pl-6 pt-4'>
      <h1 className='text-3xl font-semibold'>Good Morning, {userData.name || 'Test User'}!</h1>
      <p className='font-semibold'>Break a leg for today!</p>
    </div>
  )
}

export default Greetings;