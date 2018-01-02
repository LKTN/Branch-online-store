import React from 'react';
import { connect } from 'react-redux';
import CartProductList from './CartProductList.jsx';

let FormCartProduct = (props) => {
  let totalAmount = 0;
  for (var i = props.cart.length - 1; i >= 0; i--) {
    totalAmount += props.cart[i].count * props.cart[i].price;
  }
  
  let onSubmitForm = (evt) => {
    console.log(evt);
  }

  return (
    <form className='formCartProduct' onSubmit={onSubmitForm}>
      <h1 className='formCartProduct__headline'>Shopping Cart</h1>
      <CartProductList />
      <h2 className='formCartProduct__totalAmount'>
        Total amount of the order: {totalAmount.toLocaleString('de-DE', { style: 'currency', currency: 'USD' })}
      </h2>
      <input className='formCartProduct__input' placeholder='Your name' required />
      <input className='formCartProduct__input' type='email' placeholder='Email' required />
      <input className='formCartProduct__input' type='tel' placeholder='Phone number' required />
      <input className='formCartProduct__input' placeholder='Delivery address' required />
      <textarea className='formCartProduct__textarea' placeholder='Your comment' required></textarea>
      <button className='formCartProduct__btn'>Order</button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

FormCartProduct = connect(mapStateToProps)(FormCartProduct);

export default FormCartProduct;
