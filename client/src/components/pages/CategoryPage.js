import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_DEV } from '../utils/queries';
import ProfileCard from "./ProfileCard"

export const CategoryPage = (props) => {
	// function that deals with onclick
	// onclick => ({
		// get profile Id from a document.querySelector('key').value
		// pass profile Id into find individual profile function returning an object
		// return ProfilePage object with the data from the previous function passed in
	// })


	const devList = useQuery(QUERY_DEV);
	console.log ( devList );

	const getDevelopers = devList.map(profile => {
		return (
		<ProfileCard 
		key = {profile._id}
		{...profile}
		/>
		)
	})
	return (
	// 	<div>
    //         <p className="categoryHeader">Developers</p>
    //         <div className=" ">
	// 			{getDevelopers}
    //         </div>
	// 		<button className="btn"
	// 		onClick={e => {
	// 			this.onClick();
    //       }}
    //     >
    //       Connect With Developer
    //     </button>
    //   </div>
    //     </div>
	<div>Hi</div>
    )
        // <div>
        //     <p className="categoryHeader">Developers</p>
        //     <div className=" ">
		// 		{getDevelopers}
        //     </div>
        // </div>
    // )

};

// const CategoryPage = (props) => {
//   return (
// <div className="container">
// 			<div className="card">
// 				<div className="person">
// 					<div className="icon">
// 						<span>{props.icon}</span>
// 					</div>
// 					<div className="name">
// 						<h2>{props.name}</h2>
// 					</div>
// 				</div>
// 				<div className="devType">
// 					<p>{props.devType}</p>
// 				</div>
//         <div className="education">
// 					<p>{props.education}</p>
//           <p> Education</p>
// 				</div>
// 				<div className="figures">
// 					<div className="work history stats">
// 						<ul>{props.workHistory}</ul>
// 						<p> Work History</p>
// 					</div>
// 					<div className="description stats">
// 						<span>{props.description}</span>
// 						<p> Description</p>
// 					</div>
// 					<div className="wage stats">
// 						<span>{props.wage}</span>
// 						<p>$$$/HR</p>
// 					</div>
// 				</div>
// 				<div className="btn">
// 					<a href={props.linked} target="_blank" rel="noreferrer">
// 						<button>{props.buttonMessage}</button>
// 					</a>
// 				</div>
// 			</div>
//       </div>
// 	);
// };

// export default CategoryPage;