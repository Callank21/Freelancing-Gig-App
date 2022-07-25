export default function Settings() {
  return (
    <section>
      <div className="body-root">
        <div className="body-section">
          <div className="body-contentz">
            <div className="mainz">
              <div className="mainz-content">
                <div className="mainz-container account-settings">
                  <h2 className="h2z">Account Settings</h2>
                  <div className="settings-form account">
                    <section>
                      <form className="account-settings-form" id="formzz">
                        <div className="form-field field-1 short">
                          <label htmlFor="platform-name">
                            My Email Address:
                          </label>
                          <span> (Users Email) </span>
                        </div>

                        <div className="settings-actions">
                          <div className="button-container">
                            <button
                              className="close-account"
                              id="btn"
                              type="submit"
                            >
                              Close My Account
                            </button>
                          </div>
                        </div>
                      </form>
                    </section>
                  </div>
                </div>

                <div className="mainz-container account-settings">
                  <h2 className="h2z">Changle Email & Password</h2>
                  <div className="settings-form account">
                    <section>
                      <form className="account-settings-form" id="formzz">
                        <div className="form-field field-1 short">
                          <label id="labelz" htmlFor="platform-name">
                            Email Address
                          </label>
                          <input
                            id="platform-name inputz"
                            type="text"
                            name="platform-name"
                          />
                        </div>

                        <div className="form-field field-4 short">
                          <label id="labelz" htmlFor="contact-email">
                            Password{' '}
                          </label>
                          <input
                            id="contact-email inputz"
                            type="text"
                            name="contact-email"
                          />
                        </div>
                        <div className="settings-actions">
                          <div className="button-container">
                            <button
                              className="save-settings"
                              id="btn"
                              type="submit"
                            >
                              Save settings
                            </button>
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
  );
}
