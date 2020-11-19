import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/navBar/navBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar />
                <div className="app-wrapper-content">
                    <Route  path='/profile'  render={()=><Profile updatePostText={props.updatePostText} addPost={props.addPost} profileState={props.state.profileState}/>}/>
                    <Route path='/message'   render={()=><Dialogs dialogsState={props.state.dialogsState} />}/>
                </div>
            </div>
        </BrowserRouter>
    );
};
export default App;

