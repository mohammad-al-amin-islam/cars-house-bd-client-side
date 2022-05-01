import React from 'react';
import { Form } from 'react-bootstrap';
import carImg from '../../../images/login.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firesbase.init';
import SocialSignIn from '../../Shared/SocialSignIn/SocialSignIn';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let getError;
    if (error) {
        getError = error.message;
    }
    if (loading) {
        return <Loading></Loading>
    }
    const handleLoginForm = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password);
    }

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className="bg-light w-100 d-flex align-items-center" style={{ height: '100vh' }}>
            <div className='container '>
                <div className="row">
                    <div className="col-lg-6">
                        <div className='d-none d-lg-block p-5 text-center '>
                            <h3 >Welcome to Cars House BD</h3>
                            <img className='img-fluid' src={carImg} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className='w-100 text-center shadow-lg px-5 py-3 rounded bg-info'>
                            <div className="text-white mt-3">
                                <h3 >Cars House BD</h3>
                                <h4>Log In Here</h4>
                            </div>

                            <Form onSubmit={handleLoginForm}>
                                <Form.Control size="lg" type="text" name='email' placeholder="Email" required />
                                <br />
                                <Form.Control size="lg" type="password" name='password' placeholder="Password" required />
                                <br />
                                {getError}
                                <button className='btn btn-secondary w-100 p-3' type="submit">Log In</button>
                            </Form>
                            <SocialSignIn></SocialSignIn>
                            <p className='mt-3 text-white '>Don't have an account? <Link className='text-success text-decoration-none ' to='/register'>Register here</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;