import React from 'react';
import { useSelector } from 'react-redux';

const Greetings = () => {

  const userData = useSelector(state => state.user);

  const hour = new Date().getHours();
  let dayPart = '';
  if (hour >= 5 && hour < 12) {
    dayPart = 'Morning';
  } else if (hour >= 12 && hour < 17) {
    dayPart = 'Afternoon';
  } else {
    dayPart = 'Evening';
  }

  return (
    <div className='px-6 pt-4 pb-2 flex-[1]'>
      <h1 className='text-3xl font-semibold'>Good {dayPart}, {userData.name || 'Test User'}!</h1>
      <p className='font-semibold'>Break a leg for today!</p>
    </div>
  )
}

export default Greetings;