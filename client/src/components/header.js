// ------ Header -------- //
export const Header = (props) => {
    return (
      <header id='header'>
        <div className='intro'>
          <div className='overlay'>
            <div className='container'>
              <div>
                <div className='intro-text'>
                  <h1>
                    {props.data ? props.data.title : 'Loading'}
                    <span></span>
                  </h1>
                  <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                  <a href='#features' className='Create-profile'> Create Profile </a>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }