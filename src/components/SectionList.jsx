import React from 'react';
import { Link } from 'react-router-dom';

let SectionList = () => {
  return (
    <ul className='sectionList'>
      <li className='sectionList__item'>
        <Link to='/' className='sectionList__link'>Section 1</Link>
      </li>
      <li className='sectionList__item'>
        <Link to='/' className='sectionList__link'>Section 2</Link>
      </li>
      <li className='sectionList__item'>
        <Link to='/' className='sectionList__link'>Section 3</Link>
      </li>
      <li className='sectionList__item'>
        <Link to='/' className='sectionList__link'>Section 4</Link>
      </li>
    </ul>
  );
};

export default SectionList;