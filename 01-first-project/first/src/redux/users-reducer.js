const follow = 'FOLLOW'
const unFollow = 'UNFOLLOW'
const setUsers='SET-USERS'


const initState = {
    users: []
}

const UsersReducer = (state = initState, action) => {
    switch (action.type) {
        case follow:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id == action.id) {
                        user.followed = true
                    }
                    return user
                })
            }

        case unFollow:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id == action.id) {
                        user.followed = false
                    }
                    return user
                })
            }
        case setUsers:
              return{
                  ...state,
                  users:[...state.users,...action.users]
              }
        default:return state
    }
}


export default UsersReducer

export const followActionCreater=(id)=>({type:'FOLLOW',id:id})
export  const unFollowActionCreater=(id)=>({type:'UNFOLLOW',id:id})
export const setUsersActionCreater=(users)=>({type:'SET-USERS',users:users})