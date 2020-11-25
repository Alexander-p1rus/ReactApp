import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

 const renderUI=()=>{
    ReactDOM.render(
        <React.StrictMode>
            <App updatePostText={store.updatePostText.bind(store)} state={store.getState()} addPost={store.addPost.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderUI(store.getState())


store.subscribe(renderUI);

reportWebVitals();
