import React, { useEffect } from 'react';
import { getStoreData } from '../../services/apiStore';
import { Outlet, useLoaderData, useParams, useSearchParams } from 'react-router-dom';
import ProductItem from './ProductItem';
import { useState } from 'react';

export default function Shop() {
  const initialData = useLoaderData();
  const [shopData, setShopData] = useState(initialData);
  const [searchParams, setSearchParams] = useSearchParams();
  const [dropDown, setDropDown] = useState('');
  const [categoryDropdown, setCategoryDropdown] = useState('');
  const sortBy = searchParams.get('sortBy');
  const category = searchParams.get('category');
  const params = useParams();
  const categories = initialData.map((el) => el.category);
  const categoriesUnique = [...new Set(categories)];

  useEffect(() => {
    let filteredData = [...initialData];

    if (category) {
      filteredData = filteredData.filter((item) => item.category === category);
    }

    if (sortBy === 'asc') {
      filteredData.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'desc') {
      filteredData.sort((a, b) => b.price - a.price);
    }

    setShopData(filteredData);
  }, [sortBy, category, initialData]);

  function handleChangeCategory(event) {
    const { value } = event.target;
    setCategoryDropdown(value);
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('category', value);
    setSearchParams(newSearchParams);
  }

  function handleChange(event) {
    const { value } = event.target;
    setDropDown(value);
    const newSearchParams = new URLSearchParams(searchParams);
    if (value === 'ascending') {
      newSearchParams.set('sortBy', 'asc');
    } else if (value === 'descending') {
      newSearchParams.set('sortBy', 'desc');
    }
    setSearchParams(newSearchParams);
  }

  return (
    <>
      {!params.productId && (
        <div className="container mx-auto p-6 bg-white">
          <div className="flex flex-col space-y-20">
            <div className="flex space-x-4 mx-auto">
              <select value={categoryDropdown} onChange={handleChangeCategory} className="focus:outline-none">
                <option value="choose">Category Filter</option>
                {categoriesUnique.map((el) => (
                  <option value={el} key={el}>
                    {el}
                  </option>
                ))}
              </select>

              <select value={dropDown} onChange={handleChange} className="focus:outline-none">
                <option value="choose">Price Filter</option>
                <option value="ascending">Price: Low to High</option>
                <option value="descending">Price: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-20">
              {shopData.map((item) => (
                <ProductItem
                  title={item.title}
                  category={item.category}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  key={item.id}
                  id={item.id}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
}

export async function loader({ request, params }) {
  const data = await getStoreData();
  return data;
}