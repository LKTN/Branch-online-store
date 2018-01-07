import React from 'react';
import Logo from './Logo.jsx';
import SectionList from './SectionList.jsx';
import CartLink from './CartLink.jsx';


let Header = () => {
  return (
    <section className='header'>
      <Logo />
      <SectionList />
      <CartLink />
    </section>
  );
};

export default Header;