import React from 'react'
import UsersItem from "./UsersItem/UsersItem";


const Users = (props) => {
    return (
        <div>
            {props.users.map((user) => {
                return <UsersItem user={user} follow={props.follow}
                                  unFollow={props.unFollow}
                />
            })}
        </div>
    )
}

export default Users