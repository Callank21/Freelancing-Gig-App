// import { useState } from 'react';
import HomePage from './components/HomePage';
import Login from './components/pages/Login';
import Settings from './components/pages/SettingsPage';
import Signup from './components/pages/Signup';
import Footer from './components/Footer';
import Header from './components/Header';
import Developers from './components/pages/Developers';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import JsonData from "./data/data.json";
import './App.css';
// import CategoryPage from './components/pages/CategoryPage';
// import ProfilePage from './components/pages/ProfilePage';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <main>
          {/* <ProfilePage /> */}
          {/* <CategoryPage /> */}
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
