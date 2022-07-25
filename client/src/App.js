// import logo from './logo.svg';
import { useState } from 'react';
import HomePage from './components/homePage';
// import Login from "./components/login";
// import Settings from "./components/settingsPage";
// import Signup from "./components/signup";
// import JsonData from "./data/data.json";
import './App.css';

function App() {
  const [currentPage, handlePageChange] = useState(' ');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home Page':
        return <HomePage />;
      // case "Login":
      //   return <Login />;
      // case "Signup":
      //   return <Signup />;
      // case "Settings":
      //   return <Settings />;
      default:
    }
  };
  return (
    <div>
      <HomePage currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

// CategoryPage created by Steph

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
