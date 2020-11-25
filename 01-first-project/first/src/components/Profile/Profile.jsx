import React from "react";
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <div>
                <MyPosts dispatch={props.dispatch}
                         postItems={props.profileState.postItems}
                         newPostText={props.profileState.newPostText}/>
            </div>
        </div>)

};

export default Profile
