import React from 'react';

let FormFilter = () => {
  return (
    <form className='formFilter'>
      <fieldset className='formFilter__fieldset'>
        <legend className='formFilter__legend'>Price</legend>
        <input className='formFilter__inputRange' />
        <span className='formFilter__span'> — </span>
        <input className='formFilter__inputRange' />
      </fieldset>

      <fieldset className='formFilter__fieldset'>
        <legend className='formFilter__legend'>Brand</legend>
        <ul className='formFilter__brandList'>
          <li className='formFilter__item'>
            <label className='formFilter__label'>
              <input type='checkbox' value='brand1' className='formFilter__checkbox' />Brand 1
            </label>
          </li>
          <li className='formFilter__item'>
            <label className='formFilter__label'>
              <input type='checkbox' value='brand1' className='formFilter__checkbox' />Brand 1
            </label>
          </li>
          <li className='formFilter__item'>
            <label className='formFilter__label'>
              <input type='checkbox' value='brand1' className='formFilter__checkbox' />Brand 1
            </label>
          </li>
          <li className='formFilter__item'>
            <label className='formFilter__label'>
              <input type='checkbox' value='brand1' className='formFilter__checkbox' />Brand 1
            </label>
          </li>
          <li className='formFilter__item'>
            <label className='formFilter__label'>
              <input type='checkbox' value='brand1' className='formFilter__checkbox' />Brand 1
            </label>
          </li>
          <li className='formFilter__item'>
            <label className='formFilter__label'>
              <input type='checkbox' value='brand1' className='formFilter__checkbox' />Brand 1
            </label>
          </li>
          <li className='formFilter__item'>
            <label className='formFilter__label'>
              <input type='checkbox' value='brand1' className='formFilter__checkbox' />Brand 1
            </label>
          </li>
          <li className='formFilter__item'>
            <label className='formFilter__label'>
              <input type='checkbox' value='brand1' className='formFilter__checkbox' />Brand 1
            </label>
          </li>          
        </ul>
      </fieldset>


      <button type='submit' className='formFilter__submit'>
        Filter
      </button>
      <button type='reset' className='formFilter__reset'>
        Reset
      </button>
    </form>
  )
}

export default FormFilter;