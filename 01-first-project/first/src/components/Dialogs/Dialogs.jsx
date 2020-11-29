import classes from "./Dialogs.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import MessageItem from "./MessageItem/MessageItem";
import DialogsItem from "./DialogsItem/DialogsItem";



const Dialogs = (props) => {
    const messageText = React.createRef()
    const getDialogUsers = props.usersData.map(dialog => <DialogsItem name={dialog.name} id={dialog.id}
                                                                                     avatar={dialog.avatar}/>)
    const getMessage = props.messageData.map(message => <MessageItem message={message.message}
                                                                                  id={message.id}/>)

    const updateMessage = () => {
        let newText = messageText.current.value
        props.updateMessage(newText)
    }

    const addMessage = () => {
        props.addMessage()
    }

    return (
        <div className={classes.dialog}>
            <div className={classes.dialogs}>
                {getDialogUsers}
            </div>
            <div className={classes.messages}>
                <div className={classes.messages}>
                    {getMessage}
                </div>
                <div className={classes.input_form}>
                    <textarea onChange={updateMessage} ref={messageText} value={props.newMessageText}/>
                    <button onClick={addMessage}/>
                </div>
            </div>
        </div>
    );
};
export default Dialogs;
