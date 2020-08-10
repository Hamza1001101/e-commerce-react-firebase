import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Switch, Route } from 'react-router-dom';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import SingUpAndSingIn from './pages/sing-in-and -sing-up/SingUpAndSingIn';
import { auth, createUserProfileDocument } from './firebase/firebase';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions';

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     currentUser: null,
  //   };
  // }

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
          <Route path='/Signin' component={SingUpAndSingIn} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
