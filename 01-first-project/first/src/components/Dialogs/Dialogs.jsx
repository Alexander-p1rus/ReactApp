import classes from "./Dialogs.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import MessageItem from "./MessageItem/MessageItem";
import DialogsItem from "./DialogsItem/DialogsItem";

const Dialogs = (props) => {
    const getDialogUsers = props.dialogsState.dialogsData.map(dialog => <DialogsItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)
    const getMessage = props.dialogsState.messageData.map(message => <MessageItem message={message.message} id={message.id}/>)
    return (
        <div className={classes.dialog}>
            <div className={classes.dialogs}>
                {getDialogUsers}
            </div>
            <div className={classes.messages}>
                {getMessage}
            </div>
        </div>
    );
};
export default Dialogs;
