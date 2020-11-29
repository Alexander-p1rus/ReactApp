import React from "react";
import {addPostActionCreater, updatePostActionCreater} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


let MyPostsContainer = () => {

    return(<StoreContext.Consumer>{
            (store) => {
            const updateText = (text) => {
                store.dispatch(updatePostActionCreater(text))
            }

            const addPost = () => {
                store.dispatch(addPostActionCreater())
            }
            return <MyPosts postItems={store.getState().profileState.postItems}
                            newPostText={store.getState().profileState.newPostText}
                            updateText={updateText}
                            addPost={addPost}
            />
        }
        }
    </StoreContext.Consumer>
    )

}

export default MyPostsContainer;

