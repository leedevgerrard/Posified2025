import React, { useState } from 'react';
import logo from '../assets/images/posified-logo-green.png';
import authIllustration from '../assets/images/auth-page-illustration.png';
import Register from './../components/authPage/Register';
import Login from './../components/authPage/Login';

const AuthPage = () => {

  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className='flex min-h-screen w-full'>
      {/* Left Section */}
      <div className='w-[50%] min-h-screen p-10'>
        <div className='flex justify-center'>
          <img className='w-40 p-1' src={logo} alt="Posified Logo" />
        </div>

        <h2 className='text-2xl text-center mt-5 font-semibold mb-5'>
          {isRegister ? 'Employee Registration' : 'Employee Login'}
        </h2>

        {isRegister ? <Register setIsRegister={setIsRegister} /> : <Login />}

        <div className='flex justify-center mt-6'>
          <p className='text-sm'>
            {isRegister ? 'Already have an account? ' : "Don't have an account? "}
            <a onClick={() => setIsRegister(!isRegister)} className='text-green-500 font-semibold hover:underline' href="#">
              {isRegister ? 'Sign in' : 'Sign up'}
            </a>
          </p>
        </div>
      </div>

      {/* Right Section */}
        <div className='w-[50%] relative flex items-center justify-center bg-cover'>
          <img className='w-full h-full object-cover' src={authIllustration} alt="Auth Page Illustration" />
        </div>
    </div>
  )
}

export default AuthPage;