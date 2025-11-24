import React, { useState } from 'react';

const Register = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: ''
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleRoleSelect = (selectedRole) => {
    setFormData({...formData, role: selectedRole});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='block mb-2 text-sm font-medium'>
            Employee Name
          </label>
          <div className='flex items-center rounded-lg p-3 px-4 bg-gray-100'>
            <input
              type="text"
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Enter employee name'
              className='bg-transparent flex-1 focus:outline-none'
              required
            />
          </div>
        </div>
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
            Employee Phone
          </label>
          <div className='flex items-center rounded-lg p-3 px-4 bg-gray-100'>
            <input
              type="number"
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              placeholder='Enter employee phone'
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
        <div>
          <label className='block mb-2 text-sm font-medium'>
            Confirm Password
          </label>
          <div className='flex items-center rounded-lg p-3 px-4 bg-gray-100'>
            <input
              type="password"
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder='Confirm password'
              className='bg-transparent flex-1 focus:outline-none'
              required
            />
          </div>
        </div>
        <div>
          <label className='block mb-2 mt-3 text-sm font-medium'>
            Choose your role
          </label>
          <div className='flex items-center gap-3 mt-4'>
            {['Waiter', 'Cashier', 'Admin'].map((role) => {
              return (
                <button
                  key={role}
                  type='button'
                  onClick={() => handleRoleSelect(role)}
                  className={`border-green-500 border-2 px-4 py-2 w-full rounded-lg ${formData.role === role ? 'bg-green-500' : ''}`}
                >
                  {role}
                </button>
              )
            })}
          </div>
        </div>

        <button type='submit' className='w-full mt-6 py-3 rounded-lg text-lg bg-green-500 text-white font-bold'>
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default Register;