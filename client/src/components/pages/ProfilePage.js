import React from 'react';
// import { Navigate, useParams } from 'react-router-dom';
// import { useQuery, useMutation } from '@apollo/client';
// import Auth from '../../utils/auth';

export default function ProfilePage(props) {
  //   const { username: userParam } = useParams();

  //   const { loading, data } = useQuery();

  //   const user = data?.me || data?.user || {};
  //   if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  //     return <Navigate to="/profile" />;
  //   }
  //   if (loading) {
  //     return <div>Loading...</div>;
  //   }
  //   if (!user?.username) {
  //     return <h4>Please login or sign up to view your profile!</h4>;
  //   }
  return (
    
    <section>

    <div class="profile_container">
        <div class="profile_img_section">
          <img class="profile_img-LG" src="https://i.postimg.cc/85yLK8Ph/me1.jpg" alt="a"></img>
          <img alt="">{props.image}</img>
     
        </div>
    
        <div class="profile_desc_section">
    
        <div className="name">
                <h2>{props.name}</h2>
            </div>
    
        <div className="devType">
              <h3>{props.devType}</h3>
            </div>   
          
        <div className="wage stats">
            <span>{props.wage}</span>
            <h3>$$$/HR</h3>
            </div>
    
        <div className="figures">
              <div className="work history stats">
                <ul>{props.workHistory}</ul>
                <h3>Work History </h3>
              </div>
          <div className="education">
              <p>{props.education}</p>
              <h3> Education</h3>
            </div>
              <div className="description stats">
                <span>{props.description}</span>
                <h3> Description</h3>
              </div>
            </div>
    
          <div class="interests">
            <span class="interests_item">HTML</span>
            <span class="interests_item">JavaScript</span>
            <span class="interests_item">REACT</span>
          </div>
    
        
          <div className="btn">
                  <a href={props.linked} target="_blank" rel="noreferrer">
                  <button>{props.buttonMessage}</button>
                  </a>
              </div>
    
    
        </div>
    
      </div>
    
    </section>
        
     
  );
}
