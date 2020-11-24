import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {subscribe, updatePostText} from "./redux/state";
import {addPost} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

 const renderUI=()=>{
    ReactDOM.render(
        <React.StrictMode>
            <App updatePostText={updatePostText} state={state} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderUI(state)

subscribe(renderUI);

reportWebVitals();
