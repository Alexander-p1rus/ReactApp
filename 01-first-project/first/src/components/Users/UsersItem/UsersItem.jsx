import React from 'react'
import classes from './UsersItem.module.css'
import photo from '../../../assets/img/laptop-user-1-1179329.png'


const UsersItem = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.flex}>
                {props.user.photos.small === null ? <img src={photo} alt=""/> :
                    <img src={props.user.photos.small} alt=""/>}
                <div>
                    {props.user.status}
                </div>
            </div>
            <div>
                <button onClick={() => {
                    if (props.user.followed) {
                        props.unFollow(props.user.id)
                    } else {
                        props.follow(props.user.id)
                    }
                }}>{props.user.followed ? 'Follow' : 'unfollow'}</button>
            </div>
        </div>
    )
}

export default UsersItem