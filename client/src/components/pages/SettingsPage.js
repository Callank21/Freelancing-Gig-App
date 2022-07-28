import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { DELETE_USER } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import UpdateUser from './UpdateUser';

export default function Settings() {
  const [deleteUser] = useMutation(DELETE_USER);
  const { data } = useQuery(QUERY_ME);

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleDialog = (event) => {
    event.preventDefault();
    setOpen(!false);
  };

  const handleDisagree = () => {
    setOpen(false);
  };

  const handleAgree = async () => {
    setOpen(false);
    const token = Auth.loggedIn() ? Auth.getToken() && Auth.getProfile() : null;

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
                          <label htmlFor="platform-name">My Username:</label>
                          <span>{data?.me.username}</span>
                          <label htmlFor="platform-name">
                            My Email Address:
                          </label>
                          <span>{data?.me.email}</span>
                        </div>

                        <div className="settings-actions">
                          <div className="button-container">
                            <button
                              className="close-account"
                              id="btn"
                              onClick={handleDialog}
                            >
                              Close My Account
                            </button>
                            <Dialog
                              fullScreen={fullScreen}
                              open={open}
                              onClose={handleDialog}
                              aria-labelledby="responsive-dialog-title"
                            >
                              <DialogTitle id="responsive-dialog-title">
                                {'Remove your account from the server ?'}
                              </DialogTitle>
                              <DialogContent>
                                <DialogContentText>
                                  If you agree, your account will be deleted
                                  from the server and it won't be restored
                                </DialogContentText>
                              </DialogContent>
                              <DialogActions>
                                <Button autoFocus onClick={handleDisagree}>
                                  Disagree
                                </Button>
                                <Button onClick={handleAgree} autoFocus>
                                  Agree
                                </Button>
                              </DialogActions>
                            </Dialog>
                          </div>
                        </div>
                      </form>
                    </section>
                  </div>
                </div>
                <UpdateUser />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
