import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function ProductItem({title, category, description,price,image, id}) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`:${id}`)

  }
    
  return (
    <div className='flex flex-col space-y-4  hover:-translate-y-2 hover:cursor-pointer transition-all duration-300' onClick={handleClick}>
      <img src = {image} className='object-fit h-[50%] w-full rounded-md'/>
      <div className='flex flex-col space-y-2 p-6'>
        <h4>{title}</h4>
        <h4 className='font-semibold'>${price}</h4>
      </div>
    </div>
  )
}
