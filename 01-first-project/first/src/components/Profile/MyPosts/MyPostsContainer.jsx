import React from "react";
import {addPostActionCreater, updatePostActionCreater} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreater())
        },
        updateText: (text) => {
            dispatch(updatePostActionCreater(text))
        }
    }

}

let mapStateToProps = (state) =>{
    return{
        postItems: state.profileState.postItems,
        newPostText: state.profileState.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;

debugger