import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='w-[70%] max-sm:w-[90%] flex flex-row justify-between ring-2 bg-white rounded-lg p-4'>
        <Link to={'/'} className='flex flex-row gap-4'>
          <img src="https://cdn-icons-png.flaticon.com/512/888/888879.png" alt="logo" className='w-10 h-10' />
          <h1 className='text-3xl font-bold'>E-Shop</h1>
        </Link>
        <div className='ml-4 max-sm:hidden'>
          <ul className='flex flex-row gap-4 text-lg font-semibold'>
            <li className='text-blue-500'>Home</li> 
            <li className='text-blue-500'>Products</li> 
            <li className='text-blue-500'>About</li> 
            <li className='text-blue-500'>Contacts</li> 
          </ul>
        </div>
      </nav>
  )
}

export default Navbar