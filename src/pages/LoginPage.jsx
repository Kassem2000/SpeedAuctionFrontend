import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./pageCss/loginPage.css";
import HeroImage from "../components/HeroImage";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <HeroImage>
      <form className="logform">
        <div className="Login">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <Link>Forgot password</Link>
          </div>
          <button type="submit">Login</button>
        </div>
      </form>
    </HeroImage>
  );
};

export default LoginPage;
