import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";

let reducers=combineReducers({
    profileState:profileReducer,
    dialogsState:messageReducer
})
let store =createStore(reducers)

window.store=store;
export default store




