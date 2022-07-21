// ----- Navigation ------ //

export const Navigation = (props) => {
    return (
      <nav id='menu' className='navbar'>

        <div className='navbar-header'>             
          <a className='navbar-brand' href='#/'>Freelancr</a>
        </div>
          
        <div className='container'>

          <div>
            <ul className='nav'>
              <li>
                <a href='#features'>Developers</a>
              </li>
              <li>
                <a href='#about'>LOGIN</a>
              </li>
              <li>
                <a href='#services'>SIGNUP</a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    )
  }