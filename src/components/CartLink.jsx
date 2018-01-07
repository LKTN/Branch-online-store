import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

let CartLink = (props) => {
  return (
    <div className='cartLink'>
      <Link to='/cart' className='cartLink__link'>{props.countCartItems} {props.countCartItems == 1 ? 'item' : 'items'} in cart</Link>
    </div>
  );
};

const mapStateToProps = state => {
  return { countCartItems: state.countCartItems }
}

CartLink = connect(mapStateToProps)(CartLink);

export default CartLink;