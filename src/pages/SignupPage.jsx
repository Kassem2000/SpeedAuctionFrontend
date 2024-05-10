import React, { useState } from "react";
import "./pageCss/signupPage.css";
import HeroImage from "../components/HeroImage";

const SignupPage = () => {
  return (
    <HeroImage>
      <div className="register-form">
        <form>
          <h1>Sign up</h1>
          <div className="input-group">
            <label>
              <input type="text" name="Username" placeholder="Usename" />
            </label>
            <label>
              <input type="text" name="Firstname" placeholder="First Name" />
            </label>
            <label>
              <input type="text" name="lastname" placeholder="Last Name" />
            </label>
            <label>
              <input type="text" name="password" placeholder="Password" />
            </label>
            <label>
              <input type="text" name="email" placeholder="Email" />
            </label>
          </div>
          <div className="input-group">
            <label>
              <input type="text" name="Adress" placeholder="Address" />
            </label>
            <label>
              <input type="text" name="Country" placeholder="Country" />
            </label>
            <label>
              <input type="text" name="City" placeholder="City" />
            </label>
            <label>
              <input
                type="text"
                name="phonenumber"
                placeholder="Phone Number "
              />
            </label>
            <label>
              <input type="text" name="postal code" placeholder="Postal Code" />
            </label>
          </div>
          <button type="submit">Confirm</button>
        </form>
      </div>
    </HeroImage>
  );
};

export default SignupPage;
