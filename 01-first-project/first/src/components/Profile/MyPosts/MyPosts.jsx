import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import CreatePost from "./CreatePost/CreatePost";

const MyPosts = () => {
    return (
        <div className={classes.MyPosts}>
            <CreatePost/>
            <Post/>
        </div>
    );
}

export default MyPosts;

