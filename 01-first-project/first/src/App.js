import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/navBar/navBar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";



const App = () => {
    return (
            <div className="app-wrapper">
                <Header/>
                <NavBar />
                <div className="app-wrapper-content">
                    <Route  path='/profile'  render={()=><Profile />}/>
                    <Route path='/message'   render={()=><DialogsContainer  />}/>
                    <Route path='/users'    render={()=><UsersContainer/>}/>
                </div>
            </div>
    );
};
export default App;

