import React from "react";
import classes from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img
                    src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
                    className={classes.img}
                />
            </div>
            <div>
                ava+descr
            </div>
        </div>
    )
}

export default ProfileInfo
