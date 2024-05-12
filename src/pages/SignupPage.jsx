import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Signupform from "../components/Signupform";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";


const SignupPage = () => {

  const{dispatch} = useContext(AuthContext);

  const navigate = useNavigate();

  //values objects
  const [values, setValues] = useState({
    username: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    address: "",
    city: "",
    country:"",
    postal_code: "",
    password: "",
    confirmpassword: ""

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
      name: "first_name",
      type: "text",
      placeholder: "name",
      errorMessage: "cannot be emty",
      label: "Name",
      required: true,
    },
    {
      id: 3,
      name: "last_name",
      type: "text",
      placeholder: "Lastname",
      errorMessage: "cannot be emty",
      label: "Lastname",
      required: true,
    },
    {
      id: 4,
      name: "phone_number",
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
      name: "address",
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
      id: 11,
      name: "country",
      type: "text",
      placeholder: "Country",
      errorMessage: "Country cannot be empty",
      label: "Country",
      required: true,
    },
    {
      id: 8,
      name: "postal_code",
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
      name: "confirmpassword",
      type: "Password",
      placeholder: "Confirm Password",
      errorMessage: "PassWord Don't match!",
      label: "confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault(); // if you dont write this once click on submit  the page will only reload.... viktigt

    // Check if passwords match
    if (values.password !== values.confirmpassword) {
      alert("Passwords do not match");
      return;
    }

    const{confirmpassword, ...userData }= values; //exclude comfirmpassword

    try{
      const { data } = await axios.post(
        "http://localhost:8080/api/auth/signup",

        userData, //directly send data not as property
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

       dispatch({
         type: "SIGNUP",
         payload: data,
       });
       window.localStorage.setItem("user", JSON.stringify(data));
       console.log("Succesfull")

       return navigate("/");

    } catch(err){
      console.error("ERROR:" + err);
      alert("Registration Failled");
    }
  };




  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


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
        <button className="signup-submit-btn" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
