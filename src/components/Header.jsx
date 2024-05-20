import { Link } from "react-router-dom";
import "./componentCss/header.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    //remove user from local storage
    localStorage.removeItem("user");

      //dispatch logout action
  dispatch({
    type: "LOGOUT",
  });

  navigate("/login");
  };



  return (
    <header className="header">
      <div className="SpeedAuction-logo">
        <Link to="/">
          <img
            src="/SpeedAuction.png"
            alt="SpeedAuction"
            className="left-logo"
          />
        </Link>
      </div>
      <div className="navWrapper">
        <nav>
          <ul className="links">
            <Link to="/login">
              <li>Login</li>
            </Link>
            <Link to="/signup">
              <li>Sign up</li>
            </Link>
            <Link to="/signup">
              <li onClick={handleLogout}>LOGOUT </li>
            </Link>
            <Link to="/signup">
            
            </Link>
          </ul>
        </nav>
        <div className="Profile-log">
          <Link to="/profile">
            <img src="/Profile.png" alt="Profile" className="right-logo" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
