import React from 'react';
import "../../App.css"
// // import { Navigate, useParams } from 'react-router-dom';
// // import { useQuery, useMutation } from '@apollo/client';
// // import Auth from '../../utils/auth';

// export default function MyProfile(props) {
//   //   const { username: userParam } = useParams();

//   //   const { loading, data } = useQuery();

//   //   const user = data?.me || data?.user || {};
//   //   if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
//   //     return <Navigate to="/profile" />;
//   //   }
//   //   if (loading) {
//   //     return <div>Loading...</div>;
//   //   }
//   //   if (!user?.username) {
//   //     return <h4>Please login or sign up to view your profile!</h4>;
//   //   }
//   return (

//     <section>

//     <div class="profile_container">
//         <div class="profile_img_section">
//           <img class="profile_img-LG" src="https://i.postimg.cc/85yLK8Ph/me1.jpg" alt="a"></img>
//           <img alt="">{props.image}</img>
//         </div>
    
//         <div class="profile_desc_section">
    
//         <div className="name">
//                 <h2>{props.name}</h2>
//         </div>
    
//         <div className="devType">
//               <h3>{props.devType}</h3>
//             </div>   
          
//         <div className="wage stats">
//             <span>{props.wage}</span>
//             <h3>$$$/HR</h3>
//             </div>
    
//         <div className="figures">
//               <div className="work history stats">
//                 <ul>{props.workHistory}</ul>
//                 <h3>Work History </h3>
//               </div>
//           <div className="education">
//               <p>{props.education}</p>
//               <h3> Education</h3>
//             </div>
//               <div className="description stats">
//                 <span>{props.description}</span>
//                 <h3>Description</h3>
//               </div>
//             </div>
    
//           <div class="interests">
//             <span class="interests_item">HTML</span>
//             <span class="interests_item">JavaScript</span>
//             <span class="interests_item">REACT</span>
//           </div>
// 		  <div align="center">
//             <button
//               onClick={() => {
//                 this.setState({ editing: true });
//               }}
//             >
// 				Save Changes 
//             </button>
//           </div>
//           {/* <div className="btn">
//                   <a href={props.linked} target="_blank" rel="noreferrer">
//                   <button>{props.buttonMessage}</button>
//                   </a>
//               </div> */}

//         </div>
    
//       </div>
    
//     </section>
        
     
//   );
// }

// import unique profile id 
// import information that is already available

export default function MyProfile() {
    return (
    
    <div className="d-profile_container">
        <div class="profile_img_section">
          <img class="profile_img-LG" src="https://i.postimg.cc/85yLK8Ph/me1.jpg" alt="a"></img>
          {/* <img alt="">{props.image}</img> */}
        </div>
        <div class="profile_desc_section">
            <form>
                <h3>Edit Profile</h3>

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
                        name=" "
                        placeholder="Developer Type"
                        />
                    </div>
                </div>
                <div className="user-info">
                    <label className="title">Wages Per Hour</label>
                    <div className="wage">
                    <input
                        className="form-control"
                        type="num"
                        id="wage"
                        name="wage"
                    />
                    </div>
                </div>
                <div className="user-info">
                    <label className="title">Work History</label>
                    <div className="workHistory ">
                    <input
                        className="form-control"
                        type="text"
                        id="workHistory"
                        name="workHistory"
                        placeholder="Work History"
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
                        name="Education"
                        placeholder="Education"
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
                    />
                    </div>
                </div>
                <div className="user-info">
                    <label className="label">interests</label>
                    <div className=" ">
                    <input
                        className="form-control"
                        type="text"
                        id="interests"
                        name="interests"
                        placeholder="interests"
                    />
                    </div>
                </div>
            <div className="form-group">
                <button type="button" className="btn">
                    Save Changes
                </button>
            </div>
            </form>
        </div>
    </div>
    );
}