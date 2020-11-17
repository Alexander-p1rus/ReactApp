import classes from "./Dialogs.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import MessageItem from "./MessageItem/MessageItem";
import DialogsItem from "./DialogsItem/DialogsItem";

const Dialogs = (props) => {
    const dialogsData = [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Anya'},
        {id: 3, name: 'Ilya'}
    ]

    const messageData = [
        {id: 1, message: 'hello mujiki'},
        {id: 2, message: 'Kak dela'},
        {id: 3, message: '4to novogo'}
    ]

    const getDialogs = dialogsData.map(arr => <DialogsItem name={arr.name} id={arr.id}/>)
    const getMessage = messageData.map(mes=><MessageItem message={mes.message} id={mes.id}/>)

    return (
        <div className={classes.dialog}>
            <div className={classes.dialogs}>
                {getDialogs}
            </div>
            <div className={classes.messages}>
                {getMessage}
            </div>
        </div>
    );
};
export default Dialogs;
