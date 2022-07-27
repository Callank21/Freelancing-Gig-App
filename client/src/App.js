// import { useState } from 'react';
import HomePage from './components/HomePage';
import Login from './components/pages/Login';
import Settings from './components/pages/SettingsPage';
import Signup from './components/pages/Signup';
import Footer from './components/Footer';
import Header from './components/Header';
import Developers from './components/pages/Developers';
import NotFound from './components/pages/NotFound';
import ProfilePage from './components/pages/Profiles';
import CategoryPage from './components/pages/CategoryPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import MyProfile from './components/pages/MyProfile';

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
            <Routes>
              <Route path="/categories/:devtype" element={<CategoryPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<MyProfile />} />
              <Route path="/profile/:id" element={<ProfilePage />} />
              <Route path="/developers" element={<Developers />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/settings" element={<Settings />} />
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
