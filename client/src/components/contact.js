export const Contact = (props) => {

    return (
      <div>
        <div id='contact'>
          <div>
                <div className='section-title'>
                  <h2>Get In Touch !</h2>
                </div>
                <div className='social'>
                  <ul>
                    <li>
                      <a href={props.data ? props.data.github : 'https://github.com/Callank21/Freelancing-Gig-App'}>
                        <i className='fa fa-github'></i>
                      </a>
                    </li>
                    <li>
                      <a href={props.data ? props.data.twitter : '/'}>
                        <i className='fa fa-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href={props.data ? props.data.youtube : '/'}>
                        <i className='fa fa-youtube'></i>
                      </a>
                    </li>
                  </ul>
                </div>
          </div>
        </div>
        
        {/* ------- Footer -------*/}
        <div id='footer'>
          <div className='container '>
            <p>
              &copy; 2022 Freelance Gig Application. Design by{' '}
              <a href='https://github.com/Callank21/Freelancing-Gig-App' rel='nofollow'>
                Group 3
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }