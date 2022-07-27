import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

export default function UpdateUser() {
  const [errorMessage, setErrorMessage] = useState('');
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const [updateUser] = useMutation(UPDATE_USER);
  const { data } = useQuery(QUERY_ME);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
      username: data.me.username,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = formState;

    if (email === '' || password === '') {
      setErrorMessage('Valid input required');
    } else {
      try {
        await updateUser({
          variables: { ...formState },
        });
      } catch (e) {
        console.error(e);
      }

      setFormState({
        email: '',
        password: '',
      });

      window.location.assign('/settings');
    }
  };

  return (
    <div className="mainz-container account-settings">
      <h2 className="h2z">Changle Email & Password</h2>
      <div className="settings-form account">
        <section>
          <form className="account-settings-form" id="changeformzz">
            <div className="form-field field-1 short">
              <label id="labelz" htmlFor="platform-name">
                Email Address
              </label>
              <input
                id="platform-name inputz"
                type="text"
                name="email"
                placeholder="Email"
                value={formState.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-field field-4 short">
              <label id="labelz" htmlFor="contact-email">
                Password{' '}
              </label>
              <input
                id="contact-email inputz"
                type="password"
                name="password"
                placeholder="Password"
                value={formState.password}
                onChange={handleChange}
              />
            </div>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <div className="settings-actions">
              <div className="button-container">
                <button
                  className="save-settings"
                  id="savebtn"
                  type="submit"
                  onClick={handleFormSubmit}
                >
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
