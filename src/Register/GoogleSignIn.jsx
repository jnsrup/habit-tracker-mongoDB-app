import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';

import { useLocation, useNavigate } from 'react-router';
import app from '../Firebase/firebase.config';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();


 



const GoogleSignIn = () => {

// set navigation 
const navigate = useNavigate();
const location = useLocation();


const handleGoogleSingIn = () =>{
    
    signInWithPopup(auth,provider)
    .then((result) => {
        const user = result.user;
        console.log( "googleLogin user:",user);
        navigate(`${location.state ? location.state : "/" }`)
    }) 
}

    
    return (
        <div>
            <button
  onClick={handleGoogleSingIn}
  className="btn btn-neutral flex items-center justify-center gap-2 bg-gray-900 text-white    hover:bg-red-600 transition"
>
  <img
    src="https://www.svgrepo.com/show/475656/google-color.svg"
    alt="Google"
    className="w-5 h-5"
  />
  Sign in with Google
</button>
        </div>
    );
};

export default GoogleSignIn;