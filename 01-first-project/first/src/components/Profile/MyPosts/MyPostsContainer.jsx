import React from "react";
import {addPostActionCreater, updatePostActionCreater} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


let MyPostsContainer = (props) => {

    const postItems = props.store.getState().profileState.postItems
    const newPostText = props.store.getState().profileState.newPostText

    const updateText = (text) => {
        props.store.dispatch(updatePostActionCreater(text))
    }

    const addPost = () => {
        props.store.dispatch(addPostActionCreater())
    }

    return <MyPosts postItems={postItems}
                    newPostText={newPostText}
                    updateText={updateText}
                    addPost={addPost}
    />

}

export default MyPostsContainer;

