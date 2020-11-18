import classes from "./DialogsItem.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    return (
        <div className={classes.dialog_item}>
            <img src={props.avatar}/>
            <NavLink to={"/message/" + props.id}>{props.name}</NavLink>
        </div>
    );
}
export default DialogsItem


