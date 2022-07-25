export default function Settings() {
    
    return (
        <section>

        <section>
        <nav id='menu' className='navbar'>
    
          <div className='navbar-header'>             
            <a className='navbar-brand' href='#/'>Freelancr<span className='dot'>.</span></a>
          </div>
            
          <div className='containerr'>
    
         
            <div>
              <ul className='nav'>
                <li>
                  <a href='#developers'>DEVELOPERS</a>
                </li>
                <li>
                  <a href='#about'>LOGIN</a>
                </li>
                <li>
                  <a href='#services'>SIGNUP</a>
                </li>
                <li>
                <a href="#/Settings"><i className="fa-solid fa-cog "></i></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </section>

            

        <div class="body-root">
        <div class="body-section">
          <div class="body-contentz">
            <div class="mainz">
              <div class="mainz-content">
                <div class="mainz-container account-settings">
                  <h2 className="h2z">Account Settings</h2>
                  <div class="settings-form account">
                    <section>
                    <form class="account-settings-form" id="formzz">
                      <div class="form-field field-1 short">
                        <label for="platform-name">My Email Address:</label>
                        <span> (Users Email) </span>
                      </div>
                      
              
                      <div class="settings-actions">
                        <div class="button-container">
                          <button class="close-account" id="btn" type="submit">Close My Account</button>
                        </div>
                      </div>
                    </form>
                    </section>
          
                    
                  </div>
                </div>          
                
                           <div class="mainz-container account-settings">
                  <h2 className="h2z">Changle Email & Password</h2>
                  <div class="settings-form account">
                    <section>
                    <form class="account-settings-form" id="formzz">
                      <div class="form-field field-1 short">
                        <label id="labelz" for="platform-name">Email Address</label>
                        <input id="platform-name inputz" type="text" name="platform-name" />
                      </div>
                      
                      <div class="form-field field-4 short">
                        <label id="labelz" for="contact-email">Password </label>
                        <input id="contact-email inputz" type="text" name="contact-email" />
                                                                                         
                      </div>
                      <div class="settings-actions">
                        <div class="button-container">
                         <button class="save-settings" id="btn" type="submit">Save settings</button>
                        </div>
                      </div>
                    </form>
                    </section>
          
                    
                  </div>
                </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>

 )
}
