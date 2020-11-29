import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./StoreContext";

const renderUI=(store)=>{
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
console.log(store)
renderUI(store)


store.subscribe(()=>{
    renderUI(store)
});

reportWebVitals();
