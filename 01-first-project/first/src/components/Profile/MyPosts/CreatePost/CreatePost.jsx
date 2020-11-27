import React from "react";
import classes from "./CreatePost.module.css"
import {addPostActionCreater, updatePostActionCreater} from "../../../../redux/profile-reducer";

const CreatePost = (props) => {
    let textData = React.createRef()


    const updateText = () => {
        console.log(textData.current.value)
        const text = textData.current.value
        props.dispatch(updatePostActionCreater(text))
    }

    const GetPost = () => {
        props.dispatch(addPostActionCreater())
    }
    return (
        <div className={classes.content}>
            <textarea onChange={updateText} ref={textData} className={classes.area} value={props.newPostText}/>
            <button onClick={GetPost} className={classes.btn}>post</button>
        </div>
    )
}

export default CreatePost;
