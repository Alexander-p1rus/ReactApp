import React from "react";
import {addMessageActionCreater, updateMessageActionCreater} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        messageData: state.dialogsState.messageData,
        newMessageText: state.dialogsState.newMessageText,
        usersData: state.dialogsState.dialogsData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateMessage: (newText) => {
            dispatch(updateMessageActionCreater(newText))
        },

        addMessage: () => {
            dispatch(addMessageActionCreater())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer