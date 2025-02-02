import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav className='mx-auto px-6 py-4 text-white bg-blue min-h-[10%]'>
        <div className='hidden md:flex items-center justify-between'>
            {
                /*Logo */
               
            }
             <Link to = "/" className='text-xl font-semibold hover:text-beige'>Zorvia</Link>
             {/*Menu items */}
             <div className='flex items-center justify-between space-x-10'>
                <Link to={'/shop'} className='hover:text-beige'>Shop</Link>
                <Link to={'/cart'}  className='hover:text-beige'>About</Link>
                <Link to={'/cart'}  className='hover:text-beige'>Cart</Link>
             </div>
        </div>

    </nav>
  )
}
