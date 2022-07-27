import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { DEV_TYPES } from '../../utils/queries';
// import CategoryPage from './CategoryPage';
import { Link } from 'react-router-dom';

// import { devCard } from './devCard.js';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Developers = () => {
  const { loading, data } = useQuery(DEV_TYPES);
  const [devCard, setDevCard] = useState([]);
  useEffect(() => {
    
    data && setDevCard(data.devtypes);
    // data && setDevCard(data.devType);
  }, [data]);
  const card = devCard.map((item) => {
    return (
      <Link key={item} to={`/categories/${item}`}>
        <article className="card">
          <h1>{item} Developers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </article>
      </Link>
    );
  });
  return (
    <section>
      <div className="developers" id="developers">
        <h2 className="justify-center">Developers</h2>
      </div>
      <div className="devCards">
        {data && card}
        {/* <article className="card">
          <h1>Software Developers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </article>
        <article className="card">
          <h1>Web Developers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </article>
        <article className="card">
          <h1>Mobile App Developers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </article>
        <article className="card">
          <h1>javaScript Developers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </article>
        <article className="card">
          <h1>PHP Developers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </article>
        <article className="card">
          <h1>Wordpress Developers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </article>
        <article className="card">
          <h1>Python Developers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </article>
        <article className="card">
          <h1>.NET Developers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </article> */}
      </div>
    </section>
  );
};

export default Developers;
