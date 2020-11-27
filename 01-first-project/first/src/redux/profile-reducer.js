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
        case addPost:
            let Data = {
                postText: state.newPostText,
                likeCount: 0
            }

            state.postItems.push(Data)
            state.newPostText = ''
            return state
        case updatePostAction:
            state.newPostText = action.text
            return state
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
