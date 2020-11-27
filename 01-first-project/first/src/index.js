import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";

 const renderUI=()=>{
    ReactDOM.render(
        <React.StrictMode>
            <App  state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderUI(store.getState())


store.subscribe(renderUI);

reportWebVitals();
