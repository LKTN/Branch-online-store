import React from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem.jsx';

let ProductList = (props) => {
  let checkedBrands;

  if(props.checkedBrands.length == 0){
    checkedBrands = props.brands;
  } else {
    checkedBrands = props.checkedBrands
  }

  let lists = props.data.map( (product, ind) => {
    if(product.price >= props.filterFrom && product.price <= props.filterTo && checkedBrands.find( brand => brand == product.brand)){
      return <ProductItem name={product.name} price={product.price} brand={product.brand} slug={product.slug} key={ind} />
    }
      return false
  });

  let filteredList = []

  lists.filter(productItem => {
    if(productItem != false) {
      filteredList.push(productItem);
    }
  });

  if(filteredList.length == 0) {
    alert('No products with these parameters. Please change parameters');
    filteredList = props.data.map( (product, ind) => {
      return <ProductItem name={product.name} price={product.price} brand={product.brand} slug={product.slug} key={ind} />
    });
  };

  filteredList.splice(props.showedItems);

  return (
    <ul className='productList'>
      {filteredList}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    brands: state.brands,
    showedItems: state.showedItems,
    checkedBrands: state.checkedBrands,
    filterFrom: state.filterFrom,
    filterTo: state.filterTo
  }
}

ProductList = connect(mapStateToProps)(ProductList);

export default ProductList;