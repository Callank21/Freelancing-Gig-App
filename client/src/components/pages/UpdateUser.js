export default function UpdateUser() {
  return (
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
                <button className="save-settings" id="btn" type="submit">
                  Save settings
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
