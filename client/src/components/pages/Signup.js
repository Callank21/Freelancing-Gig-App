import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

export default function Signup() {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [createUser, { error }] = useMutation(CREATE_USER);

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
      const { data } = await createUser({
        variables: { ...formState },
      });

      Auth.login(data.createUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section>
      <section className="formz">
        <div className="containerz" id="containerz">
          <div className="form-containerz sign-in-containerz">
            <form action="#" id="login" onSubmit={handleFormSubmit}>
              <h1 className="log">Sign Up</h1>
              <input
                name="username"
                type="text"
                id="username"
                placeholder="Username"
                value={formState.username}
                onChange={handleChange}
              />
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
              <button className="buttonz">Sign Up</button>
            </form>
            {error && <div>Signup failed</div>}
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
                <h1 className="logz">Welcome !</h1>
                <p className="ppp">
                  Enter your personal details and start your journey!!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
