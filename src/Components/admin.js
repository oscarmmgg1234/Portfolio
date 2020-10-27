import React from "react"
import firebase from "firebase";
import firebaseui from "firebaseui";
import {Link} from "react-router-dom";

export default class admin extends React.Component{

componentDidMount() {

    var firebaseConfig = {
        apiKey: "AIzaSyCLVMM8vmHBNT--ldKCBZmmUi5IEv-Ed1o",
        authDomain: "webportf-f8d66.firebaseapp.com",
        databaseURL: "https://webportf-f8d66.firebaseio.com",
        projectId: "webportf-f8d66",
        storageBucket: "webportf-f8d66.appspot.com",
        messagingSenderId: "26027074277",
        appId: "1:26027074277:web:448a6046ae80ce973aea0c",
        measurementId: "G-LXZBXVH5S6"
    };
    var firebase = require('firebase');
    var firebaseui = require('firebaseui');
    firebase.initializeApp(firebaseConfig);
    var ui = new firebaseui.auth.AuthUI(firebase.auth());

    ui.start('#firebaseui-auth-container', {
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        // Other config options...
    });
    var uiConfig = {
        callbacks: {
            signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                // User successfully signed in.
                // Return type determines whether we continue the redirect automatically
                // or whether we leave that to developer to handle.
                return true;
            },

        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'redirect',
        signInSuccessUrl: 'https://webportf-f8d66.firebaseapp.com/#dashboard',
        signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,

        ],

    };
    if (ui.isPendingRedirect()) {
        ui.start('#firebaseui-auth-container', uiConfig);
    }
}z

    render() {

        return (
            <>
                <div className={'loginPage'}>
                    <h1 id={'loginTitle'}>ADMINISTRATOR Sign In</h1>
                <div id="firebaseui-auth-container"></div>

                </div>

                </>
        )

    }
};