import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/navBar/navBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import  {BrowserRouter,Route} from "react-router-dom";



const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route  path='/profile' component={Profile}/>
                    <Route path='/message' component={Dialogs}/>
                </div>
            </div>
        </BrowserRouter>
    );
};
export default App;

