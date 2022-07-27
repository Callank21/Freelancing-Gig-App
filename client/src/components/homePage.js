import Developers from './pages/Developers';
import ProfilePage from './pages/Profiles';

const HomePage = (props) => {
  return (
    <section>
      <section>
        <header id="header">
          <div className="intro">
            <div className="overlay">
              <div className="container">
                <div>
                  <div className="intro-text">
                    <h1>
                      {props.data ? props.data.title : "Let's get creative"}
                      <span>.</span>
                    </h1>
                    <p>
                      {props.data
                        ? props.data.paragraph
                        : 'Hire freelance developers to shorter development cycles, develop websites and drive product growth.'}
                    </p>
                    {/* <a href='#features' className='Create-profile'> Create Profile </a>{' '} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        ,
      </section>
      <section>
        {/* <Developers /> */}
        <ProfilePage />
      </section>
    </section>
  );
};

export default HomePage;
