const addPost = 'ADD-POST'
const updatePostAction = 'UPDATE-POST-TEXT'

let initState={
    postItems: [
        {postText: 'privet', likeCount: 8},
        {postText: 'kak dela', likeCount: 8},
        {postText: 'top posti', likeCount: 8}
    ],
        newPostText: ""
}

const profileReducer = (state=initState, action) => {

    switch (action.type) {
        case addPost: {
            let newState={...state}
            newState.postItems=[...state.postItems]
            let Data = {
                postText: newState.newPostText,
                likeCount: 0
            }

            newState.postItems.push(Data)
            newState.newPostText = ''
            return newState
        }
        case updatePostAction:{
            let newState={...state}
            newState.newPostText = action.text
            return newState
        }
        default:
            return state
    }
}

export const updatePostActionCreater = (text) => {
    return {type: updatePostAction, text: text}
}

export const addPostActionCreater = () => {
    return {type: addPost}
}

export  default profileReducer
