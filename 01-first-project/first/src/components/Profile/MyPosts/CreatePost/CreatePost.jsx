import React from "react";
import classes from "./CreatePost.module.css"

const CreatePost = (props) => {
    let textData=React.createRef()


    const GetPost=()=>{
        let text=textData.current.value
        props.addPost(text)
        textData=''
    }
    return (
        <div className={classes.content}>
            <textarea ref={textData} className={classes.area}></textarea>
            <button onClick={GetPost} className={classes.btn}>post</button>
        </div>
    )
}

export default CreatePost;
