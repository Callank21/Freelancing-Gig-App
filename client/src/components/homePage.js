const Navigation = (props) => {
  return (
    <section>

      <section>
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
    </section>


 <section>
 <header id='header'>
        <div className='intro'>
          <div className='overlay'>
            <div className='container'>
              <div>
                <div className='intro-text'>
                  <h1>
                    {props.data ? props.data.title : "Let's get creative"}
                    <span>.</span>
                  </h1>
                  <p>{props.data ? props.data.paragraph : 'Hire freelance developers to shorter development cycles, develop websites and drive product growth.'}</p>
                  <a href='#features' className='Create-profile'> Create Profile </a>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>,
  </section>

  <section>
     
     <div className="developers"><h2>Developers</h2></div>
     <div className="devCards">
     <article className="card">
        <h1>Software Developers</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </article>
      <article className="card">
        <h1>Web Developers</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </article>
      <article className="card">
        <h1>Mobile App Developers</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </article>
      <article className="card">
        <h1>javaScript Developers</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </article>
       <article className="card">
        <h1>PHP Developers</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </article>
      <article className="card">
        <h1>Wordpress Developers</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </article>
       <article className="card">
        <h1>Python Developers</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </article>
      <article className="card">
        <h1>.NET Developers</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </article>
  
 </div>
</section>

<section>
 
 <div id='contact'>
   <div>
         <div className='section-title'>
           <h2>Get In Touch !</h2>
         </div>

         <div className='social'>
           <ul>
             <li>
               <a href={props.data ? props.data.github : 'https://github.com/Callank21/Freelancing-Gig-App'}>
                 <i className='fab fa-github fa'></i>

               </a>
             </li>
             <li>
               <a href={props.data ? props.data.twitter : '/'}>
                 <i className='fab fa-linkedin fa'></i>
               </a>
             </li>
             <li>
               <a href={props.data ? props.data.youtube : '/'}>
                 <i className='fab fa-youtube fa'></i>
               </a>
             </li>
           </ul>
         </div>
   </div>
 </div>
</section>


<section>
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
</section>

</section>
  )
}

export default Navigation;