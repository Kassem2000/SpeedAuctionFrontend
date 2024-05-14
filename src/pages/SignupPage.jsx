import React, { useState } from "react";
import "./pageCss/signupPage.css";
import HeroImage from "../components/HeroImage";

const SignupPage = () => {
  //values objects
  const [values, setValues] = useState({
    username: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    address: "",
    city: "",
    country: "",
    postal_code: "",
    password: "",
    confirmpassword: "",
  });

  return (
    <HeroImage>
      <div className="signup-page">
        <form className="signup-form">
          <h1 signup-form-title>Sign up</h1>
          <div className="signup-input-grid">
            <div className="FormInput">
              <label className="signup-label"></label>
              <input className="signup-input" />
            </div>
            <span className="signup-span"></span>
          </div>
          <button className="signup_submit_btn">Sign up</button>
        </form>
      </div>
    </HeroImage>
  );
};

export default SignupPage;
