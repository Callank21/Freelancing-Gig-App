// import logo from './logo.svg';
import { useState,  } from "react";
import  HomePage  from "./components/homePage";
// import Login from "./components/login";
// import Settings from "./components/settingsPage";
// import Signup from "./components/signup";
// import JsonData from "./data/data.json";
import "./App.css";




function App() {
  const [currentPage, handlePageChange] = useState(" ");

  const renderPage = () => {
    switch(currentPage) {
      case "Home Page":
        return <HomePage  />;
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
      <HomePage currentPage={currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
      
    </div>   
  );
}



export default App;

