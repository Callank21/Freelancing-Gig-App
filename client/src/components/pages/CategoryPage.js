import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_DEV } from '../../utils/queries';
// import ProfileCard from './ProfileCard';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const CategoryPage = (name) => {
  const { devType } = useParams();

  const { loading, data } = useQuery(QUERY_DEV, {
    variables: { devType },
  });

  console.log(devType);

  const [profCard, setProfCard] = useState([]);
  useEffect(() => {
    data && setProfCard(data.developers);
    // data && setDevCard(data.devType);
  }, [data]);

  const card = profCard.map((item) => {
    console.log(item);
    return (
      <Link to={`profile/${item._id}`}>
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
  );
};

export default CategoryPage;
