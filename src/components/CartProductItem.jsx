import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeCountOfCartProduct } from '../actions/index.js';
import { deleteCartProduct } from '../actions/index.js';

let CartProductItem = (props) => {

  let changeCountOfProduct = (newVal) => {
    let changeInd = props.cart.findIndex( (product) => (product.slug == props.slug) );
    let updatedCart = props.cart.map( (product, ind) => {
      if(ind == changeInd) {
        product.count = newVal;
      }
      return product;
    });

    props.dispatch( changeCountOfCartProduct(updatedCart) );
  };

  let countUp = (evt) => {
    evt.target.nextElementSibling.value = +evt.target.nextElementSibling.value + 1;
    changeCountOfProduct(+evt.target.nextElementSibling.value);
  }

  let countDown = (evt) => {
    // if(evt.target.previousElementSibling.value <= 1) {
    //   alert('You can\'t order less than 1 product ');
    //   return;
    // }
    evt.target.previousElementSibling.value -= 1;
    changeCountOfProduct(+evt.target.previousElementSibling.value);
  }

  let deleteCartItem = (evt) => {
    evt.preventDefault();
    let updatedCart = props.cart.filter( (el) => (el.slug !== props.slug) );
    props.dispatch( deleteCartProduct(updatedCart) );
  }

  let onInputValueChange = (evt) => {
    // if( !parseInt(evt.target.value) ) {
    //   alert('Incorrect data');
    //   return;
    // }
    changeCountOfProduct( parseInt(evt.target.value) );
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
          <input className='cartProductItem__count' type='number' min='1' defaultValue='1' onChange={onInputValueChange} required />
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