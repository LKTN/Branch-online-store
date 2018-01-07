import React from 'react';
import { connect } from 'react-redux';
import CartProductList from './CartProductList.jsx';
import { updateCartProducts } from '../actions/index.js';
import { deleteCartProducts } from '../actions/index.js';

let FormCartProduct = (props) => {
  let totalAmount = 0;
  for (var i = props.cart.length - 1; i >= 0; i--) {
    totalAmount += props.cart[i].count * props.cart[i].price;
  }
  
  let onSubmitForm = (evt) => {
    evt.preventDefault();
    var request = new XMLHttpRequest();
    request.open('POST', 'somewhere.php');
    request.setRequestHeader('accept', 'application/json');
    
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        var json = JSON.parse(request.responseText);

        alert('Order has submitted');
        props.dispatch( deleteCartProducts() )

        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('tel').value = '';
        document.getElementById('address').value = '';
        document.getElementById('comment').value = '';
      }
      
      if (request.readyState === 4 && request.status >= 400) {
        alert('Some err. Try again later');
      }

    }

    let cartData = props.cart.map( (product) => ({
      slug: product.slug,
      count: product.count
    }) )

    let data = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      tel: document.getElementById('tel').value,
      address: document.getElementById('address').value,
      comment: document.getElementById('comment').value,
      cartData: cartData
    }

    request.send( JSON.stringify(data) );

  }

  return (
    <form className='formCartProduct' onSubmit={onSubmitForm}>
      <h1 className='formCartProduct__headline'>Shopping Cart</h1>
      <CartProductList />
      
      <h2 className='formCartProduct__totalAmount'>
        Total amount of the order: {totalAmount.toLocaleString('de-DE', { style: 'currency', currency: 'USD' })}
      </h2>
      <fieldset className='formCartProduct__userData'>
        <input className='formCartProduct__input' id='name' placeholder='Your name' required />
        <input className='formCartProduct__input' id='email' type='email' placeholder='Email' required />
        <input className='formCartProduct__input' id='tel' type='tel' placeholder='Phone number' required />
        <input className='formCartProduct__input' id='address' placeholder='Delivery address' required />
        <textarea className='formCartProduct__textarea' id='comment' placeholder='Your comment' required></textarea>
      </fieldset>

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
