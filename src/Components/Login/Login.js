import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="loginContainer">
      <div className="backgroundLogin"></div>
      <div className="containerLogin">
        <div className="loginWithin">
          <Link to="/">
            <p className="back">Back</p>
          </Link>
          <h1 className="titleLogin">Welcome back</h1>
          <form className="formLogin">
            <h3 className="h3Login">Email</h3>
            <input
              className="inputLogin"
              type="text"
              placeholder="Enter your email..."
            ></input>
            <div className="h3_P_Login">
              <h3 className="h3Login">Password</h3>
              <p className="pLogin">Forgot your password?</p>
            </div>
            <input
              className="inputLogin"
              type="password"
              placeholder="Enter your password..."
            ></input>
            <input className="inputSesion" type="button" value="Login"></input>
          </form>
          <div className="textRegister">
            <p>Don't have an account?</p>
            <h4>Create one</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
