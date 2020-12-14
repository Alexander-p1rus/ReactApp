import React from 'react'
import UsersItem from "./UsersItem/UsersItem";
import * as axios from "axios";


class Users extends React.Component {
constructor(props) {
    super(props);
    axios.get('https://social-network.samuraijs.com/api/1.0/users?count=5').then(response=>{
        props.setUsers(response.data.items)
    })
}

    render() {
        return (
            <div>
                {this.props.users.map((user) => {
                    return <UsersItem user={user} follow={this.props.follow}
                                      unFollow={this.props.unFollow}
                    />
                })}
            </div>
        )
    }
}

export default Users