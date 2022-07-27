import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {
  CREATE_PROFILE,
  UPDATE_PROFILE,
  DELETE_PROFILE,
} from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

export default function EditProfile() {
  const [formState, setFormState] = useState({
    name: '',
    devtype: '',
    wage: '',
    description: '',
    workhistory: '',
    education: '',
    hours: '',
  });

  const { data } = useQuery(QUERY_ME);

  const me = data?.me || {};

  const [createProfile] = useMutation(CREATE_PROFILE);
  const [updateProfile] = useMutation(UPDATE_PROFILE);
  const [deleteProfile] = useMutation(DELETE_PROFILE);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    // parseInt(value);
    if (name === 'wage' || name === 'hours') {
      setFormState({
        ...formState,
        [name]: parseInt(value),
      });
    } else {
      setFormState({
        ...formState,
        [name]: value,
      });
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(me.profile[0]);
    if (!me.profile.length) {
      try {
        await createProfile({
          variables: { ...formState, username: me.username },
        });
      } catch (e) {
        console.error(e);
      }
      setFormState({
        name: '',
        devtype: '',
        wage: '',
        description: '',
        workhistory: '',
        education: '',
        hours: '',
      });
      window.location.assign('/profile');
    } else {
      try {
        await updateProfile({
          variables: {
            ...formState,
            username: me.username,
            id: me.profile[0]._id,
          },
        });
      } catch (e) {
        console.error(e);
      }
      setFormState({
        name: '',
        devtype: '',
        wage: '',
        description: '',
        workhistory: '',
        education: '',
        hours: '',
      });
      window.location.assign('/profile');
    }
  };

  const handleDeleteSubmit = async () => {
    try {
      await deleteProfile({
        variables: { id: me.profile[0]._id },
      });
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="profile_desc_section">
      <form>
        <hr></hr>

        <div className="user-info">
          <label className="title ">Name</label>
          <div className="name">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Name"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="user-info">
          <label className="title">Developer Type</label>
          <div className="devType">
            <input
              className="form-control"
              type="text"
              id="devType"
              name="devtype"
              placeholder="Developer Type"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="user-info">
          <label className="title">Wages Per Hour</label>
          <div className="wage">
            <input
              className="form-control"
              type="number"
              id="wage"
              name="wage"
              placeholder="$   /hr"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="user-info">
          <label className="title">Working hours</label>
          <div className="wage">
            <input
              className="form-control"
              type="number"
              id="wage"
              name="hours"
              placeholder="hours"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="user-info">
          <label className="title">Work History</label>
          <div className="workhistory ">
            <input
              className="form-control"
              type="text"
              id="workHistory"
              name="workhistory"
              placeholder="Work History"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="user-info">
          <label className="title">Education</label>
          <div className="education">
            <input
              className="form-control"
              type="text"
              id="education"
              name="education"
              placeholder="Education"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="user-info">
          <label className="title">Description</label>
          <div className="description">
            <input
              className="form-control"
              type="text"
              id="description"
              name="description"
              placeholder="Description"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="add-profile">
          <button
            className="add-button"
            id="btn"
            type="submit"
            onClick={handleFormSubmit}
          >
            Save changes
          </button>

          <button
            className="add-button"
            id="btn"
            type="submit"
            onClick={handleDeleteSubmit}
          >
            Delete profile
          </button>
        </div>
      </form>
    </div>
  );
}
