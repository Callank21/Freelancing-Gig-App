// import { useState } from 'react';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Settings from './components/SettingsPage';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Header from './components/Header';
import Developers from './components/Developers';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import JsonData from "./data/data.json";
import './App.css';

function App() {
  // const [currentPage, handlePageChange] = useState(' ');

  // const renderPage = () => {
  //   switch (currentPage) {
  //     case 'Home Page':
  //       return <HomePage />;
  //     case 'Login':
  //       return <Login />;
  //     case 'Signup':
  //       return <Signup />;
  //     case 'Settings':
  //       return <Settings />;
  //     default:
  //   }
  // };

  // create routes for the components

  return (
    <div>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </Router>
      <Footer />
      {/* <HomePage currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()} */}
    </div>
  );
}

// CategoryPage created by Steph, hasn't been merged yet

// import './App.css';
// import CategoryPage from './components/pages/CategoryPage';

// const App = () => {
// 	return (
// 		<div className="App container-app-grid">
// 			<CategoryPage
// 				icon="👧"
// 				name="Stephanie"
// 				devType=" Full Stack Developer "
//         education= "BA in Child Development, Certification in Web Development"
// 				workHistory="RUSD, Amazon, Web Development "
// 				description="From Ed to Tech"
// 				buttonMessage="Connect with Developer"
// 				wage="$40"
// 				linked=" "
// 			/>
// 			<CategoryPage
// 				icon="🧔"
// 				name="Watson"
// 				devType=" Full Stack Developer "
//         education= "BA in Computer Science"
// 				workHistory=""
// 				description="From Ed to Tech"
// 				buttonMessage="Connect with Developer"
// 				wage="$40"
// 				linked=" "
// 			/>
// 			<CategoryPage
// 				icon="🚀"
//         name="John"
// 				devType=" Full Stack Developer "
//         education= "Certification in Web Development"
// 				workHistory="Rialto USD"
// 				description="From Ed to Tech"
// 				buttonMessage="Connect with Developer"
// 				wage="$40"
// 				linked=" "
// 			/>
//       <CategoryPage
// 				icon="🚀"
//         name="John"
// 				devType=" Full Stack Developer "
//         education= "Certification in Web Development"
// 				workHistory="Rialto USD"
// 				description="From Ed to Tech"
// 				buttonMessage="Connect with Developer"
// 				wage="$40"
// 				linked=" "
// 			/>
//       <CategoryPage
// 				icon="🚀"
//         name="John"
// 				devType=" Full Stack Developer "
//         education= "Certification in Web Development"
// 				workHistory="Rialto USD"
// 				description="From Ed to Tech"
// 				buttonMessage="Connect with Developer"
// 				wage="$40"
// 				linked=" "
// 			/>
// 		</div>
// 	);
// };

export default App;
