import React from "react";
import {addMessageActionCreater, updateMessageActionCreater} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let usersData=props.store.getState().dialogsState.dialogsData
    let messageData = props.store.getState().dialogsState.messageData
    const updateMessage = (newText) => {
        props.store.dispatch(updateMessageActionCreater(newText))
    }

    let newMessageText = props.store.getState().dialogsState.newMessageText

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreater())
    }

    return (
        <Dialogs messageData={messageData}
                 updateMessage={updateMessage}
                 newMessageText={newMessageText}
                 addMessage={addMessage}
                 usersData={usersData}
        />
    );
};
export default DialogsContainer;
