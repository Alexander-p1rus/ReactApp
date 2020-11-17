import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import CreatePost from "./CreatePost/CreatePost";

const postItems =[
    {postText:'privet',likeCount:8},
    {postText:'kak dela',likeCount:8},
    {postText:'top posti',likeCount:8}
]

const getPostItems = postItems.map(post=><Post postText={post.postText}/>)


const MyPosts = () => {
    return (
        <div className={classes.MyPosts}>
            <CreatePost/>
            {getPostItems}
        </div>
    );
}

export default MyPosts;

