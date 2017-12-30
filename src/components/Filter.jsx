import React from 'react';
import { connect } from 'react-redux';
import { toggleFilter } from '../actions/index.js';

let Filter = (props) => {
  let displayInFilter = '';
  let hideClass = props.showFilter ? '' : 'filter--hidden';
  let displayed = props.showedItems;
  
  if(props.hiddenItems > 6) {
    displayInFilter = 'View more 6 items';
    displayed += 6;
  }

  if(props.hiddenItems <= 6 && props.hiddenItems > 0) {
    displayInFilter = 'View more ' + props.hiddenItems + ' items';
    displayed += props.hiddenItems;
  }

  return (
    <div className={`filter ${props.className ? props.className : ''} ${hideClass}`} onClick={(evt) => {
        props.dispatch( toggleFilter(displayed) )
      }
    }>
      <span className='filter__text'>{displayInFilter}</span>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    showedItems: state.showedItems,
    totalCountOfProducts: state.totalCountOfProducts,
    showFilter: state.totalCountOfProducts - state.showedItems == 0 ? false : true,
    hiddenItems: state.totalCountOfProducts - state.showedItems
  }
}

Filter = connect(mapStateToProps)(Filter);

export default Filter;