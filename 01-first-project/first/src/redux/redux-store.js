import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import UsersReducer from "./users-reducer";

let reducers=combineReducers({
    profileState:profileReducer,
    dialogsState:messageReducer,
    usersState:UsersReducer
})
let store =createStore(reducers)

window.store=store;
export default store




