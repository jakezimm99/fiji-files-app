import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase/app';

export const config = {
    apiKey: "AIzaSyBhrtERO8X6K-HV711tl0s43AKpRhKIJDQ",
    authDomain: "fiji-files-fire.firebaseapp.com",
    databaseURL: "https://fiji-files-fire.firebaseio.com",
    projectId: "fiji-files-fire",
    storageBucket: "fiji-files-fire.appspot.com",
    messagingSenderId: "458313364349",
    appId: "1:458313364349:web:dff44971d98985c0"
  };

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
