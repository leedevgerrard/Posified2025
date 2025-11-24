import React, { useState } from 'react';

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='block mb-2 text-sm font-medium'>
            Employee Email
          </label>
          <div className='flex items-center rounded-lg p-3 px-4 bg-gray-100'>
            <input
              type="email"
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter employee email'
              className='bg-transparent flex-1 focus:outline-none'
              required
            />
          </div>
        </div>
        <div>
          <label className='block mb-2 text-sm font-medium'>
            Password
          </label>
          <div className='flex items-center rounded-lg p-3 px-4 bg-gray-100'>
            <input
              type="password"
              name='password'
              value={formData.password}
              onChange={handleChange}
              placeholder='Enter password'
              className='bg-transparent flex-1 focus:outline-none'
              required
            />
          </div>
        </div>

        <button type='submit' className='w-full mt-6 py-3 rounded-lg text-lg bg-green-500 text-white font-bold'>
          Log In
        </button>
      </form>
    </div>
  )
}

export default Login;