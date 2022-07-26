import React from "react";

export const ProfilePage = (props) => {
    return (
        <div className="container">
          <div className="card">
              <div className="wage">
                  <span>{props.wage}</span>
                  <h3>/HR</h3>
              </div>
              <div className="person">
                  <div className="image">
                      <span>{props.image}</span>
                  </div>
                  <div className="name">
                      <h2>{props.name}</h2>
                  </div>
              </div>
              <div className="devType">
                  <p>{props.devType}</p>
              </div>
              <div className="description">
                  <h3> DESCRIPTION</h3>
                  <span>{props.description}</span>
              </div>
              <div className="education">
                  <h3>EDUCATION</h3>
                  <p>{props.education}</p>
              </div>
              <div className="work history">
                  <h3>WORK HISTORY</h3>
                  <ul>{props.workHistory}</ul>
              </div>
              <div className="btn">
                  <a href={props.linked} target="_blank" rel="noreferrer">
                      <button>{props.buttonMessage}</button>
                  </a>
              </div>
          </div>
      </div>
      );
    };