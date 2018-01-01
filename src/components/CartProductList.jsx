import React from 'react';
import { connect } from 'react-redux';
import CartProductItem from './CartProductItem.jsx';

let CartProductList = (props) => {
  let cartList = props.cart.map( (item, ind) => (
      <CartProductItem 
      name={item.name} 
      price={item.price.toLocaleString('de-DE', { style: 'currency', currency: 'USD' })} 
      count={item.count} 
      slug={item.slug}
      key={item.slug} />
    )
  );
  return (
    <ul className='cartProductList'>
      {cartList}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

CartProductList = connect(mapStateToProps)(CartProductList);

export default CartProductList;