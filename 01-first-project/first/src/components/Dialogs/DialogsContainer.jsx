import React from "react";
import {addMessageActionCreater, updateMessageActionCreater} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {
            (store) => {

                const updateMessage = (newText) => {
                    store.dispatch(updateMessageActionCreater(newText))
                }


                const addMessage = () => {
                    store.dispatch(addMessageActionCreater())
                }

                return (
                    <Dialogs messageData={store.getState().dialogsState.messageData}
                             updateMessage={updateMessage}
                             newMessageText={store.getState().dialogsState.newMessageText}
                             addMessage={addMessage}
                             usersData={store.getState().dialogsState.dialogsData}
                    />
                )
            }
        }
    </StoreContext.Consumer>
};
export default DialogsContainer;
