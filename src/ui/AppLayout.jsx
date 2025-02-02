import React from 'react'
import { Outlet, useNavigate, useNavigation } from 'react-router-dom'
import Header from './Header'
import Loader from './Loader';

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading"
  return (
    
    <div className='mx-auto'>
      <Header/>
      {isLoading && <Loader/>}
      
        <Outlet/>
    </div>
  )
}
