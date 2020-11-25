import React from "react";
import classes from "./CreatePost.module.css"

const CreatePost = (props) => {
    let textData = React.createRef()


    const updateText = () => {
        console.log(textData.current.value)
        const text = textData.current.value
        const action ={type:'UPDATE-POST-TEXT',text:text}
        props.dispatch(action)
    }

    const GetPost = () => {
       const action={type:'ADD-POST'}
        props.dispatch(action)
    }
    return (
        <div className={classes.content}>
            <textarea onChange={updateText} ref={textData} className={classes.area} value={props.newPostText}/>
            <button onClick={GetPost} className={classes.btn}>post</button>
        </div>
    )
}

export default CreatePost;
