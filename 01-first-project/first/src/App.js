import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/navBar/navBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";



const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar />
                <div className="app-wrapper-content">
                    <Route  path='/profile'  render={()=><Profile store={props.store}/>}/>
                    <Route path='/message'   render={()=><DialogsContainer store={props.store} />}/>
                </div>
            </div>
        </BrowserRouter>
    );
};
export default App;

