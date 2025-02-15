import React from 'react'
import UpdateItemQuantity from './UpdateItemQuantity'
import { useSelector } from 'react-redux'

export default function CartItem({title, price, id, quantity}) {
  return (
    <div className='flex flex-row items-center justify-between'>
        <h4 className='max-w-md'>{title}</h4>
        <div className='flex flex-row space-x-4 items-center'>
            <h4>${price.toFixed(2)}</h4>
            <UpdateItemQuantity quantity={quantity} id = {id}/>
        </div>
    </div>
  )
}
