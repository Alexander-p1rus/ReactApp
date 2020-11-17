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

    const messageData =[
        {id: 1, message: 'hello mujiki'},
        {id: 2, message: 'Kak dela'},
        {id: 3, message: '4to novogo'}
    ]

    return (
        <div className={classes.dialog}>
            <div className={classes.dialogs}>
                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id}/>

            </div>
            <div className={classes.messages}>
                <MessageItem message={messageData[0].message} id={messageData[0].id}/>
                <MessageItem message={messageData[1].message} id={messageData[1].id}/>
                <MessageItem message={messageData[2].message} id={messageData[2].id}/>
            </div>
        </div>
    );
};
export default Dialogs;
