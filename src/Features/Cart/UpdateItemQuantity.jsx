import React from 'react'
import { useDispatch } from 'react-redux'
import { decreaseItemQuantity, increaseItemQuantity, deleteProduct} from './cartSlice';
export default function UpdateItemQuantity({quantity, id}) {
    const dispatch = useDispatch();

 
  return (
    <div className='flex flex-row items-center space-x-2 '>
        <button className='px-4 py-2 rounded-full bg-yellow text-white hover:opacity-80 hover:cursor-pointer transition-all' onClick = {() => dispatch(increaseItemQuantity(id))}>+</button>
        <span>{quantity}</span>
        <button className='px-4 py-2 rounded-full bg-yellow text-white hover:opacity-80 hover:cursor-pointer transition-all duration-300' onClick={()=> dispatch(decreaseItemQuantity(id))}>-</button>
        <i class="fa-solid fa-trash fa-lg cursor-pointer hover:opacity-80"onClick={()=> dispatch(deleteProduct(id))}></i>
    </div>
  )
}
