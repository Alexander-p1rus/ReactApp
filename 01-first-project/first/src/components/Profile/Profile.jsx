import React from "react";
import classes from "./Profile.module.css"

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" />
      </div>
      <div>ava+descr</div>
      <div>
        my posts
        <div>new post</div>
        <div className={classes.posts}>
            <div className={classes.item}>post1</div>
            <div className={classes.item}>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile
