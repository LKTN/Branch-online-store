import React from 'react';
import { connect } from 'react-redux';
import { applyFilterForm } from '../actions/index.js';

let FormFilter = (props) => {
  let filterFrom, filterTo;
  let brandsArray = [];
  let listBrands = props.brands.map((brand, ind) => (
      <li className='formFilter__item' key={ind}>
        <label className='formFilter__label'>
          <input type='checkbox' value={brand} className='formFilter__checkbox' ref={(checkbox) => {brandsArray.push(checkbox)}} />{brand}
        </label>
      </li>
    )
  )

  let handleForm = (evt) => {
    evt.preventDefault();
    let checkedBrands = [];

    if(filterFrom.value < 0 
      || filterTo.value < 0 
      || !Number.isInteger(Math.round(filterFrom.value)) 
      || !Number.isInteger(Math.round(filterTo.value))
      ) {
      alert('Incorrect data');
      return;
    }

    brandsArray.forEach( (checkbox) => {
      checkbox.checked ? checkedBrands.push(checkbox.value) : '';
    });

    props.dispatch( applyFilterForm(filterFrom.value, filterTo.value, checkedBrands) )

  }

  return (
    <form className='formFilter'>
      <fieldset className='formFilter__fieldset'>
        <legend className='formFilter__legend'>Price</legend>
        <input className='formFilter__inputRange' defaultValue='0' ref={(inputFrom) => {filterFrom = inputFrom}}/>
        <span className='formFilter__span'> — </span>
        <input className='formFilter__inputRange' defaultValue='100000' ref={(inputTo) => {filterTo = inputTo}} />
      </fieldset>

      <fieldset className='formFilter__fieldset'>
        <legend className='formFilter__legend'>Brand</legend>
        <ul className='formFilter__brandList'>
          {listBrands}          
        </ul>
      </fieldset>

      <button type='submit' className='formFilter__submit' onClick={handleForm}>
        Filter
      </button>
      <button type='reset' className='formFilter__reset'>
        Reset
      </button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    brands: state.brands
  }
}

FormFilter = connect(mapStateToProps)(FormFilter);

export default FormFilter;