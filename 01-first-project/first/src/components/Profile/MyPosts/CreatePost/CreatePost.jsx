import React from "react";
import classes from "./CreatePost.module.css"

const CreatePost = (props) => {
    let textData = React.createRef()


    const updateText = () => {

        const text = textData.current.value
        props.updatePostText(text)
    }

    const GetPost = () => {
        props.addPost()
    }
    return (
        <div className={classes.content}>
            <textarea onChange={updateText} ref={textData} className={classes.area} value={props.newPostText}/>
            <button onClick={GetPost} className={classes.btn}>post</button>
        </div>
    )
}

export default CreatePost;
