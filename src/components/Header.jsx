import { Link } from "react-router-dom";
import "./componentCss/header.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { state, dispatch } = useContext(AuthContext);
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
            {state.user ? (
              <li onClick={handleLogout}>LOGOUT</li>
              
            ) : (
              <>
                <Link to="/login">
                  <li>Login</li>
                </Link>
                <Link to="/signup">
                  <li>Sign up</li>
                </Link>
              </>
            )}
          </ul>
        </nav>
        {state.user && (
          <div className="Profile-log">
            <Link to="/profile">
              <img src="/Profile.png" alt="Profile" className="right-logo" />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
