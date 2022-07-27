import { Link } from 'react-router-dom';

function Navigation() {
  return [
    <nav key="nav" id="menu" className="navbar">
      <Link to="/">
        <div className="navbar-header">
          <div className="navbar-brand">
            Freelancr<span className="dot">.</span>
          </div>
        </div>
      </Link>

      <div className="containerr">
        <div>
          <ul className="nav">
            <Link to="/developers">
              <li key="developers" className="nav-p">
                DEVELOPERS
              </li>
            </Link>
            <Link to="/login">
              <li key="login" className="nav-p">
                LOGIN
              </li>
            </Link>
            <Link to="/signup">
              <li key="signup" className="nav-p">
                SIGNUP
              </li>
            </Link>
            <Link to="/">
              <li key="signout" className="nav-p">
                SIGNOUT
              </li>
            </Link>
            <Link to="/profile">
              <li key="profile" className="nav-p">
               My Profile
              </li>
            </Link>
            <Link to="/settings">
              <li key="settings" className="nav-p">
                <i className="fa-solid fa-cog "></i>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>,
  ];
}

export default Navigation;
