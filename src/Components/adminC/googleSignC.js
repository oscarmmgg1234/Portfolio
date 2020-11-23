import React from "react";
import firebase from "firebase";
import {Link} from "react-router-dom";
import {FirebaseAuthProvider, IfFirebaseAuthed, IfFirebaseAuthedAnd} from "@react-firebase/auth";
import '../../ComponentsCSS/admin.css';

export default class SingOnC extends React.Component{
    constructor(props) {
        super(props);
        this.auth = false


    }//end of constructor
    render() {
        return (
            <>
                <div className={'loginPage'}>
                    <h1 id={'title'}> ADMIN Login</h1>
                    <FirebaseAuthProvider {...this.props.fConfig} firebase={firebase}>
                    <div className = {'btnContainer'}>
                        <Link to={'/'}> <button id = {'back'}>
                            Back to Home
                        </button></Link>
                        <button id = {'Sbutton'} onClick={() => {
                            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                            firebase.auth().signInWithRedirect(googleAuthProvider);
                        }}>
                            Sign In with Google
                        </button>
                        <button id = {'Obutton'} onClick={() => {
                            firebase.auth().signOut();
                                }}>
                            Sign Out
                        </button>
                        <div>
                            <IfFirebaseAuthedAnd
                                filter={({ providerId, user }) => {
                                    if(!user.email){return false;}
                                    return (
                                        providerId !== "anonymous" &&
                                        user.email
                                    );
                                }}
                            >
                            </IfFirebaseAuthedAnd>
                            <IfFirebaseAuthedAnd filter={({ providerId }) => providerId !== "anonymous"}>
                                {({ providerId ,user}) => {
                                    return <div id = {'auth'}>You are authenticated with { providerId }</div>;
                                }}
                            </IfFirebaseAuthedAnd>
                        </div>
                        <IfFirebaseAuthed>
                            {({user}) => {
                                if(user.email == "oscarmmgg1234@gmail.com") {
                                    return <Link onClick={this.props.Auth} to={'/dashboard'} id={'Link'}>Press To Be Redirected</Link> //only admin could sign in
                                }
                            }}
                        </IfFirebaseAuthed>
                    </div>
                </FirebaseAuthProvider>
                </div>
            </>
        )//end of return
    }//end of render method
}//end of class