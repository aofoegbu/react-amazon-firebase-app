import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./../../App/Firebase/firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();

    // some fancy firebase login shit here
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // setUserData(user);
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, "\n", errorMessage);
      });
  };

  const register = (e) => {
    e.preventDefault();
    // fancy firebase register
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // setUserData(user);

        console.log(user);
        if (user) {
          navigate("/");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, "\n", errorMessage);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // setUserData({});
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        // An error happened.
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="assets/img/amazon_logo.jpg"
          alt="amazon"
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* {userData && !Object.keys(userData).length ? (
            <button
              type="submit"
              onClick={signIn}
              className="login__signInButton"
            >
              Sign In
            </button>
          ) : (
            <button className="login__signInButton" onClick={logOut}>
              Sign Out
            </button>
          )} */}
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
          <p>
            BY signing in, you agree to Ogelo Amazon Clone's Conditions of Use &
            Sale. Please see our Privacy Notice, Our Cookies Notice and Our
            Internet-based Ads Notice.
          </p>
          <button
            type="submit"
            onClick={register}
            className="login__registerButton"
          >
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
