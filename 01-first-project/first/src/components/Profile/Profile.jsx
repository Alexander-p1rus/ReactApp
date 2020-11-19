import React from "react";
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
    return (
        <div >
            <ProfileInfo />
            <div>
                {/*{console.log(props.dialogsData)}*/}
                <MyPosts addPost={props.addPost} postItems={props.profileState.postItems} />
            </div>
        </div>)

};

export default Profile
