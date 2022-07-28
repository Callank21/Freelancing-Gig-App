import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

export default function Login() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };
  return (
    <section>
      <section className="formz">
        <div className="containerz" id="containerz">
          <div className="form-containerz sign-in-containerz">
            <form action="#" id="login" onSubmit={handleFormSubmit}>
              <h1 className="log">Sign In</h1>

              <input
                name="email"
                type="email"
                id="email"
                placeholder="Email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                name="password"
                type="password"
                id="password"
                placeholder="Password"
                value={formState.password}
                onChange={handleChange}
              />
              <a href="#/" className="forgot-password">
                Forgot your password?
              </a>
              <button className="buttonz">Sign In</button>
            </form>
            {error && <div>Login failed</div>}
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
