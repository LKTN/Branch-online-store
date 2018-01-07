import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateCartProducts } from '../actions/index.js';
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

    props.dispatch( updateCartProducts(updatedCart) );
  };

  let countUp = (evt) => {
    let newValue = +evt.target.nextElementSibling.value + 1;
    validateCount(evt.target.nextElementSibling, newValue)
    evt.target.nextElementSibling.value = newValue;
    changeCountOfProduct(newValue);
  }

  let countDown = (evt) => {
    let newValue = evt.target.previousElementSibling.value - 1;
    if(newValue < 1) {
      alert('You can\'t order less than 1 item');
      return;
    }
    evt.target.previousElementSibling.value = newValue;
    validateCount(evt.target.previousElementSibling, newValue)
    changeCountOfProduct(newValue);
  }

  let onInputValueChange = (evt) => {
    let newValue = evt.target.value;
    if( isNaN(newValue) || newValue < 1 ){
      newValue = 0;
    }

    validateCount(evt.target, newValue);
    changeCountOfProduct( newValue );
  }

  let deleteCartItem = (evt) => {
    evt.preventDefault();
    let updatedCart = props.cart.filter( (el) => (el.slug !== props.slug) );
    props.dispatch( deleteCartProduct(updatedCart) );
  }

  let validateCount = (elem, value) => {
    if(value > 0) {
      elem.classList.remove('cartProductItem__count--invalid');
      return true;
    }
    elem.classList.add('cartProductItem__count--invalid');
    return false;
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
          <button className='cartProductItem__countUp' type='button' onClick={countUp}></button>
          <input 
            className='cartProductItem__count' 
            type='number' 
            defaultValue={props.count} 
            onChange={onInputValueChange} 
            min='1' 
            required 
          />
          <button className='cartProductItem__countDown' type='button' onClick={countDown}></button>
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