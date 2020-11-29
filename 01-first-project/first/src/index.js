import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";

const renderUI=(store)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App  store={store} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
console.log(store)
renderUI(store)


store.subscribe(()=>{
    renderUI(store)
});

reportWebVitals();
