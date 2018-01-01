import React from 'react';
import { connect } from 'react-redux';
import { changeTotalCountOfProducts } from '../actions/index.js';
import ProductItem from './ProductItem.jsx';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  };

  componentDidUpdate() {
    this.props.dispatch( changeTotalCountOfProducts(this.filteredItems) )
  };

  render() {
    let checkedBrands;
    if(this.props.checkedBrands.length == 0){
      checkedBrands = this.props.brands;
    } else {
      checkedBrands = this.props.checkedBrands
    }

    let lists = this.props.data.map( (product, ind) => {
      if(product.price >= this.props.filterFrom && product.price <= this.props.filterTo && checkedBrands.find( brand => brand == product.brand)){
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
      filteredList = this.props.data.map( (product, ind) => {
        return <ProductItem name={product.name} price={product.price} brand={product.brand} slug={product.slug} key={ind} />
      });
    };

    this.filteredItems = filteredList.length;

    filteredList.splice(this.props.showedItems);

    return (
      <ul className='productList'>
        {filteredList}
      </ul>
    );
  };
};

const mapStateToProps = state => {
  return {
    brands: state.brands,
    showedItems: state.showedItems,
    checkedBrands: state.checkedBrands,
    filterFrom: state.filterFrom,
    filterTo: state.filterTo
  };
};

ProductList = connect(mapStateToProps)(ProductList);

export default ProductList;