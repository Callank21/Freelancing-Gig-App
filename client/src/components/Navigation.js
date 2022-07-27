import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

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
            {Auth.loggedIn() ? (
              <>
                <Link to="/settings">
                  <li key="settings" className="nav-p">
                    <i className="fa-solid fa-cog "></i>
                  </li>
                </Link>
                <Link to="/" onClick={Auth.logout}>
                  <li key="login" className="nav-p">
                    LOGOUT
                  </li>
                </Link>
              </>
            ) : (
              <>
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
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>,
  ];
}

export default Navigation;
