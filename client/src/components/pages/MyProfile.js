import React from 'react';
import { QUERY_ME } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import EditProfile from './EditProfile';

export default function MyProfile() {
  const [state, setState] = useState(false);

  const { loading, data } = useQuery(QUERY_ME);

  const me = data?.me || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleClick = () => {
    setState(!false);
  };

  return (
    <div className="d-profile_container">
      <div className="profile_container">
        <div className="profile_img_section">
          <img
            className="profile_img-LG"
            src="https://i.pravatar.cc/300"
            alt="a"
          ></img>
        </div>

        <div className="profile_desc_section">
          <div className="name">
            <h2>{me.username}</h2>
          </div>
          {me.profile.length ? (
            <>
              {me.profile.map((profile) => (
                <div key={profile._id}>
                  <div className="devType">
                    <h3>
                      Development <p>{profile.devtype}</p>
                    </h3>
                  </div>

                  <div className="wage stats">
                    <h3>
                      Wage
                      <p>${profile.wage} /hr</p>
                    </h3>
                  </div>

                  <div className="figures">
                    <div className="work history stats">
                      <h3>Work History </h3>
                      <ul>{profile.workhistory}</ul>
                    </div>
                    <div className="education">
                      <h3> Education</h3>
                      <p>{profile.education}</p>
                    </div>
                    <div className="description stats">
                      <h3> Description</h3>
                      <span>{profile.description}</span>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : null}

          <div className="interests">
            <span className="interests_item">HTML</span>
            <span className="interests_item">JavaScript</span>
            <span className="interests_item">REACT</span>
          </div>

          {/* <div className="btn">
            <a href={profile.linked} target="_blank" rel="noreferrer">
              <button>{profile.buttonMessage}</button>
            </a>
          </div> */}
        </div>
      </div>
      <div className="add-profile">
        <button className="add-button" id="btn" onClick={handleClick}>
          {!me.profile.length ? <>Add Profile</> : <>Edit Profile</>}
        </button>
      </div>
      {state ? <EditProfile /> : null}
    </div>
  );
}
