import "./App.css";
import React from "react";
import Header from "./components/Header";
import NavBar from "./components/navBar";
import Profile from "./components/Profile";
const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
};

export default App;
