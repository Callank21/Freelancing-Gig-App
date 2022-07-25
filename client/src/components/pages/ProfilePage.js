import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Auth from '../utils/auth';

export default function ProfilePage(props) {
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigation to="/profile" />;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!User?.username) {
    return <h4>Please login or sign up to view your profile!</h4>;
  }
  return (
    <div className="container">
      <div className="card">
        <div className="person">
          <div className="icon">
            <span>{props.icon}</span>
          </div>
          <div className="name">
            <h2>{props.name}</h2>
          </div>
        </div>
        <div className="devType">
          <p>{props.devType}</p>
        </div>
        <div className="education">
          <p>{props.education}</p>
          <p> Education</p>
        </div>
        <div className="figures">
          <div className="work history stats">
            <ul>{props.workHistory}</ul>
            <p> Work History</p>
          </div>
          <div className="description stats">
            <span>{props.description}</span>
            <p> Description</p>
          </div>
          <div className="wage stats">
            <span>{props.wage}</span>
            <p>$$$/HR</p>
          </div>
        </div>
        <div className="btn">
          <a href={props.linked} target="_blank" rel="noreferrer">
            <button>{props.buttonMessage}</button>
          </a>
        </div>
      </div>
    </div>
  );
}