import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import Auth from '../../utils/auth';
import { QUERY_PROFILE } from '../../utils/queries';

export default function ProfilePage() {
  const { id: profileId } = useParams();

  const { loading, data } = useQuery(QUERY_PROFILE, {
    variables: { id: profileId },
  });

  const profile = data?.profile || {};

  console.log(profile);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section>
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
            <h2>{profile.name}</h2>
          </div>

          <div className="devType">
            <h3>{profile.devType}</h3>
          </div>

          <div className="wage stats">
            <span>{profile.wage}</span>
            <h3>$$$/HR</h3>
          </div>

          <div className="figures">
            <div className="work history stats">
              <ul>{profile.workHistory}</ul>
              <h3>Work History </h3>
            </div>
            <div className="education">
              <p>{profile.education}</p>
              <h3> Education</h3>
            </div>
            <div className="description stats">
              <span>{profile.description}</span>
              <h3> Description</h3>
            </div>
          </div>

          <div className="interests">
            <span className="interests_item">HTML</span>
            <span className="interests_item">JavaScript</span>
            <span className="interests_item">REACT</span>
          </div>

          <div className="btn">
            <a href={profile.linked} target="_blank" rel="noreferrer">
              <button>{profile.buttonMessage}</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
