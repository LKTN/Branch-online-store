import React from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem.jsx';

let ProductList = (props) => {
  let lists = props.data.map( (product, ind) => {
    return <ProductItem name={product.name} price={product.price} brand={product.brand} slug={product.slug} key={ind} />
  });

  lists.splice(props.showedItems);

  return (
    <ul className='productList'>
      {lists}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    showedItems: state.showedItems
  }
}

ProductList = connect(mapStateToProps)(ProductList);

export default ProductList;