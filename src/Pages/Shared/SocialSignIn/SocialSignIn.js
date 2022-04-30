import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firesbase.init';
import googleLogo from '../../../images/google.png'

const SocialSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            navigate('/home');
        }
    }, [user, navigate]);

    let getError;
    if (error) {
        getError = error.message;
    }

    return (
        <div>
            <div className='d-flex align-items-center justify-content-center my-3'>
                <div style={{ height: '2px' }} className='bg-danger w-25 me-3'></div>
                <p className='text-white mt-3'>Or Login With</p>
                <div style={{ height: '2px' }} className='bg-danger w-25 ms-3'></div>
            </div>
            {getError}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-success w-50'>
                    <img width='25px' className='me-3' src={googleLogo} alt="" />
                    Sign in
                </button>
            </div>
        </div>
    );
};

export default SocialSignIn;