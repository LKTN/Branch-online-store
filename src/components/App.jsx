import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header.jsx';
import IndexWrapper from './IndexWrapper.jsx';

let App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Switch>
          <Route exact path='/' component={IndexWrapper} />
          <Route path='/cart' component={ () => <h1>Shopping cart</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  )
};

export default App;