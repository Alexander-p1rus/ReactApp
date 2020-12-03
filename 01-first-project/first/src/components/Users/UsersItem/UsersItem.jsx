import React from 'react'


const UsersItem=(props)=>{
    return(
        <div>
            <div>
                {props.user.status}
            </div>
            <div>
                <button onClick={()=>{
                    if(props.user.isFollow){
                        props.unFollow(props.user.id)
                    }else{
                        props.follow(props.user.id)
                    }
                }}>{props.user.isFollow?'Follow':'unfollow'}</button>
            </div>
        </div>
    )
}

export default UsersItem