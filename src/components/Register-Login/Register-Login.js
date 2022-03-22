import React, { useState } from "react";
import "./register-login.scss";

const RegisterLogin = () => {
  const [formActive, changeFormActive] = useState(false);
  const handleBtnClick = () => {
    changeFormActive(!formActive);
  };
  return (
    <section className={`body ${formActive ? "active" : ""}`}>
      <div className="register__container">
        <div className="blueBg">
          <div className="box signin">
            <h2>Already Have an Account ?</h2>
            <button onClick={handleBtnClick} className="signinBtn">
              Sign in
            </button>
          </div>
          <div className="box signup">
            <h2>Don`t Have an Account ?</h2>
            <button onClick={handleBtnClick} className="signupBtn">
              Sign in
            </button>
          </div>
        </div>
        <div className={`formBx ${formActive ? "active" : ""}`}>
          <div className="form signinForm">
            <form>
              <h3>Sign In</h3>
              <input type="text" placeholder="Username"></input>
              <input type="password" placeholder="Password"></input>
              <input type="submit" value="Login"></input>
              <a href="#" className="forgot">
                Forgot Password
              </a>
            </form>
          </div>

          <div className="form signupForm">
            <form>
              <h3>Sign Up</h3>
              <input type="text" placeholder="Username"></input>
              <input type="text" placeholder="Email Address"></input>
              <input type="password" placeholder="Password"></input>
              <input type="password" placeholder="Confirm Password"></input>
              <input type="submit" value="Register"></input>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterLogin;
