import React, { useState } from "react";
import Signupform from "../components/Signupform";

const SignupPage = () => {
  //values objects
  const [values, setValues] = useState({
    username: "",
    name: "",
    lastname: "",
    phonenumber: "",
    email: "",
    adress: "",
    city: "",
    postalcode: "",
    password: "",
    comfirmpassword: "",
  });
  //inputs
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 4-16 character and unique without any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{4,16}$",
      required: true,
    },
    {
      id: 2,
      name: "name",
      type: "text",
      placeholder: "name",
      errorMessage: "cannot be emty",
      label: "Name",
      required: true,
    },
    {
      id: 3,
      name: "lastname",
      type: "text",
      placeholder: "Lastname",
      errorMessage: "cannot be emty",
      label: "Lastname",
      required: true,
    },
    {
      id: 4,
      name: "Phonenumber",
      type: "text",
      placeholder: "Phone number",
      errorMessage: "cannot be emty",
      label: "Phone number",
      required: true,
    },
    {
      id: 5,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Enter a valid email!",
      label: "Email",
      required: true,
    },
    {
      id: 6,
      name: "adress",
      type: "text",
      placeholder: "Adress",
      errorMessage: "cannot be emty",
      label: "Adress",
      required: true,
    },
    {
      id: 7,
      name: "city",
      type: "text",
      placeholder: "City",
      errorMessage: "cannot be emty",
      label: "City",
      required: true,
    },
    {
      id: 8,
      name: "podtalcode",
      type: "text",
      placeholder: "Postal Code",
      errorMessage: "cannot be emty",
      label: "Postal Code",
      required: true,
    },
    {
      id: 9,
      name: "password",
      type: "Password",
      placeholder: "Password",
      errorMessage:
        "Password should be 6-20 character and include at least 1 letter, 1 number, and 1special character!",
      label: "Password",
      pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,20}$",
      required: true,
    },
    {
      id: 10,
      name: "comfirmpassword",
      type: "Password",
      placeholder: "Comfirm Password",
      errorMessage: "PassWord Don't match!",
      label: "comfirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault(); // if you dont write this once click on submit  the page will only reload.... viktigt
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  return (
    <div className="signup-page">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1 className="signup-form-title">Sign Up</h1>
        <div className="signup-input-grid">
          {inputs.map((input) => (
            <Signupform
              key={input.id}
              {...input}
              values={values[input.name]}
              onChange={onChange}
            />
          ))}
        </div>
        <button className="signup-submit-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
