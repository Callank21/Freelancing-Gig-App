import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_DEV } from '../../utils/queries';
import ProfileCard from "./ProfileCard";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const CategoryPage = (name) => {
	const { devType } = useParams();

  const { loading, data } = useQuery(QUERY_DEV, {
    variables: { devType },
  });

  const [profCard, setProfCard] = useState([]);
  useEffect(() => {
    data && setProfCard(data.developers);
    // data && setDevCard(data.devType);
  }, [data])

  const card = profCard.map(item => {
    console.log(item);
    return (
		<Link
      to={`profile/${item._id}`}
      >
		<div className="container">
		<div className="card">
			<div className="wage">
				<span>{item.wage}</span>
				<h3>/HR</h3>
			</div>
			<div className="person">
				<div className="image">
					<span>{item.image}</span>
				</div>
				<div className="name">
					<h2>{item.name}</h2>
				</div>
			</div>
			<div className="devType">
				<p>{item.devType}</p>
			</div>
			<div className="description">
				<h3> DESCRIPTION</h3>
				<span>{item.description}</span>
			</div>
			<div className="education">
				<h3>EDUCATION</h3>
				<p>{item.education}</p>
			</div>
			<div className="work history">
				<h3>WORK HISTORY</h3>
				<ul>{item.workHistory}</ul>
			</div>
		</div>
	</div>
	</Link>
    );
});
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
	<div>{card}</div>
    )
};

export default CategoryPage;

// const CategoryPage = (item) => {
//   return (
// <div className="container">
// 			<div className="card">
// 				<div className="person">
// 					<div className="icon">
// 						<span>{item.icon}</span>
// 					</div>
// 					<div className="name">
// 						<h2>{item.name}</h2>
// 					</div>
// 				</div>
// 				<div className="devType">
// 					<p>{item.devType}</p>
// 				</div>
//         <div className="education">
// 					<p>{item.education}</p>
//           <p> Education</p>
// 				</div>
// 				<div className="figures">
// 					<div className="work history stats">
// 						<ul>{item.workHistory}</ul>
// 						<p> Work History</p>
// 					</div>
// 					<div className="description stats">
// 						<span>{item.description}</span>
// 						<p> Description</p>
// 					</div>
// 					<div className="wage stats">
// 						<span>{item.wage}</span>
// 						<p>$$$/HR</p>
// 					</div>
// 				</div>
// 				<div className="btn">
// 					<a href={item.linked} target="_blank" rel="noreferrer">
// 						<button>{item.buttonMessage}</button>
// 					</a>
// 				</div>
// 			</div>
//       </div>
// 	);
// };

// export default CategoryPage;