import React, { Component } from 'react';
import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';

import './App.scss';
import GameList from './game/list/GameList.js';
import Menu from './shared/menu/Menu.js';

// Configure and init Firebase
const config = {
  apiKey: "AIzaSyAKxjTppSXReUC-m2qePpSV91UlSnKtQls",
  authDomain: "game-weps.firebaseapp.com",
  databaseURL: "https://game-weps.firebaseio.com",
  projectId: "game-weps",
  storageBucket: "game-weps.appspot.com",
  messagingSenderId: "194202001248"
};
firebase.initializeApp(config);

// Configure FirebaseUI
const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign in
    signInSuccessWithAuthResult: () => false
  },
};

const ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', uiConfig);

class App extends Component {
  render() {
    return (
      <div>
        <div className="menu">
          <Menu />
        </div>
        <div className="content">
          <div id="firebaseui-auth-container"></div>
          <GameList />
        </div>
      </div>
    );
  }
}

export default App;
