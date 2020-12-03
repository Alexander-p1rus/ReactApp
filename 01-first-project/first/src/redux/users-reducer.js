const follow = 'FOLLOW'
const unFollow = 'UNFOLLOW'
const setUsers='SET-USERS'


const initState = {
    users: [
        {
            id: 1,
            isFollow: true,
            fullName: 'Sasha',
            status: 'ya ho4u rasti',
            urlImg: 'https://everyday.codes/wp-content/uploads/2020/01/0-U2DmhXYumRyXH6X1.png',
            location: {country: 'Russian', town: 'Kazan'}
        },
        {
            id: 2,
            isFollow: false,
            fullName: 'Anya',
            status: 'ya ubirau govno',
            urlImg: 'https://cdn.auth0.com/blog/logos/mobx.png',
            location: {country: 'Russian', town: 'Samara'}
        },
        {
            id: 3,
            isFollow: false,
            fullName: 'Ilya',
            status: 'ya ignorshik ebanniy',
            urlImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR44uNXuwS3I8WAL-IoiujdDj8Q2iBs2h0aBA&usqp=CAU',
            location: {country: 'Russian', town: 'Moskow'}
        }
    ]
}

const UsersReducer = (state = initState, action) => {
    switch (action.type) {
        case follow:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id == action.id) {
                        user.isFollow = true
                    }
                    return user
                })
            }

        case unFollow:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id == action.id) {
                        user.isFollow = false
                    }
                    return user
                })
            }
        case setUsers:
              return{
                  ...state,
                  users:[state.users,...action.users]
              }
        default:return state
    }
}


export default UsersReducer

export const followActionCreater=(id)=>({type:'FOLLOW',id:id})
export  const unFollowActionCreater=(id)=>({type:'UNFOLLOW',id:id})
export const setUsersActionCreater=(users)=>({type:'SET-USERS',users:users})