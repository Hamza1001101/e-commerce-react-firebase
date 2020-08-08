import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Switch, Route } from 'react-router-dom';
import Shop from './pages/shop/Shop';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Shop />
      </Switch>
    </div>
  );
}

export default App;

/**
 *  <Route path, exact, param   />
 *
 */
