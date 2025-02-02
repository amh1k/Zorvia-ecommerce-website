import React, { useEffect } from 'react'
import { getStoreData } from '../../services/apiStore'
import { Outlet, useLoaderData, useParams, useSearchParams } from 'react-router-dom';
import ProductItem from './ProductItem';
import { useState } from 'react';
import { useProducts } from '../../Context/useProduct';

export default function Shop() {
  const {products, setProducts} = useProducts();
  const initialData = useLoaderData()
  const [shopData, setShopData] = useState(initialData);
  const [searchParams, setSearchParams] = useSearchParams();
  const [dropDown, setDropDown] = useState("")
  const sortBy = searchParams.get('sortBy');
  const params = useParams();
  useEffect(()=>{ 
    setProducts(initialData);
    console.log(products)

  }, [setProducts, initialData])
  

  useEffect(function(){
    if(sortBy == 'asc') {
      sortByPrice(true)
    }
    else if (sortBy == 'desc') {
      sortByPrice(false)
    }

  }, [sortBy])
  

  function sortByPrice(isAscending) {
    const sortedData = [...shopData].sort((a, b) => isAscending ? a.price - b.price: b.price - a.price);
    setShopData(sortedData)

}
  // function sortByNone() {
  //   setShopData(initialData)
  // }
  function handleChange(event) {
    const {name, value} = event.target;
    if (value === 'ascending') {
      setSearchParams({sortBy: "asc"})
      setDropDown(value);
       

    }
    else if (value === 'descending') {
      setSearchParams({sortBy: "desc"})
      setDropDown(value);

    }
    // else {
    //   setDropDown(value)
    // }


  }
  console.log(shopData)
  return (
    <>
    
      {!params.productId &&
        <div className='container mx-auto p-6 bg-white '>
       <div className='flex flex-col space-y-20'>
        {/*Filter for men and womens clothing*/}
        <div className='flex space-x-4 mx-auto'>
            <button className = "px-6 py-4 bg-yellow rounded-md">All</button>
            <button>Mens clothing</button>
            <button>Womens clothing</button>
            {/* <button onClick={()=> handleSortClick(true)}>Sort: Low to high</button>
            <button onClick={()=> handleSortClick(false)}>Sort: High to Low</button> */}
            <select value = {dropDown} onChange={handleChange} className='focus:outline-none'>
              <option value = "choose">Select</option>
              <option value = "ascending">Price: Low to High</option>
              <option value = "descending">Price: High to Low</option>
            </select>

        </div>
        {/*Grid for products*/}
        <div className='grid grid-cols-4 gap-x-20'>
          {shopData.map(item => <ProductItem title = {item.title} category={item.category} description={item.description} price = {item.price} image= {item.image} key = {item.id} id = {item.id}/>)}
        </div>
      </div>
      </div>
    }
      <Outlet/>
      </>
    
  )
}
export async function loader({request, params}) {
  const data = await getStoreData();
  return data;


}
