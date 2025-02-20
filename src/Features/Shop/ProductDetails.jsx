import React from 'react'
import { useState } from 'react';
import { useFetcher, useLoaderData, useParams } from 'react-router-dom'
import Loader from '../../ui/Loader';
import { useEffect } from 'react';
import { getStoreData } from '../../services/apiStore';
import { useDispatch } from 'react-redux';
import {addProduct} from '../Cart/cartSlice'


export default function ProductDetails() {

  const [addToCart, setAddToCart] = useState(false);
  const dispatch = useDispatch();
  const products = useLoaderData();
  const {productId} = useParams();
  console.log(productId)
  const product = products.find(item => item.id === Number(productId.replace(":", "")) );
  const {title, image, category, price, description} = product
  function handleClick() { 
    if(!product) return;
    const newProduct = {
      ...product, 
      quantity: 1,
      totalPrice: product.price
    }
    
   
     dispatch(addProduct(newProduct));
     setAddToCart(true);
  }
  

 
     
  return (
   
    <>
       {!products && <Loader/>}
       
        { products && <div className='flex items-center justify-center min-h-[90vh] w-full mt-10'>
            <div className='flex flex-col items-center space-y-4 md:flex-row md:space-y-0 space-x-4 w-full'>
             {/*Left Box */}
             <div className='w-[50%] flex items-center justify-center'>
                <img src=  {image}  className='max-w-full h-auto md:max-w-60 sm:max-w-50' />
                

             </div>
             {/*Right box */}
             <div className='flex flex-col space-y-4 w-[50%]'>
               <h4 className='text-xs  uppercase'>{category}</h4>
               <h1 className='text-2xl md:text-3xl md:max-w-md font-bold'>{title}</h1>
               <h4 className='text-xl font-semibold text-gray-600'>${price}</h4>
               <div className=''> 
               <button onClick = {handleClick} className = "px-6 py-4 border-2 border-yellow focus:outline-none hover:bg-yellow hover:cursor-pointer transition-all duration-300" >Add To Cart</button>
               {addToCart && <p className='opacity-80 text-gray-600'>Item added to Cart</p>}
               </div>
               <div className=''>
                
                <h4 className='text-xl font-bold'>Product Description</h4>
                <p className='md:max-w-md'>{description}</p>
               </div>
             </div>
             </div>

        </div>}
       
    </>
  )
}
export async function loader({request, params}) {
  const data = await getStoreData();
  return data;


}
