

const Header = () => {
  return (
    
    <header className="header">
      <div className="SpeedAuction-logo">
        <img src="/SpeedAuction.png" alt="SpeedAuction" className="left-logo" />
      </div>
      <nav>
        <ul className="links">
          <li>Login</li>
          <li>Sign up</li>
        </ul>
      </nav>
      <div className="Profile-log">
      <img src="/Profile.png" alt="Profile" className="right-logo" />
      </div>
    </header>
  );
};

export default Header
