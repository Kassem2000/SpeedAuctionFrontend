import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./pageCss/loginPage.css";
import HeroImage from "../components/HeroImage";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const {
    state: { user },
    dispatch,
  } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Fill in username and password!");
      return;
    }

    try {
      const { data } = await axios.post(
         "http://localhost:8080/api/auth/signing",
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      );

      dispatch({
        type: "LOGIN",
        payload: data,
      });

      // set user in localStorage
      window.localStorage.setItem("user", JSON.stringify(data));
      console.log("User logged in");

      // redirect use to Home
      return navigate("/profile"); //redirect to profile
    } catch (err) {
      console.log("Error: " + err);
    }
  };

  return (
    <HeroImage>
      <form onSubmit={handleSubmit}>
        <div className="Login">
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
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
