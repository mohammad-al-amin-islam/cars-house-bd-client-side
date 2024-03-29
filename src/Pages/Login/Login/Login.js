import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import carImg from "../../../images/login.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firesbase.init";
import SocialSignIn from "../../Shared/SocialSignIn/SocialSignIn";
import Loading from "../../Shared/Loading/Loading";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useToken from "../../../hooks/useToken";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, anotherError] =
    useSendPasswordResetEmail(auth);

  const [token] = useToken(user);

  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef("");
  let getError;
  if (error || anotherError) {
    getError = (
      <p>
        {error?.message}
        {anotherError?.message}
      </p>
    );
  }
  if (loading || sending) {
    return <Loading></Loading>;
  }
  const handleLoginForm = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    await signInWithEmailAndPassword(email, password);
    // const { data } = await axios.post('https://cars-house-bd-server-side.onrender.com/jwtlogin', { email });
    // localStorage.setItem('accessToken', data.token);
    // navigate(from, { replace: true });
  };

  let from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }
  const handleResetBtn = async (event) => {
    const resetEmail = emailRef.current.value;
    if (resetEmail) {
      await sendPasswordResetEmail(resetEmail);
      toast("Reset Email Sent");
    } else {
      toast("Please Give Email first");
    }
  };
  return (
    <div
      className="bg-light w-100 d-flex align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="container ">
        <div className="row">
          <div className="col-lg-6">
            <div className="d-none d-lg-block p-5 text-center ">
              <h3>Welcome to Cars House BD</h3>
              <img className="img-fluid" src={carImg} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="w-100 text-center shadow-lg px-5 py-3 rounded bg-info">
              <div className="text-white mt-3">
                <h3>Cars House BD</h3>
                <h4>Log In Here</h4>
              </div>

              <Form onSubmit={handleLoginForm}>
                <Form.Control
                  ref={emailRef}
                  size="lg"
                  type="text"
                  name="email"
                  placeholder="Email"
                  required
                />
                <br />
                <Form.Control
                  size="lg"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <br />
                {getError}
                <p className="fw-bold">
                  Forgot Password?{" "}
                  <button
                    onClick={handleResetBtn}
                    className="btn btn-link fw-bold text-success text-decoration-none"
                  >
                    Reset Here
                  </button>
                </p>
                <button className="btn btn-secondary w-100 p-3" type="submit">
                  Log In
                </button>
              </Form>
              <SocialSignIn></SocialSignIn>
              <p className="mt-3 text-white ">
                Don't have an account?{" "}
                <Link
                  className="text-success text-decoration-none "
                  to="/register"
                >
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Login;
