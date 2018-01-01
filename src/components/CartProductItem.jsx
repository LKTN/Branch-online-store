import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCartProduct } from '../actions/index.js';


let CartProductItem = (props) => {

  let countUp = (evt) => {
    evt.target.nextElementSibling.value = +evt.target.nextElementSibling.value + 1;
  }

  let countDown = (evt) => {
    if(evt.target.previousElementSibling.value <= 1) {
      alert('You can\'t order less than 1 product ');
      return;
    }
    evt.target.previousElementSibling.value -= 1;
  }

  let deleteCartItem = (evt) => {
    evt.preventDefault();
    let updatedCart = props.cart.filter( (el) => (el.slug !== props.slug) );
    props.dispatch( deleteCartProduct(updatedCart) );
  }

  return (
    <li className='cartProductItem'>
      <div className='cartProductItem__img-linkWrapper'>
        <img className='cartProductItem__image' />
        <Link to='/' className='cartProductItem__link'>{props.name}</Link>
      </div>

      <div className='cartProductItem__price-countWrapper'>
        <span className='cartProductItem__price'>{props.price}</span>
        <div className='cartProductItem__countWrapper'>
          <button className='cartProductItem__countUp' onClick={countUp}></button>
          <input className='cartProductItem__count'  defaultValue='1' onChange={(evt) => {console.log(evt)}} />
          <button className='cartProductItem__countDown' onClick={countDown}></button>
        </div>
      </div>
      <a href='#' className='cartProductItem__delete' onClick={deleteCartItem}>Delete</a>
    </li>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

CartProductItem = connect(mapStateToProps)(CartProductItem);

export default CartProductItem;