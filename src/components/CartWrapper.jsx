import React from 'react';
import CartProductList from './CartProductList.jsx';

let CartWrapper = () => {
  return (
    <section className='cartWrapper'>
      <h1 className='cartWrapper__headline'>Shopping Cart</h1>
      <CartProductList />
    </section>
  );
};

export default CartWrapper;