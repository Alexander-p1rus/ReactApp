import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import CreatePost from "./CreatePost/CreatePost";

// const getPostItems = postItems.map(post=><Post postText={post.postText}/>)


let MyPosts = (props) => {
    const getPostItems = props.postItems.map((post)=>{
        return(
            <Post Message={post.postText} id={post.likeCount} />
        )
    })
    return (
        <div className={classes.MyPosts}>
            <CreatePost/>
            {/*{console.log(MyPosts)}*/}
            {getPostItems}
        </div>
    );
}

export default MyPosts;

