import React from 'react';
import FormFilter from './FormFilter.jsx';
import ProductSection from './ProductSection.jsx';

let IndexWrapper = () => {
  return (
    <section className='indexWrapper'>
      <FormFilter />
      <ProductSection />    
    </section>
  );
};

export default IndexWrapper;