import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const [clicked ,setClicked] = useState(false);
    function handleClick() {
      setClicked(initial => !initial);
    }
  return (
    <nav className='mx-auto px-6 py-4 text-white bg-blue min-h-[10%]'>
        <div className='flex items-center justify-between'>
            {
                /*Logo */
               
            }
             <Link to = "/" className='text-xl font-semibold hover:text-beige'>Zorvia</Link>
             {/*Menu items */}
             <div className='hidden sm:flex items-center justify-between space-x-10'>
                <Link to={'/shop'} className='hover:text-beige'>Shop</Link>
                <Link to={'/cart'}  className='hover:text-beige'>About</Link>
                <Link to={'/cart'}  className='hover:text-beige'>Cart</Link>
             </div>
             <button id="menu-btn" class = {`z-30 block sm:hidden focus:outline-none hamburger ${clicked == true ? 'open': ''}`} onClick={handleClick}>
                <span class = "hamburger-top"></span>
                <span class = "hamburger-middle"></span>
                <span class = "hamburger-bottom"></span>
            </button>
        </div>
        <div id="menu" class={`fixed inset-0 z-20 ${!clicked ? 'hidden' : '' } flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-blue`}>
              <div class="w-full py-3 text-center">
                <Link to = "/" class = "block hover:text-softRed" onClick={() => setClicked(initial => !initial)}>Home</Link>
            </div>
             <div class="w-full py-3 text-center">
                <Link to = "Shop" class = "block hover:text-softRed" onClick={() => setClicked(initial => !initial)}>Shop</Link>
            </div>
            <div class="w-full py-3 text-center">
                <Link to = "Cart" class = "block hover:text-softRed" onClick={() => setClicked(initial => !initial)}>Cart</Link>
            </div>
        </div>

    </nav>
  )
}
