const Header = () => {
  return (
    <header className="header">
      <div className="SpeedAuction-logo">
        <a href="/">
          <img
            src="/SpeedAuction.png"
            alt="SpeedAuction"
            className="left-logo"
          />
        </a>
      </div>
      <nav>
        <ul className="links">
          <a href="/login">
            <li>Login</li>
          </a>
          <a href="/signup">
            <li>Sign up</li>
          </a>
        </ul>
      </nav>
      <div className="Profile-log">
        <a href="/profile">
          <img src="/Profile.png" alt="Profile" className="right-logo" />
        </a>
      </div>
    </header>
  );
};

export default Header;
