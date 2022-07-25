import { Link } from 'react-router-dom';

function Navigation() {
  return [
    <nav id="menu" className="navbar">
      <Link key="banner" to="/">
        <div className="navbar-header">
          <a className="navbar-brand" href="#/">
            Freelancr<span className="dot">.</span>
          </a>
        </div>
      </Link>

      <div className="containerr">
        <div>
          <ul className="nav">
            <Link to="/developers">
              <li>
                <a href="#developers">DEVELOPERS</a>
              </li>
            </Link>
            <Link to="/login">
              <li>
                <a href="#about">LOGIN</a>
              </li>
            </Link>
            <Link to="/signup">
              <li>
                <a href="#services">SIGNUP</a>
              </li>
            </Link>
            <Link to="/settings">
              <li>
                <a href="#/Settings">
                  <i className="fa-solid fa-cog "></i>
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>,
  ];
}

export default Navigation;
