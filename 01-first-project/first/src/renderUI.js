import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

export const renderUI=(state, addPost,updatePostText)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App updatePostText={updatePostText} state={state} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}