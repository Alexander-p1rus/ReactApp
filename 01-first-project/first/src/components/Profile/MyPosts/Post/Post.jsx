import React from "react";
import classes from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={classes.content}>
            <img src="https://i.ytimg.com/vi/GvCKLJIl718/hqdefault.jpg" className={classes.img}/>
            <div className={classes.item}>{props.postText}</div>
        </div>
    )
}

export default Post;
