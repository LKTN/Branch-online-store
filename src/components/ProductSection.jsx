import React from 'react';
import { connect } from 'react-redux';
import { addInfoProductData } from '../actions/index.js';
import ProductList from './ProductList.jsx';
import Filter from './Filter.jsx';

let httpRequest = new XMLHttpRequest();
let fallbackData ={
        goodsList: [
          {
            name: 'Item 1',
            price: 8500,
            brand: 'brand1',
            slug: 'item-1'
          },{
            name: 'Item 2',
            price: 8500,
            brand: 'brand2',
            slug: 'item-2'
          },{
            name: 'Item 3',
            price: 8500,
            brand: 'brand3',
            slug: 'item-3'
          },{
            name: 'Item 4',
            price: 8500,
            brand: 'brand1',
            slug: 'item-4'
          },{
            name: 'Item 5',
            price: 8500,
            brand: 'brand2',
            slug: 'item-5'
          },{
            name: 'Item 6',
            price: 8500,
            brand: 'brand3',
            slug: 'item-6'
          },{
            name: 'Item 7',
            price: 8500,
            brand: 'brand1',
            slug: 'item-7'
          },{
            name: 'Item 8',
            price: 8500,
            brand: 'brand2',
            slug: 'item-8'
          },{
            name: 'Item 9',
            price: 8500,
            brand: 'brand3',
            slug: 'item-9'
          },{
            name: 'Item 10',
            price: 8500,
            brand: 'brand3',
            slug: 'item-10'
          },{
            name: 'Item 11',
            price: 8500,
            brand: 'brand3',
            slug: 'item-11'
          },{
            name: 'Item 12',
            price: 8500,
            brand: 'brand3',
            slug: 'item-12'
          },{
            name: 'Item 13',
            price: 8500,
            brand: 'brand3',
            slug: 'item-13'
          }
        ]
}
let goodsData = fallbackData;

httpRequest.onreadystatechange = function() {
  try {
    if (httpRequest.readyState == 4 & httpRequest.status == 200) {
      goodsData = JSON.parse(httpRequest.responseText);
    }
  } catch (e) {
    // console.log(e)
  }
};

httpRequest.open('GET', 'somewhere', true);
httpRequest.send();

let ProductSection = (props) => {
  let brands = [];

  for (var i = goodsData.goodsList.length - 1; i >= 0; i--) {
    if( !brands.find( brand => brand === goodsData.goodsList[i].brand) ){
      brands.push(goodsData.goodsList[i].brand)
    }
  }

  props.dispatch( addInfoProductData(goodsData.goodsList.length, brands) )

  return (
    <section className='productSection'>
      <h1 className='productSection__headline'>Product category #1</h1>
      <ProductList data={goodsData.goodsList} />
      <Filter />
    </section>
  );
};

ProductSection = connect()(ProductSection);

export default ProductSection;