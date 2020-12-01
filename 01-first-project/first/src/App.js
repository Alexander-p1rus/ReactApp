import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/navBar/navBar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";



const App = () => {

    return (
            <div className="app-wrapper">
                <Header/>
                <NavBar />
                <div className="app-wrapper-content">
                    <Route  path='/profile'  render={()=><Profile />}/>
                    <Route path='/message'   render={()=><DialogsContainer  />}/>
                </div>
            </div>
    );
};
export default App;

