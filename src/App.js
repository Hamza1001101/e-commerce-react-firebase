import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Switch, Route } from 'react-router-dom';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import SingUpAndSingIn from './pages/sing-in-and -sing-up/SingUpAndSingIn';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route path='/Signin' component={SingUpAndSingIn} />
      </Switch>
    </div>
  );
}

export default App;

/**
 *  <Route path, exact, param   />
 *
 */
