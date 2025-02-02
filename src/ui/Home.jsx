import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className=' p-6 bg-beige'>
      
      <div className="flex flex-col-reverse gap-10 md:flex-row items-center justify-center md:space-x-4 md:space-y-4 min-h-screen  ">
        <div className='flex flex-col space-y-4 '>
        <h1 className='text-4xl font-semibold text-center md:text-left'>Shopping simplified</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quis quos cum doloremque ea quo distinctio in perferendis, ducimus delectus unde sint impedit tempore officiis maiores porro autem! Error, incidunt.</p>
        <div className='mt-5'><Link to = "/shop" className='bg-yellow-500 rounded-sm shadow-sm px-6 py-4 text-white uppercase hover:opacity-80 hover:cursor-pointer w-full sm:w-auto'>Browse now</Link></div>
        </div>
        <img src='src\assets\Hero-image.jpg'  className='w-full md:max-w-[50%] rounded-sm shadow-md'/>

        
      </div>
      
    </div>
  )
}
