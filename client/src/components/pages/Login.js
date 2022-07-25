export default function Login() {
  return (
    <section>
      <section className="formz">
        <div className="containerz" id="containerz">
          <div className="form-containerz sign-in-containerz">
            <form action="#" id="login">
              <h1 className="log">Sign In</h1>

              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#/" className="forgot-password">
                Forgot your password?
              </a>
              <button className="buttonz">Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
                <h1 className="logz">Welcome Back!</h1>
                <p className="ppp">
                  Enter your personal details and continue your journey!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
