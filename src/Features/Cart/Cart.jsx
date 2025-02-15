import React from 'react';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cart } = useSelector(state => state.cart);
  const total = cart.reduce((acc, item) => acc + item.totalPrice, 0).toFixed(2);
  const isCartEmpty = cart.length === 0;

  return (
    <div className="container mx-auto p-6 md:p-12 flex flex-col justify-center min-h-[85vh]">
      {!isCartEmpty ? (
        <>
          <div className='flex flex-col space-y-4 divide-y divide-gray-300'>
            {cart.map(item => (
              <CartItem
                key={item.id} 
                title={item.title}
                price={item.totalPrice}
                id={item.id}
                quantity={item.quantity}
              />
            ))}
          </div>
          <div className='mt-10 w-full border-b-2 border-blue mb-4'></div>
          <h4 className='text-xl text-blue font-bold'>
            SubTotal: <span className='font-bold'>${total}</span>
          </h4>
        </>
      ) : (
        <p>
          Cart is Empty. <Link to="/shop" className='font-blue underline'>Back to Shop</Link>
        </p>
      )}
    </div>
  );
}