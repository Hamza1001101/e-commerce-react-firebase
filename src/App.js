import React, { Component } from 'react';

import { auth, createUserProfileDocument } from './firebase/firebase';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions';
import { selectCurrentUser } from './redux/user/user-selector';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/Header';

import SingUpAndSingIn from './pages/sing-in-and -sing-up/SingUpAndSingIn';
import Shop from './pages/shop/Shop';
import Checkout from './pages/checkout/Checkout';
import HomePage from './pages/homepage/HomePage';
import './App.css';

class App extends Component {
  /**
   * import to unsubscribe the auth state
   * other wise this will lead some memory leak.
   */
  unsubscribeFromAuth = null;

  componentDidMount() {
    //open subscribtion
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //createUserProfileDocument(user);
      // this.setState({ currentUser: user });
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // userRef.onSnapshot((snapShot) => {
        //   this.setState({
        //     currentUser: { id: snapShot.id, ...snapShot.data() },
        //   });
        // });
        userRef.onSnapshot((snapShot) => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      this.props.setCurrentUser(userAuth);
    });
  }
  /**
   * Unsubscribing the auth state whenever the component will unmount.
   * close the subscribtion.
   */
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shop} />
          <Route
            exact
            path='/Signin'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <SingUpAndSingIn />
            }
          />
          <Route exact path='/checkout' component={Checkout} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
