import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../actions/index.js';

let ProductItem = (props) => {
  let formattedPrice = props.price.toLocaleString('de-DE', { style: 'currency', currency: 'USD' });
  
  let handleButtonClick = () => {
    if( !props.cart.find(productInCart => productInCart.slug === props.slug) ){
      props.dispatch( addToCart(props.name, props.price, props.brand, props.slug) )
    } else {
      alert('This product has been added');
    }
  }

  return (
    <li className='productItem'>
      <img className='productItem__image' />
      <Link to='/' className='productItem__link'>{props.name}</Link>
      <div className='productItem__descrWrapper'>
        <span className='productItem__price'>{formattedPrice}</span>
        <button className='productItem__button' onClick={handleButtonClick}>Add to Cart</button>
      </div>
    </li>
  );
};

ProductItem = connect(
    state => ({cart: state.cart})
  )(ProductItem);

export default ProductItem;