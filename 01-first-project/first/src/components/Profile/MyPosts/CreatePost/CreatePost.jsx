import React from "react";
import classes from "./CreatePost.module.css"

const CreatePost = () => {
    return (
        <div className={classes.content}>
            <textarea className={classes.area}></textarea>
            <button className={classes.btn}>post</button>
        </div>
    )
}

export default CreatePost;
