// import logo from './logo.svg';
import { useState,  } from "react";
import  HomePage  from "./components/homePage";
// import Settings from "./components/settingsPage";
// import Login from "./components/login";
// import Signup from "./components/signup";
// import { Header } from "./components/header";
// import { Developers } from "./components/developers";
// import { Contact } from "./components/contact";
// import JsonData from "./data/data.json";
import "./App.css";




function App() {
  const [currentPage, handlePageChange] = useState(" ");

  const renderPage = () => {
    switch(currentPage) {
      case "Home Page":
        return <HomePage  />;
      // case "Signup":
      //   return <Signup />;
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

