import {Link} from "react-router-dom"
import './componentCss/header.css'



const Header = () => {
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
