import React from 'react';

const Footer = (props) => {
  return (
    <section>
      <div id="contact">
        <div>
          <div className="section-title">
            <h2 className="justify-center">Get In Touch !</h2>
          </div>

          <div className="social">
            <ul>
              <li>
                <a
                  href={
                    props.data
                      ? props.data.github
                      : 'https://github.com/Callank21/Freelancing-Gig-App'
                  }
                >
                  <i className="fab fa-github fa"></i>
                </a>
              </li>
              <li>
                <a href={props.data ? props.data.twitter : '/'}>
                  <i className="fab fa-linkedin fa"></i>
                </a>
              </li>
              <li>
                <a href={props.data ? props.data.youtube : '/'}>
                  <i className="fab fa-twitter fa"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container ">
          <p>
            &copy; 2022 Freelance Gig Application. Design by{' '}
            <a
              href="https://github.com/Callank21/Freelancing-Gig-App"
              rel="nofollow"
            >
              Group 3
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
