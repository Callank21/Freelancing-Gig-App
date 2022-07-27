// import { useState } from 'react';
import HomePage from './components/HomePage';
import Login from './components/pages/Login';
import Settings from './components/pages/SettingsPage';
import Signup from './components/pages/Signup';
import Profile from './components/pages/ProfilePage';
import Footer from './components/Footer';
import Header from './components/Header';
import Developers from './components/pages/Developers';
import NotFound from './components/pages/NotFound';
import CategoryPage from './components/pages/CategoryPage';
import ProfilePage from './components/pages/ProfilePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import JsonData from "./data/data.json";
import './App.css';
// import CategoryPage from './components/pages/CategoryPage';
// import ProfilePage from './components/pages/ProfilePage';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Router>
          <Header />
          <main>
            {/* <ProfilePage /> */}
            <Routes>
            <Route path="/categories/:devType" element={<CategoryPage />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route path="/developers" element={<Developers />} />
            </Routes>
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/*loggedIn! && 
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              */}
              {/*loggedIn &&
              <Route path="/myprofile" element={<myProfile />} />
              <Route path="/settings" element={<Settings />} />
              */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </Router>
        <Footer />
      </div>
    </ApolloProvider>
  );
}


export default App;
