// import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { DELETE_USER } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';

export default function Settings() {
  // const [, { error }] = useMutation(UPDATE_USER);
  const [deleteUser] = useMutation(DELETE_USER);
  const { data } = useQuery(QUERY_ME);
  // update state based on form input changes
  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };

  // submit delete form
  const handleDeleteFormSubmit = async (event) => {
    event.preventDefault();

    const token = Auth.loggedIn() ? Auth.getToken() && Auth.getProfile() : null;

    console.log(data.me._id);

    if (!token) {
      return false;
    }

    try {
      await deleteUser({
        variables: { id: data.me._id },
      });

      Auth.logout();
    } catch (e) {
      console.error(e);
    }
  };

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
                              onClick={handleDeleteFormSubmit}
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
