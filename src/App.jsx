import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { getStoreData } from './services/apiStore'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './ui/AppLayout'
import Home from './ui/Home'
import Shop from './Features/Shop/Shop'
import Cart from './Features/Cart/Cart'
import {loader as shopLoader} from './Features/Shop/Shop'
import {loader as productLoader} from './Features/Shop/ProductDetails'
import ProductDetails from './Features/Shop/ProductDetails'
const route = createBrowserRouter([
  {
    element:<AppLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/shop',
        element:<Shop/>,
        loader: shopLoader,
        children: [
          {
            path: ':productId',
            element: <ProductDetails/>,
            loader:productLoader
          }
        ]
      },
      {
        path: '/cart',
        element: <Cart/>
      }
    ] 
  }
])

function App() {
  


  return (
    <RouterProvider router={route}/>
    
  )
}

export default App
