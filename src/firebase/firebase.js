/**
 * Firebase configurations.
 */

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDLWjXb1Fj3nxIhN0GDD_p3PyuXqGbLTh4',
  authDomain: 'e-commerce-e7777.firebaseapp.com',
  databaseURL: 'https://e-commerce-e7777.firebaseio.com',
  projectId: 'e-commerce-e7777',
  storageBucket: 'e-commerce-e7777.appspot.com',
  messagingSenderId: '841055020474',
  appId: '1:841055020474:web:1d01a3b82f360f9dcea983',
  measurementId: 'G-0W0P02K2K3',
};

/**
 * Taking users and put them into our firestore database
 */
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

/**
 * this gives us access to the google auth provider.
 */
const provider = new firebase.auth.GoogleAuthProvider();
//Generate pop up whenever clicked with sing in with google.
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

/*Querying the firestore collection. 
firestore.collection('user').doc('ksifsfksf').collection('cartTime').doc();

firestore.doc('/users/id/cartItems/kiskdf'); */
