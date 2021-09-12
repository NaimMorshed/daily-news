import React, { useRef, useContext } from 'react';
import '../../styles/Auth/Auth.css';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
////////////////////////////////////
import firebase from "firebase/compat/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import firebaseConfig from '../../config/firebaseConfig';

if (!firebase.apps.length)
    firebase.initializeApp(firebaseConfig);
else
    firebase.app();
////////////////////////////////////

const Auth = () => {
    // eslint-disable-next-line no-unused-vars
    const [auth, setAuth, nav, setNav] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const emailRef = useRef(null);
    const passRef = useRef(null);

    const submit = event => {
        event.preventDefault();
    }

    const googleClick = () => {
        const auth = getAuth();
        auth.languageCode = 'it';

        const provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        provider.setCustomParameters({
            'login_hint': 'user@example.com'
        });

        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <div className="parent">
            <div>
                <section className="flex flex-col bg-white p-10 rounded">
                    <div className="flex justify-center align-center">
                        <UserIcon />
                    </div>
                    <h1 className="text-4xl font-medium">Sign In</h1>

                    <form
                        onSubmit={submit}
                        className="flex flex-col justify-center align-center"
                    >
                        <input
                            className="pl-3 pr-6 py-2 rounded mt-6 bg-gray-200"
                            type="email"
                            placeholder="Enter your email address"
                            ref={emailRef}
                        />
                        <input
                            className="pl-3 pr-6 py-2 rounded mt-4 bg-gray-200"
                            type="email"
                            placeholder="Enter your password"
                            ref={passRef}
                        />
                        <input
                            type="submit"
                            className="pl-3 pr-6 py-2 rounded mt-4 bg-blue-500 text-white"
                            value="Sign In"
                        />
                    </form>

                    <div className="mt-2">
                        <input type="checkbox" />
                        <span className="ml-2">Remember Me</span>
                    </div>
                </section>
                <section className="bg-gray-300 p-2 mt-3 rounded">
                    <button onClick={googleClick} className="w-full">Google</button>
                </section>
            </div>
        </div>
    );
};

const UserIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
        </svg>
    );
}

export default Auth;