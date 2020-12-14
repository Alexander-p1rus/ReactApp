import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {followActionCreater, setUsersActionCreater, unFollowActionCreater} from "../../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersState.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followActionCreater(id))
        },
        unFollow: (id) => {
            dispatch(unFollowActionCreater(id))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreater(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer